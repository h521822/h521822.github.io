---
title: KDJ
date: 2020-12-26 16:17:55
tags:
img: https://pic.downk.cc/item/5fb0d11f5e8ce0adfca5e8c3.jpg
---

## KDJ

>  期货和股票市场上最常用的技术分析工具——KDJ指标，全名随机指标（Stochastics），由乔治·莱恩博士(George Lane)所创。融合了动量观念、强弱指标一些优点的KDJ指标，通过特定周期内出现过的最高价、最低价、收盘价三者之间的比例关系为基本数据进行计算，将得出的K值、D值与J值连接成曲线图，就形成了反映价格波动趋势的KDJ指标。 

### 计算方法

 KDJ的实现步骤主要分成三步：
1、先计算“未成熟随机值”，即RSV 

![image.png](https://upload-images.jianshu.io/upload_images/6853416-38b1eafc55f16b2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```python
low_prices = df_status['low'].rolling(window=fastk_period).min()
high_prices = df_status['high'].rolling(window=fastk_period).max()
rsv = (df_status['close'] - low_prices) / (high_prices - low_prices) * 100
```



 2、求出当日的K值和D值（即计算出RSV值的**2日指数移动平均**） 

>  K线是RSV的2日移动平均线，D线是K线的2日移动平均线 

```python
# K线是RSV的2日移动平均线（同花顺、新浪财经   使用的2日平均线）
df_data['K'] = rsv.ewm(com=2).mean()
# D线是K线的2日移动平均线
df_data['D'] = df_data['K'].ewm(com=2).mean()
```

 3、计算出J值 

>  J = 3 * D - 2 * K 

```python
# J = 3 * D - 2 * K
df_data['J'] = 3 * df_data['K'] - 2 * df_data['D']
```

### 实际应用

1. K与D的取值，范围是0-100，80以上行情呈现超买现象，20以下呈现超卖现象。

2. 买进信号：K值在上涨趋势中﹤D值，K线向上突破D线时；卖出信号：K值在下跌趋势中﹥D值，K线向下跌破D线。

3. 交易不活跃、发行量小的股票并不适用KD指标，而对大盘和热门大盘的准确性却很高。

4. 在KD处在高位或低位，如果出现与股价走向的背离，则是采取行动的信号。

5. J的取值﹥100为超买，﹤0为超卖，都属于价格的非正常区域。

6. 短期转势预警信号：K值和D值上升或者下跌的速度减弱，倾斜度趋于平缓

通常K、D、J三值在20-80之间为徘徊区，宜观望，就敏感度而言，最强的是J值，其次是K，最慢的则是D了，而从安全性来讲，就刚刚相反。