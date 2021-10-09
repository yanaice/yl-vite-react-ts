# Install

`yarn install`

# Set up

https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project

## Set eslint

- `.eslintrc.js` <<--- config HERE
- `yarn add eslint`
- `@typescript-eslint/parser`: parser that will allow ESLint to lint Typescript code
- `@typescript-eslint/eslint-plugin`: ESlint rules that are Typescript specific

## Set Typescript

- `tsconfig.json` <<--- config HERE

## Set Prettier

- `.prettierrc.js` <<--- config HERE
- `yarn add prettier`: The core prettier library
- `eslint-config-prettier`: Disables ESLint rules that might conflict with prettier
- `eslint-plugin-prettier`: Runs prettier as an ESLint rule
  In order to configure prettier, a .prettierrc.js file is required at the root project directory.
- `eslint-plugin-react` : if using Typescript, the eslint-plugin-react dev should be installed.
- set VScode `settings.json` add code below

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"editor.formatOnSave": true,
```

- `package.json -> scripts -> lint`

# Run Local

`yarn run dev`

# Esstential for dev

## Set up Theme

- already set up:: postcss.config.js, postcss, tailwindcss, autoprefixer
- config theme here `tailwind.config.js`
- where to override tailwind default configuration ::
  https://unpkg.com/browse/tailwindcss@2.2.16/stubs/defaultConfig.stub.js such
  as font size, color palette, spacing etc.

## index.css

- Set up fontface
- remove browser old styles, no custom class

## App.css

- app className style, custom common className, extends tailwindcss

## Folder Structure

- config : env => config
- pages
  - main
    - MainPage.tsx, MainFlow.tsx
    - components
      - MainComponent1.tsx
      - MainComponent2.tsx
- components
- hook & atom
- global hook & atom
  - appState
- utils

## Use Typescript : type & interface

## postcss.config.js

- auto compile tailwind.css and add to our project

# 2. Typescript

https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

Configuration

- index.css -- font
- App.css -- global styles
- tailwind.config.js -- theme
- main.tsx
  - swr
  - recoil

## Build & ENV

local env: `npm run build -- using .env`

staging env: `npm run build-sit -- using .env.staging`

prod env: `npm run build-prod -- using .env.production`

define typescript env: `env.d.ts`

app will use all env from: `config.ts`

# Common hook

- app global state :: loading, error
- 1 axios client :: react.ga, error exception
