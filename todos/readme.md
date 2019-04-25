-wxml 只是模板  不像H5  
看到的是Page  不是wxml 而是编译过的wxml,js,data  拿去模板生成page  view
-登陆  登陆后
页面不是静态的  dom Ajax 
MVVM来实现   状态
-wxml {{}} 或者 指令  data 加相应的数据项就好
this.setData({})  设置数据  并且带来数据相应部分UI的重新渲染
数据驱动界面  响应式编程
跟DOM  say goodble
MVVM 数据决定一切
数据状态 === 界面状态
登陆状态 hasUserInfo   界面在某一刻有且只有一个状态
userInfo:{}  数据驱动界面

{{}} 不只是数据输出 里面是js运行环境
{{addShow?'':'hide'}}
