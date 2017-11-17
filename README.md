东方起音

> 该后台管理系统 使用 bootstrap ui & axios & iconfont & permission control & lint 等。

## Build Setup

``` bash





# Install node
请到nodejs官网下载node: https://nodejs.org/en/download/ 

,建议使用稳定版本

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org 


# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## vs code 要求安装的插件
```
    1.  Vetur  识别veu格式使用
    2.  eslint js规范检查工具
    3.  VSCode Great Icons 文件夹图标
    4.  github 插件
    5.  Guides 代码缩进线条格式
    6.  Terminal 终端命令支持,windows 才要安装

```

## 全局设置 菜单-code-setting 设置编辑的样式，或者格式化
```
    // 主题颜色，如果不用，可以删除
    "workbench.colorTheme": "Monokai",
   // 增加附助线连接
    "editor.renderIndentGuides": false ,
    // 把tab键缩进改成二个格子
    "editor.tabSize": 2,
    // 自动保存格式
    "editor.formatOnSave": true,
    // html 格式
    "html.format.enable": false,
    // eslint 识别
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.options": {
        "plugins": [
            "html"
        ]
    },
    // html代码缩进
    "html.format.indentInnerHtml": true,
    // 已经安装的插件自动更新关闭
    "extensions.autoUpdate": false,
    // 是否可以滚动到最后一行
    "editor.scrollBeyondLastLine": false,
    // 自动去掉二边的空格
    "editor.trimAutoWhitespace": false,
    // 不删除尾随自动插入的空格
    "editor.useTabStops": false,
    // 语法提示
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html"
    },
    // 图标主题
    "workbench.iconTheme": "vscode-great-icons",
    // tab自动完成
    "editor.tabCompletion": true,
    // 换行
    "editor.wordWrap": "on",
    // 打开空间，新建一个文件
    "workbench.startupEditor": "newUntitledFile"
 
```