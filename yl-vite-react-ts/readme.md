# 0. Install

`yarn install`

# 1. Set up

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

# 2. Rules for this app

## Set up Theme
- using Tailwindcss
- https://github.com/creativetimofficial/tailwind-starter-kit/tree/main/Login%20Page/react-login-page
- already set up:: postcss.config.js, postcss, tailwindcss, autoprefixer
- `tailwind.config.js` <<--- config HERE
- how to override tailwind default configuration ::
  https://unpkg.com/browse/tailwindcss@2.2.16/stubs/defaultConfig.stub.js such
  as font size, color palette, spacing etc.

## index.css
- Set up fontface
- remove browser old styles, no custom class

## App.css
- app className style, custom common className, extends tailwindcss

## Styled-components
- NO inline styled please <div style={{width: '10px'}}>

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

## Use Typescript
- prefer interface
- use type when
  - premitive, enum

## Common hook for making request
- please use hook `useWrapSWR`, `useAxios`: they will control global app state such as `loading`, `error` see example in `PageLayout.tsx, Login.tsx` and error exception etc.

# 3. Start dev
- run local `yarn run dev`

## Build & ENV & Config
- local env: `npm run build -- using .env`
- staging env: `npm run build-sit -- using .env.staging`
- prod env: `npm run build-prod -- using .env.production`
- define typescript env: `env.d.ts`
- app will use all env from: `config.ts`


