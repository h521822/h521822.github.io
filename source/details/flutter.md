---
title: flutter
date: 2020-11-15 20:55:15
tags:
---

## 1. Flutter安装

### 1.1 下载

方案1: 下载稳定版本后，运行flutter 目录下的 Flutter console, 而后用git下载flutter.

 

方案2：从清华大学镜像站直接下载flutter版本：https://mirrors.tuna.tsinghua.edu.cn/flutter/flutter_infra/releases/stable/，镜像站上一般为flutter发布的稳定版本（stable）

 

推荐方案2，方案1下载速度慢，安装时间长。

 

### 1.2 安装

安装插件：`Flutter`、`Dart`



运行flutter 目录下的 Flutter console，运行 “flutter doctor”命令，看flutter是否存在问题。如无问题进行下一步。出现问题按屏幕提示解决。



### 1.3 版本配置

在andriod studio中的seting中配置flutter路径。

 

flutter 版本回退：git reset hard (版本的commit id) 而后运行 flutter --version,下载对应版本。只有以前下载安装过的版本才能回退。需记录版本升级与回退的版本，以免升级版本后运行不通无法回退到老版本