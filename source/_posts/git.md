---
title: Git学习笔记
date: 2020-10-26 00:29:49
tags: Git
summary: Git是分布式版本控制系统; 集中式VS分布式
cover: ture
img: http://www.s3tu.com/images/2020/11/07/Konachan.com-289776sampleadf4e.jpg
categories: 软件工具

---

# Git学习笔记
****
## 1. Git简介
* Git是分布式版本控制系统
* 集中式VS分布式：  
1. 集中式版本控制系统，版本库集中存放在中央服务器，必须要联网才能工作,没有历史版本库。   
2. 分布式版本控制系统，没有“中央服务器”，每个开发人员电脑上都有一个完整的版本库。  
3. 分布式优势：安全性更高，无需联网，若“中央服务器”故障，任何一个其他开发者本地都有最新的带历史记录的版本库。  
4. 主要区别在于历史版本库的存放，集中式历史版本只存在于中央服务器，而分布式中每个本地库都有历史记录存放。

## 2. 安装Git

* Linux系统  

Debian或Ubuntu Linux
```shell
sudo apt-get install git
```
老版本Debian或Ubuntu Linux
```shell
sudo apt-get install git-core
```
其他版本Linux，官网下载源码解压，然后依次输入
```shell
./config ——> make ——> sudo make install
```
* Windows系统  

