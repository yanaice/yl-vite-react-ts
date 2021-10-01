# Set up 
`yarn install`

# Local
`yarn run dev`

# 1. Theme - tailwindcss

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
`postcss.config.js`

https://tailwindcss.com/docs/optimizing-for-production

## tailwind.config.js
- where to override tailwind default configuration :: https://unpkg.com/browse/tailwindcss@2.2.16/stubs/defaultConfig.stub.js
such as font size, color palette, spacing etc.

## postcss.config.js
- auto compile tailwind.css and add to our project

## fonts
## index.css
  - set fonts
  - remove browser old styles, no custom class
## App.css
  - custom common className, extends tailwindcss

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

