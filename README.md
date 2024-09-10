
<div align="center">

<a href="https://www.linkedin.com/in/coltenkrauter/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
![License](https://img.shields.io/github/license/krauters/eslint-config)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=krauters.eslint-config)

![Version](https://img.shields.io/github/v/release/krauters/eslint-config)
[![npm version](https://img.shields.io/npm/v/@krauters/eslint-config.svg?style=flat-square)](https://www.npmjs.org/package/@krauters/eslint-config)
![GitHub Stars](https://img.shields.io/github/stars/krauters/eslint-config)
![Forks](https://img.shields.io/github/forks/krauters/eslint-config)

![GitHub Issues](https://img.shields.io/github/issues/krauters/eslint-config)
![Open PRs](https://img.shields.io/github/issues-pr/krauters/eslint-config)
![Commits per Month](https://img.shields.io/github/commit-activity/m/krauters/eslint-config)
![Contributors](https://img.shields.io/github/contributors/krauters/eslint-config)
![Last Commit](https://img.shields.io/github/last-commit/krauters/eslint-config)

[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@krauters/eslint-config&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@krauters/eslint-config)
![Code Size](https://img.shields.io/github/languages/code-size/krauters/eslint-config)
![Repo Size](https://img.shields.io/github/repo-size/krauters/eslint-config)

</div>

# ESLint Config

This configuration integrates [ESLint](https://eslint.org/) and [TypeScript ESLint](https://typescript-eslint.io/), built to ensure clean, consistent, and maintainable code in JavaScript and TypeScript projects.

## Tenets

1. **Feedback Loops**: In DevOps, feedback loops are essential. Realtime linting gives developers instant insight, allowing faster fixes and smoother workflows. So, configure your IDE to provide linting feedback as you type.

2. **Code Consistency**: Linting ensures uniform coding standards across the team, reducing errors and enhancing collaboration by maintaining clarity and readability.

## Rules

All linting rules are defined in [rules.js](./rules.js). This configuration offers a strong foundation suitable for most projects, promoting code quality from the start while remaining flexible for customization.

## Usage

### Commands You Need

```zsh
# Check if your code passes lint rules
npm run lint

# Fix what can be auto-fixed
npm run fix
```

### Using this Lint Config in Your Project

1. Install the necessary dependencies:

```zsh
npm install @krauters/eslint-config typescript-eslint --save-dev
```

1. Add a config file `eslint.config.js` to the root of your project with the following contents,

```javascript
import eslintConfig from '@krauters/eslint-config'

export default eslintConfig
```

1. Add these npm scripts to your [package.json](./package.json),

```json
{
  ...
  "scripts": {
    "test": "npm run lint",
    "lint": "npx eslint src/**",
    "fix": "npm run lint -- --fix"
  }
}
```

1. Update your README to show off your linting setup,

````zsh
## Lint
This package uses [@krauters/eslint-config](https://github.com/krauters/eslint-config).

```zsh
# Check if your code follows the rules
npm run lint

# Fix what can be auto-fixed
npm run fix
```
````

1. Now, let’s try it out.

```zsh
npm run lint
npm run fix
```

## Development

### Testing Locally

Want to test this linting config locally between two repos? Easy.

- **Repo1** is the ESLint config repo.
- **Repo2** is a JS/TS project using Repo1.

#### Steps

1. Clone both repos.
2. Link 'em up. From the root of Repo1, run:

```zsh
npm link
```

3. Then in Repo2, do this:

```zsh
npm link @krauters/eslint-config
```

4. When you’re done testing, unlink it with,

```zsh
npm unlink @krauters/eslint-config
```

## Resources

- [TypeScript ESLint Playground](https://typescript-eslint.io/play)

## Contributing

The goal of this project is to continually evolve and improve its core features, making it more efficient and easier to use. Development happens openly here on GitHub, and we’re thankful to the community for contributing bug fixes, enhancements, and fresh ideas. Whether you're fixing a small bug or suggesting a major improvement, your input is invaluable.

## License

This project is licensed under the ISC License. Please see the [LICENSE](./LICENSE) file for more details.

## 🥂 Thanks Contributors

Thanks for spending time on this project.

<a href="https://github.com/krauters/eslint-config/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=krauters/eslint-config" />
</a>

<br />
<br />
<a href="https://www.buymeacoffee.com/coltenkrauter"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=coltenkrauter&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
