## include

- UI: react / react-dom / react-router-dom /
- store: redux / redux-thunk
- lint: eslint / lint-staged / husky / prettier
- router: react-router

## structor

```bash
| - chrome                    # All of Chrome Extension Code
      | - img
      | - lib                 # common library
      | - options
            | - index.html    # option page
      | - popup
            | - index.html    # popup page
      | - inject
| - src
      | - inject  # inject script for specific page
      | - options # react code
      | - popup   # react code
```

## Usage

1. `npm install`
2. `npm run dev`(dev) or `npm run build`(build)
3. pack chrome extension zip: `npm run pack`

## Show

### Popup

![](https://i.imgur.com/Gx39VQx.png)

### Option page

![](https://i.imgur.com/UMHKWAS.png)

### Content Page

![](https://i.imgur.com/PIMaK2b.png)

### Background

![](https://i.imgur.com/MdNH7Vo.png)

## More Message - Typescript And CI

have a Look -> https://github.com/riskers/github-plus-extension
