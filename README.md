<!-- @format -->

# 为什么需要 webpack

## 原始

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="manifest" content="version.json" />
    <meta content="email=no" name="format-detection" />
    <meta content="telephone=no" name="format-detection" />
    <title></title>
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.css" rel="stylesheet" />
    <link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-select/1.14.0-beta2/css/bootstrap-select.css" rel="stylesheet" />
  </head>
  <body>
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-select/1.14.0-beta2/js/bootstrap-select.js"></script>
    <script src="src/index.js"></script>
  </body>
</html>
```

## requirejs

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="manifest" content="version.json" />
    <meta content="email=no" name="format-detection" />
    <meta content="telephone=no" name="format-detection" />
    <title></title>
  </head>
  <body>
    <div class="alert alert-warning alert-dismissible fade in" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </div>
    <script data-main="js/config.js" src="assets/lib/require/require.min.js" type="text/javascript"></script>
  </body>
</html>
```

```js
require.config({
  baseUrl: 'js',
  map: {
    '*': {
      css: 'require/css',
    },
  },
  paths: {
    jquery: 'jquery',
    bootstrap: 'bootstrap/bootstrap.min',
    'bootstrap-table': 'bootstrap-table',
  },
  shim: {
    bootstrap: {
      deps: ['jquery', 'css!../css/bootstrap.min'],
    },
    'bootstrap-table': {
      deps: ['jquery', 'css!../css/bootstrap-table'],
      exports: 'bootstrap-table',
    },
  },
  waitSeconds: 50,
});

requirejs(['jquery', 'bootstrap'], function ($, bootstrap) {});
```

# webpack 基础配置

npm init

npm install --save-dev webpack webpack-cli

# 处理 js

npm install --save-dev @babel/core babel-loader

# 简单打包优化

npm install --save-dev html-webpack-plugin clean-webpack-plugin

# es6

npm install --save-dev @babel/preset-env core-js regenerator-runtime

# 支持 ts

npm install --save-dev @babel/preset-typescript

# 支持 React

npm install --save-dev @babel/preset-react

# 支持 css

npm install --save-dev style-loader css-loader

# 支持 less

npm install --save-dev less less-loader

# 支持照片

npm install --save-dev url-loader

# 处理静态资源

npm install --save-dev copy-webpack-plugin

# 支持 devServer 命令拆分

npm install --save-dev webpack-dev-server

# 提取公共代码

# 提取 css

npm install --save-dev mini-css-extract-plugin

# 长效缓存

# 多入口打包

# 按需加载
