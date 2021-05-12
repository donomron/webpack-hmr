# Minimal Webpack HMR Example
This is a simple project that shows how webpack HMR works.

It does not contain any framework like react, vue.js, ... Only pure js, css and a html file.

## Prerequisites

- node >= 10.13.0
- npm >= 5.37.0


## Installation
```
npm i
```

## Configuration
Development port `PORT_DEV_SERVER` is by default set to `3000` and can be changed in `webpack.dev.js`.


## Usage
```
npm run dev
```

Open `localhost:3000` in browser and check console.

Every change in `src` files is instantly hot loaded.
