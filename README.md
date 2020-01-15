# React Native Template MDD22

<p>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template

## :arrow_forward: Usage

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

### `react-native@0.61.0` or higher

```sh
npx react-native init TestApp --template react-native-template-mdd2

or

npx react-native init TestApp --template https://github.com/mustafademirtas/react-native-template-mdd22
```

### Install
```bash

# Link Assets
yarn link:asset

react-native link ./src/assets/fonts/Rubik

```

## Issues

#### 1. Multiple commands produce' error when building with new Xcode build system

[Solution Link](https://github.com/oblador/react-native-vector-icons/issues/1074)

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
