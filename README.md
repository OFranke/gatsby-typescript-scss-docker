# Description

The purpose of this project is to create a gatsby dev environment that is a starting point for production projects.

# Features

- Format & Commit Safe by ESLint, StyleLint and Prettier with Lint-Staged (Husky), optimized for VS Code (check `.vscode/settings.json`)
- Typings for scss files are automatically generated, you can import you styles like `import * as styles from './styles.module.scss'` and then use it like `<div className={styles.textWrapper}>`
- Responsiveness from the beginning through easy breakpoint configuration
- Enforce the DRY principle, no hardcoded and repeated `margin`, `font-size`, `color`, `box-shadow`, `border-radius` ... properties anymore
- Docker ready - you can run gatsby dev mode on your machine environment or with docker-compose

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

## VS Code Extensions

- VS Code command line tools have to be installed
- receive a list of current installed extensions: `code --list-extensions | xargs -L 1 echo code --install-extension`

### Install those extensions for a smooth workflow

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

# Documentation

`.vscode/settings.json`

- configuration to basically format everything on save

`scripts/generateTypings.js`

- looks for `.scss` files and creates typings for them, so you have type hints on your imported style classes

`src/assets`

- put any assets in here

`src/components`

- base directory for components that work with absolute imports, e.g. `import Greeting from 'components/Greeting'` instead of `import Greeting from '../components/Greeting'`

`src/gatsby/createPages.ts`

- basic entry point to create pages, here you can put any hook that you would normaly put into `gatsby-node.js`, e.g. `onCreatePage`, `onPostBuild`

`src/gatsby/routes.ts`

- a simple object that translates page templates to url paths. Here you could also hook in for multi language path generation

`src/gatsby/types.ts`

- just some defined types

`src/pages/404.tsx`

- default not found page

`src/styles/constants/_breakpoints.scss`

- breakpoints to configure responsive behaviour
- breakpoints work with `src/styles/vendors/_includemedia.scss`, you can use them in code with an operator like `<, >, =` and the name of the breakpoint

```
  @include media('>=large') {
    margin: get-spacing('xl');
    padding: get-spacing('xl');
  }
```

`src/styles/constants/_font-stack.scss`

- constants for loaded fonts

`src/styles/constants/` && `src/styles/functions/` && `src/styles/mixins/`

- those play together to create a responsive, breakpoint-agnostic behaviour. Refer to https://sass-lang.com/guide to get a better understanding on how it works in detail
- there are some useful defaults like `colors`, `spacings`, `text-sizes`, `text-sizes-title` already implemented
- all those maps in `src/styles/constants/` can be customized to project specific needs

`src/styles/main.scss`

- just imports constants, functions, mixins and vendors

`src/templates/`

- directory to create page templates

# Todo

- [ ] adjust generateTypings script to just rebuild the typings for recently changed files and not for all files
- [ ] add test library and showcase test driven development
- [ ] fix docker
