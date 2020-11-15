---
title: selenium
date: 2020-11-03 23:42:24
tags: 
  - 爬虫
  - 自动化测试
img: http://www.s3tu.com/images/2020/11/07/Konachan.com-188831akameakame_ga_killassblack_hairbloodedenfoxgloveskatanalong_hairpantiespetalsred_eyessignedswordunderwearweaponba55b.jpg
categories: Python

---

# selenium

>  作用于自动化测试和爬虫



谈到自动化测试，就不得不提的一个人和概念就是：Martin Fowler和他的金字塔原理。首先请看金字塔原理的图示如下：

![金字塔原理](https://pic.downk.cc/item/5fb0125fb3cdc49425e29975.png)

 

该图说明了三个问题：

- 自动化测试包括三个方面：UI前端界面，Service服务契约和Unit底层单元
- 越是底层的测试，运行速度越快，时间开销越少，金钱开销越少
- 越是顶层的测试，运行速度越慢，时间开销越多，金钱开销越多

这是理想中的金字塔原理。

## 1. Selenium 基本介绍

Selenium`是开源的自动化测试工具，它主要是用于Web 应用程序的自动化测试，不只局限于此，同时支持所有基于web 的管理任务自动化。

- `Selenium`官网的介绍

  > Selenium is a suite of tools to automate web browsers across many platforms.
  >
  > - runs in many browsers and operating systems
  > - can be controlled by many programming languages and testing frameworks.

  - Selenium 官网：[http://seleniumhq.org/](https://link.jianshu.com/?t=http%3A%2F%2Fseleniumhq.org%2F)
  - Selenium Github 主页：[https://github.com/SeleniumHQ/selenium](https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2FSeleniumHQ%2Fselenium)

  https://link.jianshu.com/?t=https%3A%2F%2Fwww.continuum.io%2Fanaconda-overview)

- 安装 Selenium 工具包

  ```
  pip install selenium
  ```

- 配置 浏览器 和 驱动

  - Windows环境
    - ChromeDriver下载地址：[http://chromedriver.storage.googleapis.com/index.html](https://link.jianshu.com/?t=http%3A%2F%2Fchromedriver.storage.googleapis.com%2Findex.html)
     - 下载geckodriver.exe：[下载地址](https://github.com/mozilla/geckodriver/releases)
     - 下载解压后将getckodriver.exe复制到Firefox的安装目录下，并在环境变量Path中添加路径
  - ubuntu环境
    - ChromeDriver下载地址：[http://chromedriver.storage.googleapis.com/index.html](https://link.jianshu.com/?t=http%3A%2F%2Fchromedriver.storage.googleapis.com%2Findex.html)
     - 下载geckodriver.exe：[下载地址](https://github.com/mozilla/geckodriver/releases)
     - 解压后将geckodriverckod 存放至 /usr/local/bin/ 路径下即可



## 2. Selenium 的使用

### 2.1 Selenium 的最简脚本

通过上一节的环境安装成功以后，我们可以进行第一个对Selenium 的使用，就是最简脚本编写。脚本如下：

```Python
# 声明
driver = webdriver.Chrome() 
# 加载一个网页
driver.get("https://github.com/") 
sleep(3) 
# 开始登录
we_account = driver.find_element_by_css_selector('#account')we_account.clear()we_account.send_keys("demo") 
we_password = driver.find_element_by_css_selector('#password')we_password.clear()we_password.send_keys("demo") 
driver.find_element_by_css_selector('#submit').click()
sleep(3)
```

- clear()：清理页面元素中的文字
- send_keys(text)：给页面元素中，输入新的文字
- click()：鼠标左键点击页面元素
- get_attribute('text')：获取标签中的文字
- 定位

```Python
imgelement = self.browser.find_element_by_id('authImg')
# 获取x,y坐标
location = imgelement.location
x = location['x']
y = location['y']
# 获取尺寸
size = imgelement.size
width = size['width']
height = size['height']
```

- 等待节点加载完成

```Python
WebDriverWait(browser,超时时间)

# 1. until(method,message)  用于等待某个节点加载完成
WebDriverWait(browser, 600000).until(EC.presence_of_element_located((By.ID, 'id')))

# 2. until_not(method,message)  用于等待某个节点消失，或条件不成立。
WebDriverWait(browser, 600000).until_not(EC.presence_of_element_located((By.NAME, 'name')))
```

`until_not`可用于打码时, 判断验证码是否成功

判断验证码是否成功的另两个办法。推荐方法二

1. 方法一, 判断是否弹出错误信息

```python
def isElementExist(self):
    flag = True
    try:
        self.browser.find_element_by_class_name('验证错误时的提示信息')
        return flag
    except:
        flag = False
        return flag

def searchPage(self, shenqingh):
    '''
    验证逻辑省略...
    '''
    # 循环判断, 验证码是否识别成功
    if self.isElementExist():
        self.searchPage(shenqingh)
```

2. 方法二, 判断是否出现成功后的节点。

```Python
def isElementExist(self):
    flag = True
    try:
        WebDriverWait(self.browser, 5).until(EC.presence_of_element_located((By.NAME, '成功后应该出现的name')))
        return flag
    except:
        flag = False
        return flag
    
    
def searchPage(self, shenqingh):
    '''
    验证逻辑省略...
    '''
    # 循环判断, 是否识别成功
    if not self.isElementExist():
        self.searchPage(shenqingh)
```





### 2.2 Selenium WebDriver API 的使用

Selenium WebDriver API 官方参考：[http://seleniumhq.github.io/selenium/docs/api/py/](https://link.jianshu.com/?t=http%3A%2F%2Fseleniumhq.github.io%2Fselenium%2Fdocs%2Fapi%2Fpy%2F)

具体API文档地址：[https://seleniumhq.github.io/selenium/docs/api/py/api.html](https://link.jianshu.com/?t=https%3A%2F%2Fseleniumhq.github.io%2Fselenium%2Fdocs%2Fapi%2Fpy%2Fapi.html)

- API 使用： 用现成的类（大部分情况）的方法进行编程
  - WebDriver
  - WebElement
- API 文档
  - 编程使用说明
  - 介绍了每个方法的使用
    - 方法的作用
    - 方法的参数
    - 方法的返回值

#### 2.2.1 控制浏览器

浏览器的控制也是自动化测试的一个基本组成部分，我们可以将浏览器最大化，设置浏览器的高度和宽度以及对浏览器进行导航操作等。

```python
# 浏览器打开网址
driver.get("https://www.baidu.com") 

# 浏览器最大化
driver.maximize_window() 

# 设置浏览器的高度为800像素，宽度为480像素
driver.set_window_size(480, 800) 

# 浏览器后退
driver.back() 

# 浏览器前进
driver.forward() 

# 浏览器关闭
driver.close() 

# 浏览器退出
driver.quit()
```

#### 2.2.2 元素定位操作

WebDriver提供了一系列的定位符以便使用元素定位方法。常见的定位符有以下几种：

- id
- name
- class name
- tag
- link text
- partial link text
- xpath
- css selector

WebDriver提供了多种多样的`find_element_by`方法在一个网页里面查找元素。也提供了`find_elements_by`的方式去定位多个元素。

尽管上述的方式，可以进行元素定位，实际上我们也是更多的用组合的方式进行元素定位。

| 方法Method          | 参数Argument                              | 示例Example                                 |
| :------------------ | :---------------------------------------- | :------------------------------------------ |
| `id`                | id: 需要被查找的元素的ID                  | `find_element_by_id('search')`              |
| `name`              | name: 需要被查找的元素的名称              | `find_element_by_name('q')`                 |
| `class name`        | class_name: 需要被查找的元素的类名        | `find_element_by_class_name('input-text')`  |
| `tag_name`          | tag: 需要被查找的元素的标签名称           | `find_element_by_tag_name('input')`         |
| `link_text`         | link_text: 需要被查找的元素的链接文字     | `find_element_by_link_text('Log In')`       |
| `partial_link_text` | link_text: 需要被查找的元素的部分链接文字 | `find_element_by_partial_link_text('Long')` |
| `xpath`             | xpath: 需要被查找的元素的xpath            | `find_element_by_xpath('//*[@id="xx"]/a')`  |
| `css_selector`      | css_selector: 需要被查找的元素的ID        | `find_element_by_css_selector('#search')`   |



链接文字查找通常比较简单。使用`find_element_by_link_text`请查看以下示例

```javascript
<a href="#header-account" class="skip-link skip-account">    
    <span class="icon"></span>    
	<span class="label">ACCOUNT Description</span>
</a>
```

测试代码如下：

```Python
self.driver.find_element_by_link_text("ACCOUNT Description")
```

依据部分链接文字partial text查找

```Python
self.driver.find_elements_by_partial_link_text("ACCOUNT")
```

依据XPath进行查找

常用的XPath的方法有`starts-with()`，`contains()`和`ends-with()`等

> 若想要了解更多关于XPath的内容，请查看[http://www.w3schools.com/XPath/](https://link.jianshu.com/?t=http%3A%2F%2Fwww.w3schools.com%2FXPath%2F)



#### 2.2.3 鼠标事件操作



常用的鼠标方法：

- context_click() # 右击
- double_click() # 双击
- drag_and_drop() # 拖拽
- move_to_element() # 鼠标停在一个元素上
- click_and_hold() # 按下鼠标左键在一个元素上

#### 2.2.4 键盘事件操作

键盘操作经常处理的如下：

| 代码                          | 描述              |
| :---------------------------- | :---------------- |
| `send_keys(Keys.BACKSPACE)`   | 删除键(BackSpace) |
| `send_keys(Keys.SPACE)`       | 空格键(Space)     |
| `send_keys(Keys.TAB)`         | 制表键(Tab)       |
| `send_keys(Keys.ESCAPE)`      | 回退键(Esc)       |
| `send_keys(Keys.ENTER)`       | 回车键(Enter)     |
| `send_keys(Keys.CONTROL,'a')` | 全选（Ctrl+A）    |
| `send_keys(Keys.CONTROL,'c')` | 复制（Ctrl+C）    |



**PS：**selenium操作的是相对上一次的坐标，所以根据不同的需求，需要做一定的封装

```Python
from selenium.webdriver.common.action_chains import ActionChains

def click_locxy(dr, x, y, left_click=True):
    '''
    dr:浏览器
    x:页面x坐标
    y:页面y坐标
    left_click:True为鼠标左键点击，否则为右键点击
    '''
    if left_click:
        ActionChains(dr).move_by_offset(x, y).click().perform()
    else:
        ActionChains(dr).move_by_offset(x, y).context_click().perform()
    ActionChains(dr).move_by_offset(-x, -y).perform()  # 将鼠标位置恢复到移动前
```



#### 2.2.5 截图操作

```python
self.browser.save_screenshot('verificationCode.png')
```

- 截小图

在图片的基础上截取, 可使用`PIL`模块

```Python
from PIL import Image
imageopen = Image.open('printscreen.png')
# 设定要截取的位置,这里是个元组
# (左, 上, 右, 下)
rangle = (623, 364, 685, 396)
frame4 = imageopen.crop(rangle)
frame4.save('code.jpg')
```



## 3. 数据库相关操作

#### 3.1 MySQL

```python
import pymysql
 
connect = pymysql.connect(host="xx", port=3306, user="root", passwd="xxx", db="xx")
cur = connect.cursor()
cur.execute("SELECT...")
mysql_data = cur.fetchall()
for row in mysql_data:
    # 进行测试
    # 使用字典类型
    data_to_test = {
      "key1": row[0],
      "key2": row[1]
    }
    
cur.close()
connect.close()
```

#### 3.2 Oracle

```Python
import cx_Oracle 
os.environ['NLS_LANG'] = 'SIMPLIFIED CHINESE_CHINA.UTF8'        # 解决中文乱码问题

# 连接 user/passwd@host:端口/instance
conn = cx_Oracle.connect('user/passwd@host:port/sm2')

# 创建游标对象
c = conn.cursor()

# 执行命令
x = c.execute('select sysdate from dual')

# data = x.fetchone()       # 返回单个元组，如果查询不到结果，则返回None(也就是只返回一条数据)
# print(data)

self.data = x.fetchall()         # 返回二维元组，如果查询不到结果，则返回()
# print(data)
# 关闭游标对象
c.close()
# 关闭连接
conn.close()
```

