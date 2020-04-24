# 🍋 Elmon
> A package version manager, that just makes IT simple.

[![npm](https://img.shields.io/npm/v/elmon?style=plastic)](https://www.npmjs.com/package/elmon)
[![size](https://img.shields.io/bundlephobia/minzip/elmon?style=plastic)](https://www.npmjs.com/package/elmon)

## Install

Local:

`yarn add elmon -D`

Global:

`yarn global add elmon`

## Usage

Just run `elmon` or `e` alias.

Or if you want to use it as a CLI, here are the necessary flags:

```
--major, -M Increment X.0.0
--minor, -m Increment 0.X.0
--patch, -p Increment 0.0.X
```

Use `elmon --help` for more.

## Examples

```shell
$ elmon --major  # 0.0.0 > 1.0.0
$ e -p           # 0.0.0 > 0.0.1
$ e              # open prompt with update type select
```

<p align='center'>
  <a href='https://asciinema.org/a/323238'>
    <img src='https://asciinema.org/a/323238.svg' alt='asciicast'/>
  </a>
</p>

## Additional

This project was developed for automated versioning using utilities
such as [husky](https://github.com/typicode/husky)
and [others](https://github.com/topics/git-hooks).

Automate the versioning of your package with husky in `package.json`:

```json
{
  "scripts": {
    "version:patch": "elmon -p"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn run version:patch"
    }
  }
}
```
