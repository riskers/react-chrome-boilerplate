## include

```
* UI: react / react-dom / react-router-dom /
* sotre: redux / redux-thunk
* lint: eslint / lint-staged / husky
```

## 结构

```
| - chrome          # chrome extension 相关代码
      | - img
      | - lib       # 共用 library
      | - options   # 选项页
      | - popup     # popup 页
      | - inject        # 针对某页面的 inject script
| - src             # UI 相关代码
      | - inject
      | - options
      | - popup
```

## Usage

1. `npm install`
2. `npm run dev`(dev) or `npm run build`(build)
