<template>
	<div id="box" class="clearfix">

	    <div id="map" >
	        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
           
	        <div id="myChart1"  v-show="chinaisshow" ></div>               
	        <div id="container"  v-show="provinceisshow"></div>
            
	    </div>

	    <button id="btn"> 
	     返回全国地图
	    </button>

	    <div id="graphic">
	        <div id="histogram"></div>
	        <div id="circle"></div>
	    </div>

	</div>  
</template>

<script type="text/javascript">
    import 'echarts/map/js/china'
    import 'echarts/map/js/province/shanghai'
    import 'echarts/map/js/province/hebei'
    import 'echarts/map/js/province/shanxi'
    import 'echarts/map/js/province/neimenggu'
    import 'echarts/map/js/province/liaoning'
    import 'echarts/map/js/province/jilin'
    import 'echarts/map/js/province/heilongjiang'
    import 'echarts/map/js/province/jiangsu'
    import 'echarts/map/js/province/zhejiang'
    import 'echarts/map/js/province/anhui'
    import 'echarts/map/js/province/fujian'
    import 'echarts/map/js/province/jiangxi'
    import 'echarts/map/js/province/shandong'
    import 'echarts/map/js/province/henan'
    import 'echarts/map/js/province/hubei'
    import 'echarts/map/js/province/hunan'
    import 'echarts/map/js/province/guangdong'
    import 'echarts/map/js/province/guangxi'
    import 'echarts/map/js/province/hainan'
    import 'echarts/map/js/province/sichuan'
    import 'echarts/map/js/province/guizhou'
    import 'echarts/map/js/province/yunnan'
    import 'echarts/map/js/province/xizang'
    import 'echarts/map/js/province/shanxi1'
    import 'echarts/map/js/province/gansu'
    import 'echarts/map/js/province/qinghai'
    import 'echarts/map/js/province/ningxia'
    import 'echarts/map/js/province/xinjiang'
    import 'echarts/map/js/province/beijing'
    import 'echarts/map/js/province/tianjin'
    import 'echarts/map/js/province/chongqing'
    import 'echarts/map/js/province/xianggang'
    import 'echarts/map/js/province/aomen'
    export default {
      data(){
      	return{
            provinces:['shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian','jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang','shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'],
            provincesText:['上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'],
            loadedScriptID:"",
            selectedProvince:"湖北",
            selectedCity:"",
            chinaisshow:true,
            provinceisshow:false,
            chinaHistogram: [10, 52, 200, 334, 390, 330, 220],
            chinaCircle:    [
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:158, name:'搜索引擎'},
                        {value:158, name:'第三方登录'}
                    ],
            provinceHistogram: {
                "湖北":  [130, 232, 300, 364, 190, 320, 520],
                "湖南":  [420, 132, 240, 164, 590, 220, 720],
                "江西":  [120, 352, 640, 264, 390, 220, 120],
                "安徽":  [220, 524, 240, 364, 340, 223, 550],
                "河南":  [530, 124, 340, 564, 340, 623, 450],
            },
            provinceCircle: {
                "湖北": [
                        {value:324, name:'直接访问'},
                        {value:324, name:'邮件营销'},
                        {value:225, name:'联盟广告'},
                        {value:125, name:'视频广告'},
                        {value:162, name:'搜索引擎'},
                        {value:943, name:'第三方登录'}
                    ],
                "湖南": [
                        {value:245, name:'直接访问'},
                        {value:235, name:'邮件营销'},
                        {value:675, name:'联盟广告'},
                        {value:139, name:'视频广告'},
                        {value:153, name:'搜索引擎'},
                        {value:256, name:'第三方登录'}
                    ],
                "江西": [
                        {value:385, name:'直接访问'},
                        {value:134, name:'邮件营销'},
                        {value:286, name:'联盟广告'},
                        {value:246, name:'视频广告'},
                        {value:766, name:'搜索引擎'},
                        {value:423, name:'第三方登录'}
                    ],
                "安徽": [
                        {value:315, name:'直接访问'},
                        {value:130, name:'邮件营销'},
                        {value:224, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:878, name:'搜索引擎'},
                        {value:657, name:'第三方登录'}
                    ],
                "河南": [
                        {value:355, name:'直接访问'},
                        {value:340, name:'邮件营销'},
                        {value:356, name:'联盟广告'},
                        {value:255, name:'视频广告'},
                        {value:153, name:'搜索引擎'},
                        {value:124, name:'第三方登录'}
                    ]
            },
            cityHistogram: {
                "武汉市": [120, 532, 230, 164, 590, 320, 420],
                "长沙市": [130, 332, 230, 125, 630, 620, 320],
                "南昌市": [430, 242, 730, 425, 130, 320, 420],
                "合肥市": [240, 342, 130, 825, 340, 860, 320],
                "郑州市": [350, 242, 430, 554, 343, 240, 480],
            },
            cityCircle: {
                "武汉市": [
                        {value:224, name:'直接访问'},
                        {value:524, name:'邮件营销'},
                        {value:245, name:'联盟广告'},
                        {value:465, name:'视频广告'},
                        {value:563, name:'搜索引擎'},
                        {value:335, name:'第三方登录'}
                    ],
                "长沙市": [
                        {value:245, name:'直接访问'},
                        {value:135, name:'邮件营销'},
                        {value:532, name:'联盟广告'},
                        {value:665, name:'视频广告'},
                        {value:564, name:'搜索引擎'},
                        {value:367, name:'第三方登录'}
                    ],
                "南昌市": [
                        {value:467, name:'直接访问'},
                        {value:367, name:'邮件营销'},
                        {value:577, name:'联盟广告'},
                        {value:337, name:'视频广告'},
                        {value:763, name:'搜索引擎'},
                        {value:425, name:'第三方登录'}
                    ],
                "合肥市": [
                        {value:367, name:'直接访问'},
                        {value:367, name:'邮件营销'},
                        {value:224, name:'联盟广告'},
                        {value:643, name:'视频广告'},
                        {value:366, name:'搜索引擎'},
                        {value:477, name:'第三方登录'}
                    ],
                "郑州市": [
                        {value:366, name:'直接访问'},
                        {value:853, name:'邮件营销'},
                        {value:562, name:'联盟广告'},
                        {value:255, name:'视频广告'},
                        {value:473, name:'搜索引擎'},
                        {value:644, name:'第三方登录'}
                    ]
            }


      	}
      },
      methods:{
      	randomData(){
      		return Math.round(Math.random()*1000);
      	},
        setsizeContainer(dom){
            
            dom.style.width = Number(window.innerWidth)/2+'px';

            if (dom.id =="histogram" || dom.id == "circle") {
                
                dom.style.height = Number(window.innerHeight)/2.2+'px';
            } else{
                dom.style.height = Number(window.innerHeight)/1.2+'px';
            }
            
        }
      },
      mounted(){
       
        // 保存vue实例
        var that = this;

        // 获取btn实例
        var btn =document.getElementById("btn")

       


        // 初始化中国地图
        var domMychart1 = document.getElementById('myChart1');
        // 设置设置mychart1dom\元素的宽高
        this.setsizeContainer(domMychart1)

        this.myChart1 = this.$echarts.init(domMychart1);
            
        this.option1 = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                     itemStyle: {
                            normal: {
                                        color: function (params) {
                                            var colorList = [
                                              '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                               '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                               '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                            ];
                                            return colorList[params.dataIndex]
                                        },
                                        
                                    }
                                },
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '重庆',value: this.randomData() },
                        {name: '河北',value: this.randomData() },
                        {name: '河南',value: this.randomData() },
                        {name: '云南',value: this.randomData() },
                        {name: '辽宁',value: this.randomData() },
                        {name: '黑龙江',value: this.randomData() },
                        {name: '湖南',value: this.randomData() },
                        {name: '安徽',value: this.randomData() },
                        {name: '山东',value: this.randomData() },
                        {name: '新疆',value: this.randomData() },
                        {name: '江苏',value: this.randomData() },
                        {name: '浙江',value: this.randomData() },
                        {name: '江西',value: this.randomData() },
                        {name: '湖北',value: this.randomData() },
                        {name: '广西',value: this.randomData() },
                        {name: '甘肃',value: this.randomData() },
                        {name: '山西',value: this.randomData() },
                        {name: '内蒙古',value: this.randomData() },
                        {name: '陕西',value: this.randomData() },
                        {name: '吉林',value: this.randomData() },
                        {name: '福建',value: this.randomData() },
                        {name: '贵州',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '青海',value: this.randomData() },
                        {name: '西藏',value: this.randomData() },
                        {name: '四川',value: this.randomData() },
                        {name: '宁夏',value: this.randomData() },
                        {name: '海南',value: this.randomData() },
                        {name: '台湾',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                
                },

            ]
        };                
        this.myChart1.setOption(this.option1); 

        //给中国地图绑定事件,动态改变option
        this.myChart1.on('click', function (param) {   
            console.log(param.name)
            // 记录选择省份
            that.selectedProvince = param.name;
            that.chinaisshow = false;
            that.provinceisshow =true;

            //改变that.option2.series[0].mapType的值为"中文" ,清空画布内容
            that.option2.series[0].mapType = that.selectedProvince;
            that.option2.text = that.selectedProvince;

            that.myChart2.clear();

            that.myChart2.setOption(that.option2);


            // 柱状图 与环形图变成省份数据,清除柱状图与环形图画布上的内容
            //柱状图
            that.option3.series[0].data = that.provinceHistogram[that.selectedProvince]
            that.myChart3.clear();
            that.myChart3.setOption(that.option3)
            //环形图
            that.option4.series[0].data = that.provinceCircle[that.selectedProvince]
            that.myChart4.clear();
            that.myChart4.setOption(that.option4)
          
        });

    // 初始化省级地图
        var domMychart2 = document.getElementById('container');
        // 设置设置mychart1dom\元素的宽高
        this.setsizeContainer(domMychart2)

        this.myChart2 = this.$echarts.init(domMychart2);

        this.option2 ={

                series : [
                    {
                        name: '网点个数',
                        //series[i]-map:系列列表。每个系列通过 type 决定自己的图表类型,此处是地图类型
                        type: 'map', 
                        //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
                        mapType: this.selectedProvince,
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

                     }
                ],
                title : {
                text: this.selectedProvince,
                left: 'center'
               } 
            };
        this.myChart2.setOption(this.option2);

        //给省级地图绑定事件,获取selectedCity
        this.myChart2.on('click', function (param) {   

            console.log(param.name)
            // 记录选择城市
            that.selectedCity = param.name;

            // 柱状图 与环形图变成省份数据,清除柱状图与环形图画布上的内容
            //柱状图
            

            that.option3.series[0].data = that.cityHistogram[that.selectedCity] 
            
            that.myChart3.clear();

            that.myChart3.setOption(that.option3)

            //环形图
            that.option4.series[0].data = that.cityCircle[that.selectedCity]
            that.myChart4.clear();
            that.myChart4.setOption(that.option4)



          
        });

        // 给btn绑定事件

        btn.onclick = function () {
            that.chinaisshow = true;
            that.provinceisshow = false;


            // 柱状图 与环形图变成中国地图,清除柱状图与环形图画布上的内容
            //柱状图
            that.option3.series[0].data = that.chinaHistogram
            that.myChart3.clear();
            that.myChart3.setOption(that.option3)
            //环形图
            that.option4.series[0].data = that.chinaCircle
            that.myChart4.clear();
            that.myChart4.setOption(that.option4)
        }

    //--------------------------------------------------------------------------------------------------------- 
    // 柱状图部分

        var domMychart3 = document.getElementById('histogram');
        // 设置设置mychart1dom\元素的宽高
        this.setsizeContainer(domMychart3)

        this.myChart3 = this.$echarts.init(domMychart3);
        this.option3 = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data: this.chinaHistogram
                }
            ]
        };

        this.myChart3.setOption(this.option3)

        
    //--------------------------------------------------------------------------------------------------------- 
    // 环形图部分

        var domMychart4 = document.getElementById('circle');
        // 设置设置mychart1dom\元素的宽高
        this.setsizeContainer(domMychart4)

        this.myChart4 = this.$echarts.init(domMychart4);

        this.option4 = {
            tooltip: {
                trigger: 'item',
                formatter: "<br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','第三方登录']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.chinaCircle
                }
            ]
        };

        this.myChart4.setOption(this.option4)
        // ------------------给window对象绑定事件
        window.onresize = function (argument) {

            console.log(that)
            // 重新设置一下container的宽高 画布调整大小
            that.setsizeContainer(domMychart1)
            that.myChart1.resize()

            that.setsizeContainer(domMychart2)
            that.myChart2.resize()


            that.setsizeContainer(domMychart3)
            that.myChart3.resize()


            that.setsizeContainer(domMychart4)
            that.myChart4.resize()   
        }


      }
    }

    
</script>


<style type="text/css">
	.clearfix:after{
            content:".";
            display: block;
            height: 0;
            line-height: 0;
            visibility: hidden;
            clear: both; 
        }
        #box{
            width: 100%;
            /*height: 800px;*/
            position: relative;
        }
        #map{
            width: 50%;
            /*height: 800px;*/
            float: left;
        }
        #myChart1{
            /*width:100%;*/
            /*height:"800px";*/
        }
        #container{
            /*width:100%;*/
            /*height:"800px";*/
        }
        button{
            position: absolute;
            width: 100px;
            height: 30px;
            top: 0;
            right: 50%;
            color:;
            background-color: #10F6BC;
            /*z-index: 10;*/
        }
        #graphic {
            float: right;
            width: 50%;
        }
</style>