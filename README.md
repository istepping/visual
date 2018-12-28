# 开发记录
2018-12-28
* 欢迎页
1 菜单栏-> 2 布局设计
周三:切换数据OK,点位置显示城市天气,点线显示航班数据
* 航班可视化流程(初级):
输入(城市,时间)-> 查询数据接口 -> 处理数据 -> 可视化显示
地点显示位置
1 城市切换效果 2 OK
* 天气界面、航班界面
## 实现的功能
1 输入城市、显示该城市到各重点城市的航班信息
2 输入起始城市、终点城市显示一条航线的多个航班信息
3 机场可视化
# HTML相关
1. meta: 名值对信息,在head中,发送到浏览器的header中存在信息
content(require):
http-equiv:没有name属性时的名字
2. style: 唯一可能的值是"text/css",位于head中
* # id选择器
# 工程文件
1. let var区别
> let
* 块级作用域
* 不允许声明前访问
* 不允许重复声明
2. Access-Control-Allow-Origin
* 同域：相同协议，相同端口，相同域名
* 跨域：协议，端口，域名不一致,跨域资源不能访问
* Access-Control-Allow-Origin是HTML5中解决资源跨域的策略
2. 基础
[div居中](https://blog.csdn.net/qq_32623363/article/details/77101971)
