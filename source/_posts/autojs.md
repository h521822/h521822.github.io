---
title: autojs
date: 2020-11-03 23:44:27
img: http://www.s3tu.com/images/2020/11/07/Konachan.com-296312sample28a8b.jpg
tags: 
  - autojs
  - 脚本
categories: 脚本

---


# auto.js

[开发文档](https://hyb1996.github.io/AutoJs-Docs/#/)



## 1. 环境搭建



1. 手机安装auto.js，打开无障碍权限和悬浮窗
2. 电脑安装vscode，并安装`auto.js-vscodeext`插件。安装插件后，可使用一下命令：

按 `Ctrl+Shift+P` 或点击"查看"->"命令面板"可调出命令面板，输入 `Auto.js` 可以看到几个命令：

- Start Server: 启动插件服务。之后在确保手机和电脑在同一区域网的情况下，在Auto.js的侧拉菜单中使用连接电脑功能连接。
- Stop Server: 停止插件服务。
- Run 运行当前编辑器的脚本。如果有多个设备连接，则在所有设备运行。
- Rerun 停止当前文件对应的脚本并重新运行。如果有多个设备连接，则在所有设备重新运行。
- Stop 停止当前文件对应的脚本。如果有多个设备连接，则在所有设备停止。
- StopAll 停止所有正在运行的脚本。如果有多个设备连接，则在所有设备运行所有脚本。
- Save 保存当前文件到手机的脚本默认目录（文件名会加上前缀remote)。如果有多个设备连接，则在所有设备保存。
- RunOnDevice: 弹出设备菜单并在指定设备运行脚本。
- SaveToDevice: 弹出设备菜单并在指定设备保存脚本。
- New Project（新建项目）：选择一个空文件夹（或者在文件管理器中新建一个空文件夹），将会自动创建一个项目
- Run Project（运行项目）：运行一个项目，需要Auto.js 4.0.4Alpha5以上支持
- Save Project（保存项目）：保存一个项目，需要Auto.js 4.0.4Alpha5以上支持

3. 启用`start server`，然后手机连接电脑`ip`，需要手机和电脑在同一个区域网下。可通过`cmd`执行`ipconfig`查看电脑`ip`
4. 编写脚本，按快捷键`F5`即可在手机上测试脚本。



## 2. 开发说明

### 2.1 定义变量与输出

> 与es6一致, 不详细列举了

```javascript
// 定义变量
var str = "我是字符串"

// 输出
log(str)
console.log(str)
toastLog(str) // 相当于log(str) + toast(str)
```

### 2.2 循环

> 这里也只列举两种特殊点的

```javascript
// 无限循环
var i = 0
console.log(i)

while (true) {
  i = i + 1
  console.log(i)
  if (i == 100) {
    break
  }
}


var i = 1
switch (i) {
  case 0:
    console.log(0)
  case 1:
    console.log(1)
}
```

### 2.3 设备操作

```javascript
console.log(device)
console.log(device.getIMEI())//返回设备的IMEI.(没获取到,应该是华为手机的原因)
console.log(device.getAndroidId())//返回设备的Android ID。
device.keepScreenOn()//一直保持屏幕常亮
device.cancelKeepingAwake()//来取消屏幕常亮。
```

### 2.4 节点操作

```javascript
var sendButton = text("发送").findOne();
sendButton.click();
```

主要还有以下几种属性：

- `className` 类名。类名表示一个控件的类型，例如文本控件为"android.widget.TextView", 图片控件为"android.widget.ImageView"等。
- `packageName` 包名。包名表示控件所在的应用包名，例如QQ界面的控件的包名为"com.tencent.mobileqq"。
- `bounds` 控件在屏幕上的范围。
- `drawingOrder` 控件在父控件的绘制顺序。
- `indexInParent` 控件在父控件的位置。
- `clickable` 控件是否可点击。
- `longClickable` 控件是否可长按。
- `checkable` 控件是否可勾选。
- `checked` 控件是否可已勾选。
- `scrollable` 控件是否可滑动。
- `selected` 控件是否已选择。
- `editable` 控件是否可编辑。
- `visibleToUser` 控件是否可见。
- `enabled` 控件是否已启用。
- `depth` 控件的布局深度。



 有时候只靠一个属性并不能唯一确定一个控件，这时需要通过属性的组合来完成定位，例如`className("ImageView").depth(10).findOne().click()`，通过链式调用来组合条件。 



对选取的控件进行操作，包括：

- `click()` 点击。点击一个控件，前提是这个控件的clickable属性为true
- `longClick()` 长按。长按一个控件，前提是这个控件的longClickable属性为true
- `setText()` 设置文本，用于编辑框控件设置文本。
- `scrollForward()`, `scrollBackward()` 滑动。滑动一个控件(列表等), 前提是这个控件的scrollable属性为true
- `exits()` 判断控件是否存在
- `waitFor()` 等待控件出现

