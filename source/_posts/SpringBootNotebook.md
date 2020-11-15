---
title: Spring boot & MyBatis & Vue 开发文档
date: 2020-10-28 20:50:57
tags: 
  - Java
  - Spring boot
  - MyBatis
  - Vue
img: http://www.s3tu.com/images/2020/11/07/Konachan.com-295706sample0ee38.jpg
categories: 软件工具

---

# Spring boot & MyBatis & Vue 开发文档

1. 开发环境搭建：

暂时注释，后期替换成阿里云网盘

工具链接：https://pan.baidu.com/s/1af5OnbTUznsE8EAb5AwOrw  提取码：z4hi 

## 开发环境搭建

### 前端开发环境搭建

- 安装nodejs、VS Code，


序号|	工具|		参考
-|-|-
1	|Nodejs| 	https://my.oschina.net/jeecg/blog/4277939
2	|VS Code | https://my.oschina.net/u/4255039/blog/3590351
3	|Yarn安装	|	https://my.oschina.net/jeecg/blog/4278012

#### 配置Nodejs镜像

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

在VS Code中打开前端代码 -> `npm install` -> 查看配置文件,一般为`npm run dev`或`npm run server`

### 后端环境安装


序号	|工具|	参考
-|-|-
1	|JDK8	| https://my.oschina.net/u/4058092/blog/4287587
2|Maven |https://my.oschina.net/u/4108547/blog/3114133
3	|IDEA|	https://jeecg.blog.csdn.net/article/details/103252484
4|	IDEA中Lombok插件的安装与使用	|https://www.cnblogs.com/iathanasy/p/9262689.html
5	|IDEA热部署JRebel安装	|https://blog.csdn.net/qierkang/article/details/95095954
6|	IDEA自动生成类注释和方法注释|	https://my.oschina.net/jeecg/blog/3198358
7| MySQL8|https://my.oschina.net/ZRYACOOL/blog/4472611
8|redis|解压, 执行`redis-server.exe`即可


在IDEA中打开后端代码 -> `shift + Ctrl + Alt + S` 设置jdk -> `Ctrl + Alt + S` 设置Maven

![](https://i.bmp.ovh/imgs/2020/10/3563e02ae531dc4f.png)

![](https://i.bmp.ovh/imgs/2020/10/495f2e2cc125f772.png)


