# NaC for Visual Studio Code

The VS Code NaC extension provides language support for the **NaC programming language**.

## Requirements

* **Visual Studio Code 1.80** or newer.
* **NaC Language Runtime** (the `nac` / `nac.exe` interpreter) installed on your system and either on your `PATH`, or pointed to via the `nac.executablePath` setting (see below).

## Quick Start

Welcome! 👋🏻
Whether you are new to NaC or an experienced developer, we hope this extension enhances your development experience.

1. **Install NaC** (the interpreter) — see the main [NaC project](https://github.com/naclang/nac) for build instructions.
2. **Install the VS Code NaC extension** from the Marketplace.
3. **Open any `.nac` file** to automatically activate the extension. A **▶ Run NaC** button appears in the status bar (bottom right) whenever a `.nac` file is the active editor.

You are ready to NaC :-) 🚀🚀🚀

---

## Feature Highlights

* **Syntax Highlighting** — keywords, string/boolean/null literals, numbers, operators (including the compound assignment operators `+= -= *= /=`), and all current built-in functions.
* **Run a file directly from the editor**, three ways:
  * Click **▶ Run NaC** in the status bar, or the play icon in the editor title bar.
  * Right-click in the editor → **NaC: Run File**.
  * Press `Ctrl+Alt+N` (`Cmd+Alt+N` on macOS).

  Output (and any interpreter errors) show up in the **"NaC" output channel** rather than a popup, so multi-line output and long-running scripts are readable. The file is saved automatically before running.
* **Editing Support** — automatic bracket/quote matching, comment toggling (`//`), and code folding (including `// #region` / `// #endregion` markers).

### Settings

| Setting | Default | Description |
|---|---|---|
| `nac.executablePath` | *(empty)* | Path to the `nac` / `nac.exe` interpreter. Leave empty to use `nac` (or `nac.exe` on Windows) from your `PATH`. |

## What's Next

* Check out the **Example** section below to see NaC in action.
* If you encounter any bugs, please [file an issue](https://github.com/naclang/vscode-extension/issues) on our GitHub repository.

---

## Example Snippet

```nac
// HTTP GET request example (readable, method-named style)
out(httpGet("https://api.ipify.org/?format=json"));

// Fibonacci function definition
fn fibonacci(n) {
    if(n <= 1) {
        rn n;
    };
    rn fibonacci(n-1) + fibonacci(n-2);
};

// Compound assignment
total = 0;
for (i = 1; i <= 5; i += 1) {
    total += i;
};

// Using 'out' for console output
out(fibonacci(10));
out(total);
```

## Troubleshooting

**Syntax highlighting is not working:**

* Ensure the file extension is strictly `.nac`.
* Restart VS Code to refresh the extension host.
* Check the bottom-right corner to ensure "NaC" is the active language mode.

**"Run NaC" can't find the interpreter:**

* Make sure `nac` (or `nac.exe` on Windows) is on your `PATH`, or set `nac.executablePath` in your VS Code settings to its full path.

**Extension is not appearing:**

* Verify that the extension is correctly installed (Extensions view, or `.vscode/extensions` folder for a manual install).
* Check that your `package.json` file is valid and follows the VS Code extension schema.

## License

[MIT](https://raw.githubusercontent.com/naclang/vscode-extension/refs/heads/main/LICENSE)
