# Description

The purpose of this project is to have a gatsby dev environment that is as convenient as possible, it should be plug & play. PRs and hints for improvement are always welcome - especially if you have ideas how to make graphQL Queries more typable :-)

# Some recent notes on why to use typescript :-)

- https://link.medium.com/4m6wVVuAAS

# Features

- Format Safe by TSLint, StyleLint and Prettier with Lint-Staged (Husky)
- Typings for scss files are automatically generated, you can import you styles like `import * as styles from './styles.module.scss'` and then use it like `<div className={styles.textWrapper}>`
- You can run gatsby dev mode on your machine environment or with docker-compose - the docker image is based on the official node docker image

# NPM scripts explained

- run scripts from `/gatsby` directory with either `npm run $scriptname` or with `yarn $scriptname`
- build: default gatsby script that generates static pages
- devLocal: uses concurrently to start the default gatsby development server + watch script that generates typings for .scss files within one command
- devDocker: does the same as devLocal + exposing the whole network interface from gatsby develop to make the server reachable from your host machine + setting docker environment variable SHELL to run the watch script
- watch: uses chokidar to watch all .scss files in project and run buildScssTypings script on change
- fix: formats the whole codebase according to linting and prettier rules - useful when refactoring a whole project at once
- buildScssTypings: will run the script in `scripts/generateTypings.js` that generates type definitions for all .scss files

# Setup & Running

## local development

- run `yarn` to install all npm packages
- run `yarn devLocal` to start gatsby server + file watch

## docker development

- docker-compose is mounting the gatsby directory (except the node_modules dir), so you still have hot reloading and see your changed immediately
- note: if you add new packages, you need to rebuild the container because the package installation command is run inside the container when building
- run `docker-compose build` to build the container
- run `docker-compose up` to start the
- access http://localhost:8000/

## Todo:

[ ] adjust generateTypings script to just rebuild the typings for recently changed files and not for all files

## VS Code Extensions

- VS Code command line tools have to be installed
- receive a list of current installed extensions: `code --list-extensions | xargs -L 1 echo code --install-extension`

# Install those extensions for a smooth workflow

```
code --install-extension DSKWRK.vscode-generate-getter-setter
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension EditorConfig.EditorConfig
code --install-extension esbenp.prettier-vscode
code --install-extension infeng.vscode-react-typescript
code --install-extension kumar-harsh.graphql-for-vscode
code --install-extension mikestead.dotenv
code --install-extension mrmlnc.vscode-scss
code --install-extension MS-CEINTL.vscode-language-pack-de
code --install-extension ms-vscode.node-debug2
code --install-extension ms-vscode.vscode-typescript-tslint-plugin
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension PeterJausovec.vscode-docker
code --install-extension pmneo.tsimporter
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension wholroyd.jinja
code --install-extension Zignd.html-css-class-completion
```
