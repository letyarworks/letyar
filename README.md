# Letyar

> **Every build carries a fingerprint.**

A practical developer toolkit for building, checking, and maintaining modern web and software projects.

[![npm version](https://img.shields.io/npm/v/letyar?style=flat-square)](https://www.npmjs.com/package/letyar)
[![npm downloads](https://img.shields.io/npm/dm/letyar?style=flat-square)](https://www.npmjs.com/package/letyar)
[![license](https://img.shields.io/npm/l/letyar?style=flat-square)](LICENSE)

## Install

Requires **Node.js 20+**.

```bash
npm install -g letyar
```

Verify the installation:

```bash
letyar --version
```

## Commands

### `letyar init`

Initialize a project with a clean development foundation.

```bash
letyar init
```

### `letyar doctor`

Check the local development environment, including Node.js, npm, and Git.

```bash
letyar doctor
```

### `letyar check`

Check project structure, configuration, required files, and Git status.

```bash
letyar check
```

## Example

Run the commands from the root of a project:

```bash
letyar init
letyar doctor
letyar check
```

## What Letyar is for

Letyar focuses on practical developer workflows:

- Project initialization
- Development environment diagnostics
- Project health checks
- Clear command-line feedback
- Simple, maintainable tooling

No unnecessary complexity. No black-box magic.

## Development

Clone the repository, install dependencies, build, and run tests:

```bash
git clone https://github.com/letyarworks/letyar.git
cd letyar
npm install
npm run build
npm test
```

Run the CLI directly during development:

```bash
npm run dev -- doctor
```

## Release

The package is published to npm as `letyar`.

```bash
npm view letyar version
```

## License

MIT — see [LICENSE](LICENSE).

---

Built by **Letyar Labs**.

**Every build carries a fingerprint.**