[官网下载](https://git-scm.com/downloads)，安装完成后，“Git”->“Git Bash”即可打开

### 2.1 Git配置

``` shell
$ git config user.name 查看用户名
$ git config user.email 查看邮箱

$ git config --global user.name "Your Name"		设置用户名
$ git config --global user.email "email@example.com"		设置邮箱
```
**注意**  `--global`参数表示你这台机器上所有的Git仓库都会使用这个配置。

# Git命令

****

## 3. 创建版本库

### 3.1 选择一个合适目录  

Windows系统请确保目录名（包括父目录）不包含中文
1. 如`$ cd d:`
2. `$ mkdir <repository-name>`，创建库名
3. `$ cd <repository-name>`，进入库内  

**补充**  `pwd`显示路径，`ls`显示当前目录，`ls -ah`显示隐藏目录

### 3.2 在当前目录初始化库

```shell
$ git init
```

## 4. 使用vi编辑器

1. `$ vi <file-name>`，新建或修改文件
2. 按`i`进入编辑
3. 编辑完成后按`ESC`，然后选择以下某个命令输入

|命令|效果|
|--|--|
|`:w`|保存文件，不退出vi|
|`:w <file-name>`|另存为file,不退出|
|`:w!`|强制保存，不退出|
|`:wq`|保存文件，退出|
|`:wq!`|强制保存，退出|
|`:q`|不保存，退出|
|`:q!`|不保存，强制退出|
|`:e!`|放弃所有修改，回到上次保存文件开始编辑|

查看文件内容
```shell
cat <file-name>
```

## 5. 把文件添加到版本库

```shell
$ git add <file-name>
$ git commit -m "description"
```
**注意**  可以多次`git add `，最后一次`git commit`

## 6. 查看工作区当前状态

```shell
$ git status
```

## 7. 时光穿梭

```shell
$ git reset --hard commit-id
```

### 7.1 确定版本回退commit-id

#### 7.1.1 通过查看提交历史

```shell
$ git log
```
按`q`退出查看 


#### 7.1.2 简化显示提交历史

```shell
$ git log --pretty=oneline
````
`HEAD`，当前版本  

`HEAD^`，上个版本  

`HEAD^^`，上上个版本  

`HEAD~100`，往上100个版本

### 7.2 确定重返未来commit-id
#### 7.2.1 通过查看命令历史
```shell
$ git reflog
```
## 8. 工作区与暂存区


工作区就是电脑中能看到的目录，工作区有一个隐藏目录`.git`，这是Git的版本库 

### 8.1 管理修改

#### 8.1.1 修改但未add

* 比较工作区与暂存区（即上次git add的内容）的不同  

比较所有修改文件的不同
```shell
$ git diff
```
比较指定修改文件的不同
```shell
$ git diff <file-name>
```

#### 8.1.2 修改已add但未commit

* 比较暂存区与仓库分支（上次git commit）的不同
```shell
$ git diff --staged
```
或
```shell
$ git diff --cached
```

## 9. 撤销修改

* 场景1——工作区已修改但未add到暂存区  
```shell
$ git checkout -- <file-name>
```
其实就是用版本库里的版本替换工作区的版本
* 场景2——工作区修改且已经git add到暂存区，分两步 
```shell
$ git reset HEAD <file-name>
```
回到场景1，再按场景1操作
* 场景3：已经commit但没有推送到远程库——**版本回退**

## 10. 删除文件

假设文件原已commit，目前情况是——已经在目录下手动或`$ rm <file-name>`删除文件
* 选择一：确实要从版本库中删除该文件，分两步  

第一步
```shell
$ git rm <file-name>
```
或
```shell
git add <file-name>
```
第二步
```shell
$ git commit -m "description"
```
* 选择二：删错了，要恢复  
```shell
$ git checkout -- <file-name>
```
其实就是用版本库里的版本替换工作区的版本

## 11. 远程仓库

### 11.1 创建SSH Key

```shell
$ ssh-keygen -t rsa -C "youremail@example.com"
```

**补充**  在用户主目录下(`cd`)  

`$ ls -ah`可见`.ssh`目录  

`$ cd .ssh`可见`id_rsa`(私钥不能泄露)和`id_rsa.pub`(公钥可公开)

### 11.2 关联远程仓库

```shell
$ git remote add origin git@github.com:username/repositoryname.git
```
或
```shell
$ git remote add origin https://github.com/username/repositoryname.git
```
远程库默认名字为`origin`

### 11.3 删除已经关联的远程库

```shell
git remote rm remote-name
```
若远程库默认名字为`origin`，则
```shell
git remote rm origin
```

### 11.4 推送到远程仓库

* 第一次推送到GitHub  
```shell
$ git push -u origin master
```
推送master分支
* 后续推送
```shell
$ git push origin master
```
不再使用参数`-u`

### 11.5 从远程库克隆

```shell
$ git clone git@github.com:username/repositoryname.git
```
或  
```shell
$ git clone https://github.com/username/repositoryname.git
```

## 12. 分支管理

### 12.1 查看分支

```shell
$ git branch
```

### 12.2 创建分支

```shell
$ git branch <branch-name>
```

### 12.3 切换分支

```shell
$ git checkout <branch-name>
```

### 12.4 创建+切换分支

```shell
$ git checkout -b <branch-name>
```

### 12.5 合并某分支到当前分支

```shell
$ git merge <branch-name>
```

### 12.6 普通模式合并分支

```shell
$ git merge --no-ff -m "description" <branch-name>
```
通常进行分支合并时，如果可以，Git会使用`Fast forward`模式，删除分支后，分支历史信息会丢失  

`--no-ff`表示禁用`Fast forward`模式，能看出曾做过合并

### 12.7 删除分支

```shell
$ git branch -d <branch-name>
```

### 12.8 强行删除分支

```shell
$ git branch -D <branch-name>
```

### 12.9 查看分支合并图

```shell
$ git log --graph
```
简洁查看
```shell
$ git log --graph --pretty=oneline --abbrev-commit
```

### 12.10 Bug分支

假设场景——设A为游戏软件  

1. master 上面发布的是A的1.0版本
2. dev 上开发的是A的2.0版本
3. 这时，用户反映 1.0版本存在漏洞，有人利用这个漏洞开外挂
4. 需要从dev切换到master去填这个漏洞，正常必须先提交dev目前的工作，才能切换
5. 而dev的工作还未完成，不想提交，所以先把dev的工作stash一下。然后切换到master
6. 在master建立分支issue101并切换
7. 在issue101上修复漏洞
8. 修复后，在master上合并并删除issue101
9. 切回dev，恢复原本工作，继续工作

### 12.11 保存工作现场

```shell
$ git stash
```

### 12.12 查看保存的工作现场

```shell
$ git stash list
```

### 12.13 恢复工作现场

```shell
$ git stash apply
```
### 12.14 删除工作现场
```shell
$ git stash drop
```
### 12.15 恢复并删除工作现场
```shell
git stash pop
```
### 12.16 Feature分支
每添加一个新功能，最好新建一个feature分支，在上面开发完成后，合并，最后，删除该feature分支
## 13. 多人协作
### 13.1 多人协作通常的工作模式
1. 先试图推送自己的修改`git push`
2. 若推送失败，则远程分支比本地分支更新，`git pull`拉取远程分支试图合并
3. 若合并有冲突，则解决冲突，并在本地提交(`add` 和 `commit`)
4. 若没有冲突或解决了冲突，再次推送`git push`

### 13.2 查看远程库信息

```shell
$ git remote
```
详细查看
```shell
git remote -v
```

### 13.3 本地推送分支

```shell
$ git push origin <branch-name>
```

### 13.3 在本地创建和远程分支对应的分支

```shell
$ git checkout -b <branch-name> origin/<branch-name>
```

### 13.4 建立本地分支和远程分支的关联

```shell
$ git branch --set-upstream <branch-name> origin/<branch-name>
```
或  
```shell
$ git branch --set-upstream-to=origin/<branch-name> <branch-name>
```

### 13.5 从远程抓取分支

```shell
$ git pull
```

## 14. Rebase“变基”  

```shell
$ git rebase
```
把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。  

只对尚未推送或尚未分享给别人的本地修改执行变基操作清理历史，从不对已推送至别处的提交执行变基操作
## 15. 标签管理
发布一个版本时，我们通常先在版本库中打一个标签（`tag`），这样，就唯一确定了打标签时刻的版本  

将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照
### 15.1 创建标签
```shell
$ git tag <tag-name>
```
在最新commit上打一个标签  
```shell
$ git tag <tag-name> commit-id
```
在对应的commit_id上打一个新标签

### 15.2 创建带有说明的标签

```shell
$ git tag -a <tag-name> -m "description" commit-id
```
`-a`指定标签名，`-m`指定说明文字  

### 15.3 查看所有标签

```shell
$ git tag
```

### 15.4 查看对应标签的信息

```shell
$ git show <tag-name>
```
**注意**标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。

### 15.5 操作标签

#### 15.5.1 推送某个标签到远程

```shell
$ git push origin <tag-name>
```

#### 15.5.2 一次性推送全部尚未推送的标签到远程

```shell
git push origin --tags
```

#### 15.5.3 删除一个本地标签

```shell
$ git tag -d <tag-name>
```

#### 15.5.4 删除一个远程标签

先从本地删除  
```shell
$ git tag -d <tag-name>
```
再从远程删除
```shell
$ git push origin :refs/tags/<tag-name>
```

## 16. 使用GitHub

如何参与一个开源项目  

`Fork`任意开源库 ——> 从自己的账户下`clone` ——> 修复bug或者新增一个功能 ——> 若希望官方库接受你的修改，可以在GitHub上发起一个`pull request`
## 17. 本地库既关联GitHub，又关联码云
如原来已经关联了默认名`origin`的GitHub  
1. 先删除已关联的名为`origin`的远程库：



```shell
$ git remote rm origin
```
2. 然后，先关联GitHub的远程库：



```shell
$ git remote add github git@github.com:username/repositoryname.git
```
注意，远程库的名称叫`github`，不叫`origin`了  

3. 接着，再关联码云的远程库：



```shell
$ git remote add gitee git@gitee.com:username/repositoryname.git
```
同样注意，远程库的名称叫`gitee`，不叫`origin`了  

**注意**  多个关联后以上所以命令含的`origin`都换成相应的`github`或`gitee`  

如果要推送到GitHub，使用命令：
```shell
$ git push github master
```
如果要推送到码云，使用命令：
```shell
$ git push gitee master
```
## 18. 自定义Git
### 18.1 显示颜色
让Git显示颜色，会让命令输出看起来更醒目：  
```shell
$ git config --global color.ui true
```
### 18.2 忽略特殊文件
[见廖老师教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000)
### 18.3 配置别名
如
* 用`git st`就表示`git status`
```shell
$ git config --global alias.st status
```
* 配置一个`git last`，让其显示最后一次提交信息：
```shell
$ git config --global alias.last 'log -1'
```
* 甚至还有人丧心病狂地把lg配置成了：
```shell
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
试试`git lg`的效果，很炫酷

### 18.4 配置文件

* 配置Git的时候，加上`--global`是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用  
* 查看用户的配置信息：
```shell
$ git config --global --list
```
要查看当前仓库的，把`global`改成`local`就好
* 配置文件放哪了？每个仓库的Git配置文件都放在`.git/config`文件中：`$ cat .gitconfig`
* 别名就在`alias`后面，要删除别名，直接把对应的行删掉即可

### 18.5 搭建Git服务器

GitHub就是一个免费托管开源代码的远程仓库  

但是对于某些视源代码如生命的商业公司来说，既不想公开源代码，又舍不得给GitHub交保护费，那就只能自己搭建一台Git服务器作为私有仓库使用  

[搭建见廖老师教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000)
