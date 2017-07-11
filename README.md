# ECharts
>It is my first to use Echarts for completing Chinines map
# The usage
1. You need import ths script 
eg: 
```
    <script src="echarts.min.js"></script>
    <script src="node_modules/echarts/map/js/china.js"></script>
```
2. We should prepare one or more container(div) to warp our map
```
  <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 1000px;height:800px; background-color: pink"></div>
    <div id="container" style="width: 1000px;height:800px;"></div>
```

3. The most important part is js.
```
  //获取准备的容器对象
  var dom = document.getElementById("container");
  //初始化地图
  var myChart = echarts.init(dom);
  
  
  //关键是配置项
       var option ={

            series : [
            {
                name: '网点个数',
                //series[i]-map:系列列表。每个系列通过 type 决定自己的图表类型,此处是地图类型
                type: 'map', 
                //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
                mapType: provincesText[index],
                //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
                itemStyle: {
                //normal 是图形在默认状态下的样式；
                    normal: {
                        show: true,
                        areaColor:"#CECECE",
                        borderColor:"#FCFCFC",
                        borderWidth:"1"
                    },
                    //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    emphasis: {
                        show: true,
                        areaColor:"#C8A5DF",
                    }
                },
                //图形上的文本标签，可用于说明图形的一些数据信息
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

            }],
            title : {
            text: pName,
            left: 'center'
           } 
           };
  //使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
```
## We will continue to improve the demo later.....
