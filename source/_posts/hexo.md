---
title: Hexo
date: 2020-10-26 01:13:33
tags: Hexo
summary: HEXO 是一个搭建静态博客的工具
img: http://www.s3tu.com/images/2020/11/07/Konachan.com-289696sampleda249.jpg
categories: 其他

---

# HEXO

> HEXO 是一个搭建静态博客的工具，可一键使`Markdown`生成为`HTML`文件, 并生成相应的文章目录/列表/标签/分类等内容. 

## 1. hexo搭建blog

### 1.1 安装node.js

下载地址：
```
https://nodejs.org/en/
```

验证安装成功
```
node -v
```

### 1.2 安装hexo


```
npm install -g hexo-cli
```

验证安装成功
```
hexo -v
```
**安装时显示成功了，但是执行`hexo -v`,提示"在此系统上禁止运行脚本"**

解决方法：
1. 以管理员身份运行vscode;
2. 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的;
3. 执行：set-ExecutionPolicy RemoteSigned;
4. 这时再执行get-ExecutionPolicy，就显示RemoteSigned;




- hexo初始化blog

```
hexo init
```

如果是下载已有的hexo模板,则执行不执行`hexo init`,执行`npm install --force`或者`npm i`或者`npm install`即可. 会生成`node_modules`. 

- 启动本地blog

```
hexo s
```

`hexo s`是`hexo server`的缩写

使用`http://localhost:4000`访问本地blog


此时blog就搭建好了. 

## 2. hexo的基本使用

### 2.1 新建文件夹

```
hexo new page '文件夹名'
```

会在`source`下生成你创建的`文件夹名`, 并在该文件夹下生成一个`index.md`的空文件

### 2.2 新建文件

```
hexo new '文件名'
```

会在`source/_posts`下生成你创建的`文件名.md`

### 2.3 提交代码

- md文件生成静态HTML文件

```
hexo cl
hexo g
```

先删除以前生成的HTML文件, 再生成新的HTML文件.

 `hexo cl`是`hexo clean`的缩写.  

`hexo g`是`hexo generate`的缩写

- 将已生成的HTML文件部署到gitee或github上


部署之前, 安装`hexo-deployer-git`
```
npm install --save hexo-deployer-git
```

配置`_config.yml`上传地址:
```
deploy:
  type: 'git'
  repository:
    gitee: https://gitee.com/h520522/h520522.git
    github: https://github.com/h521822/h521822.github.io.git
  branch: master
```

可同时配置多个地址

执行一下命令，完成部署
```
hexo d
```

`hexo d`是`hexo delpoy`的缩写


## 3. 修改主题

可先预览一下笔者使用的[博客](https://h521822.github.io/). 

笔者使用的是[Matery](https://github.com/blinkfox/hexo-theme-matery)主题. 

### 3.1 修改步骤

下载该主题, 放在`themes`下, 修改配置文件`_config.yml`的`theme`为`hexo-theme-matery`

然后可以根据[文档](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md)配置. 

笔者的[配置](https://github.com/h521822/h521822.github.io), 仅供参考. 
