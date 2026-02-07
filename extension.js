import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('nac.run', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        const filePath = editor.document.fileName;

        exec(`./nac ${filePath}`, (err, stdout, stderr) => {
            if (err) {
                vscode.window.showErrorMessage(stderr);
                return;
            }
            vscode.window.showInformationMessage(stdout);
        });
    });

    context.subscriptions.push(disposable);
}