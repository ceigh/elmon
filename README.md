# 🍋 Elmon
> A package version manager, that just makes IT simple.

## Install

Local:

`yarn add elmon  # or npm i elmon`

Global:

`yarn global add elmon  # or npm -g i elmon`

## Usage

Just run `elmon` or `e` alias.

Or if you want to use it as a CLI, here are the necessary flags:

```shell
--major, -M Increment X.0.0
--minor, -m Increment 0.X.0
--patch, -p Increment 0.0.X
```

Use `elmon --help` for more.

## Examples

```
$ elmon --major  # 0.0.0 > 1.0.0
$ e -p           # 0.0.0 > 0.0.1
$ e              # open prompt with update type select
```

## Additional

This project was developed for automated versioning using utilities
such as [husky](https://github.com/typicode/husky)
and [others](https://github.com/topics/git-hooks).

Automate the versioning of your package with husky:

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "elmon",
    }
  }
}
```
