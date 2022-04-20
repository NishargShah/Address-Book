### Steps
```
1. yarn
2. npm set-script prepare "husky install" && yarn prepare
3. npx husky add .husky/pre-commit "yarn lint-staged"
4. yarn dev
```

### Build Steps

```
1. yarn build
2. sudo yarn global add serve ( its better to install it globally ) ( ignore if you already done it )
3. yarn start
```

### Husky Installation ( In Details )

I explained husky installation in StackOverflow, please look it if you are willing to gain more knowledge on it.

https://stackoverflow.com/a/66903558/8798220

### Controversial Topics

1. In JS, some devs have a desire to not follow the semicolon, for those devs, please change `semi: false` in `.prettierrc`
2. Same goes for `useTabs`, `singleQuote` and `tabWidth`.
3. Removed `StrictMode` from `index.js`, please read my answer https://stackoverflow.com/a/61091205/8798220

### Note

1. No NPM, Only Yarn
2. Don't Disable ESLint & Prettier
3. Try to follow the rules as much as you can
4. Use `SCSS` only
5. Hooks only
