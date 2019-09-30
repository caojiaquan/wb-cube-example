# wb-cube-example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### publish
```
npm login
npm publish
```

### 创建新包
* 包名称命名：必须以中横线分割
```
npm install -g wb-cube-cli
wb-cube-cli init
```
### 结构目录
├── README.md
├── babel.config.js
├── dist
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── blocks
│   │   ├── h5
│   │   ├── schema.json
│   │   ├── snapshot.jpg
│   │   └── wb
│   ├── components
│   │   ├── Item
│   │   ├── Module
│   │   └── Texts
│   ├── config
│   │   └── index.js
│   ├── main.js
│   └── style
│       └── index.scss
└── vue.config.js

### 开发目录
1. h5：blocks/h5
2. 小程序：blocks/wb


