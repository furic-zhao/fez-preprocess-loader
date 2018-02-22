# fez-preprocess-loader

去除webpack打包时由特殊注释标记的代码块。用于移除webpack包中不需要的代码（例如mock数据等）。

## 示例:

**业务逻辑**

```javascript
/* @if MOCK */
import mock from 'fezmock';
import mockData from './mock';
/* @endif */

function ApiSnapshot() {
  return new Promise((resolve, reject) => {
    /* @if MOCK */
    resolve(mock.mock(mockData).snapshot);
    return;
    /* @endif */

    Api.get(rankConfig.apiUrl.snapshotRange, params)
      .then((data) => {
        resolve(data);
      });
  });
}

```

**配置`webpack.config.js`:**

```javascript
module.exports = {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'fez-preprocess-loader',
          options: {
            available: true //启用模块
          }
        }
      ]
    }
  ]
}
```

## 自定义开始和结束标记

```javascript
module.exports = {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'fez-preprocess-loader',
          options: {
            available: true,
            start: 'START MOCK',
            end: 'END MOCK'
          }
        }
      ]
    }
  ]
}
```
