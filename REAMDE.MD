# HEXO

> HEXO 是一个搭建静态博客的工具，可一键使`Markdown`生成为`HTML`文件, 并生成相应的文章目录/列表/标签/分类等内容. 

## hexo搭建blog

- 安装node.js

下载地址：
```
https://nodejs.org/en/
```

验证安装成功
```
node -v
```

- 安装hexo
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

## hexo的基本使用

- 新建文件夹

```
hexo new page '文件夹名'
```

会在`source`下生成你创建的`文件夹名`, 并在该文件夹下生成一个`index.md`的空文件

- 新建文件

```
hexo new '文件名'
```

会在`source/_posts`下生成你创建的`文件名.md`

- md文件生成静态HTML文件

```
hexo clean
hexo g
```

先删除以前生成的HTML文件, 再生成新的HTML文件. `hexo g`是`hexo generate`的缩写

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
    # github: https://github.com/h521822/h521822.github.io.git
  branch: master
```

可同时配置多个地址

执行一下命令，完成部署
```
hexo d
```

`hexo d`是`hexo delpoy`的缩写


## 修改主题

可先预览一下笔者使用的[博客](http://h520522.gitee.io/). 

笔者使用的是[Matery](https://github.com/blinkfox/hexo-theme-matery)主题. 

- 修改步骤

下载该主题, 放在`themes`下, 修改配置文件`_config.yml`的`theme`为`hexo-theme-matery`

然后可以根据[文档](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md)配置. 

笔者的[配置](https://gitee.com/h520522/hexo-template), 仅供参考. 

### 修改副标题
#### 一言

https://hitokoto.cn/


```
<h2 class="page-description" id="hitokoto" style="display: -webkit-box;"></h2>
<h3 class="page-author" id="hitokotoAuthor" style="display: block;"></h3>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"
  integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
<script>
  jQuery
    .ajax({ url: "https://v1.hitokoto.cn/" })
    .done(function (content, err) {
      console.log("content::", content, "err::", err);
      if (err === "success") {
        jQuery("#hitokoto").html(content.hitokoto);
        jQuery("#hitokotoAuthor").html(content.from);
      }
    });
</script>

```
#### 今日诗词


https://www.jinrishici.com/

```

<h2 class="page-description" id="jinrishici" style="display: -webkit-box;"></h2>
<h3 class="page-author" id="jinrishiciAuthor" style="display: block;"></h3>


<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>

<script type="text/javascript">
  jinrishici.load(function (result) {
    console.log(result)

    if (result.status === "success") {

      jQuery("#jinrishici").html(result.data.content);
      var jinrishiciAuthor = "《" + result.data.origin.title + "》 - " + result.data.origin.dynasty + " - " + result.data.origin.author + ""
      jQuery("#jinrishiciAuthor").html(jinrishiciAuthor);
    }
  });
</script>

```

