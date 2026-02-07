# NaC Language VSCode Extension

The **NaC Language** extension provides support for the [NaC Programming Language](https://github.com/naclang/nac) within VSCode. It includes syntax highlighting and essential language support.

---

## Features

* **Syntax Highlighting** for files with the `.nac` extension.
* Core language support tailored for **NaC**.
* Fast, lightweight, and optimized for performance.

---

## Installation

### Local Installation (via VSIX)

1. **Build the `.vsix` package:**
```bash
vsce package

```


This command generates the `nac-language-0.0.1.vsix` file.
2. **Install to VSCode:**
```bash
code --install-extension nac-language-0.0.1.vsix

```



> **Note:** This method only works on your **local machine**. Others will not be able to use the extension unless you share the `.vsix` file with them.

---

## Developer Notes

* **Main Entry Point:** `extension.js`
* **Language Configuration:** `language-configuration.json`
* **Syntax Definitions:** `syntaxes/nac.tmLanguage.json`
* **Required VSCode Engine:** `^1.80.0`

---

## Contributing

* Feel free to **Fork** the repository, make your changes, and submit a **Pull Request**!
* You can share suggestions or report bugs via the [Issues](https://github.com/naclang/vscode-extension/issues) section.
