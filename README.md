# resource-license

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Pages 页面提交
> 此功能需开启SSH公钥

1. cd 到构建输出的目录下
    ```shell
    cd dist
    ````

2. 提交修改
    ```shell
    git init
    ```
   ```shell
    git add -A
    ```
   ```shell
    git commit -m 'deploy'
    ```

3. 强制推送到远端
    ```shell
    git push -f git@gitee.com:Sugarscat/resource-license.git master:g-pages
    ```
    ```shell
    exit
    ```