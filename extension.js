const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

let outputChannel;
let statusBarItem;

function getNacCommand() {
    const config = vscode.workspace.getConfiguration('nac');
    const configured = config.get('executablePath');
    if (configured && configured.trim().length > 0) {
        return configured.trim();
    }
    // Fall back to whatever "nac" resolves to on PATH. On Windows this
    // will find nac.exe; on Unix it needs to actually be on PATH (a bare
    // "./nac" only worked if you happened to be in the right directory).
    return process.platform === 'win32' ? 'nac.exe' : 'nac';
}

function runNacFile() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('NaC: no active editor to run.');
        return;
    }
    if (editor.document.languageId !== 'nac') {
        vscode.window.showWarningMessage('NaC: the active file is not a .nac file.');
        return;
    }

    // Save first so the interpreter sees the latest content.
    editor.document.save().then(() => {
        const filePath = editor.document.fileName;
        const dir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const nacCmd = getNacCommand();

        if (!outputChannel) {
            outputChannel = vscode.window.createOutputChannel('NaC');
        }
        outputChannel.clear();
        outputChannel.show(true);
        outputChannel.appendLine(`$ ${nacCmd} ${fileName}`);
        outputChannel.appendLine('');

        // Run with cwd set to the script's own directory (not the extension
        // host's cwd) and the bare filename, so relative paths inside the
        // script behave the way the user expects.
        exec(`"${nacCmd}" "${fileName}"`, { cwd: dir, timeout: 30000 }, (err, stdout, stderr) => {
            if (stdout) {
                outputChannel.append(stdout);
            }
            if (stderr) {
                outputChannel.append(stderr);
            }
            if (err) {
                outputChannel.appendLine('');
                outputChannel.appendLine(`[NaC] Process exited with an error: ${err.message}`);
                if (err.code === 'ENOENT') {
                    vscode.window.showErrorMessage(
                        `NaC: could not find "${nacCmd}". Set "nac.executablePath" in your settings, ` +
                        `or make sure the nac interpreter is on your PATH.`
                    );
                }
            }
        });
    });
}

function activate(context) {
    const runCommand = vscode.commands.registerCommand('nac.run', runNacFile);
    context.subscriptions.push(runCommand);

    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'nac.run';
    statusBarItem.text = '$(play) Run NaC';
    statusBarItem.tooltip = 'Run this file with the NaC interpreter';
    context.subscriptions.push(statusBarItem);

    function updateStatusBarVisibility(editor) {
        if (editor && editor.document.languageId === 'nac') {
            statusBarItem.show();
        } else {
            statusBarItem.hide();
        }
    }

    updateStatusBarVisibility(vscode.window.activeTextEditor);
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarVisibility));
}

function deactivate() {
    if (outputChannel) {
        outputChannel.dispose();
    }
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}

module.exports = { activate, deactivate };
