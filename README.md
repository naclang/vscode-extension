# NaC for Visual Studio Code

The VS Code NaC extension provides rich language support for the **NaC programming language**.

## Requirements

* **Visual Studio Code 1.80** or newer.
* **NaC Language Runtime** installed on your system.

## Quick Start

Welcome! 👋🏻
Whether you are new to NaC or an experienced developer, we hope this extension enhances your development experience.

1. **Install NaC** from the [official installation page](https://naclang.github.io/install.html) if you haven't already.
2. **Install the VS Code NaC extension** from the Marketplace.
3. **Open any `.nac` file** to automatically activate the extension. The **NaC status bar** will appear in the bottom right corner of the window.

You are ready to NaC :-) 🚀🚀🚀

---

## Feature Highlights

* **Syntax Highlighting** - Vivid colors for keywords, strings, and numeric values.
* **IntelliSense** - Highlighting for built-in functions like `http`, `out`, and math utilities.
* **Code Navigation** - Support for code folding to manage large logic blocks.
* **Editing Support** - Automatic bracket matching and comment toggling (`//`).

## What's Next

* Explore the [NaC Language Documentation](https://naclang.github.io/docs) to learn about syntax and built-in functions.
* Check out the **Example** section below to see NaC in action.
* If you encounter any bugs, please [file an issue](https://github.com/naclang/vscode-extension/issues) on our GitHub repository.

---

## Example Snippet

```nac
// HTTP GET request example
http("GET", "https://api.ipify.org/?format=json");

// Fibonacci function definition
fn fibonacci(n) {
    if(n <= 1) {
        rn n;
    };
    rn fibonacci(n-1) + fibonacci(n-2);
};

// Using 'out' for console output
out(fibonacci(10));

```

## Troubleshooting

**Syntax highlighting is not working:**

* Ensure the file extension is strictly `.nac`.
* Restart VS Code to refresh the extension host.
* Check the bottom-right corner to ensure "NaC" is the active language mode.

**Extension is not appearing:**

* Verify that the extension is correctly placed in your `.vscode/extensions` folder.
* Check that your `package.json` file is valid and follows the VS Code extension schema.


## License

[MIT](https://raw.githubusercontent.com/naclang/vscode-extension/refs/heads/main/LICENSE)
