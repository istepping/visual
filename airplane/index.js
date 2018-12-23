function requestAirportData() {
    $.ajax({
        url:"https://www.tianqiapi.com/api/",
        data:"version=v1&city=济南",
        dataType:'json',
        type:"get",
        success:function (res) {
            console.log(res)
        }
    });
    $.ajax({
        url:"https://flight.qunar.com/touch/api/domestic/wbdflightlist/",
        data:"departureCity=%E5%8C%97%E4%BA%AC&arrivalCity=%E6%B7%B1%E5%9C%B3&departureDate=2018-06-12",
        dataType:'json',
        type:"get",
        success:function (res) {
            console.log(res)
        },
        fail:function (error) {
            console.log(error)
        }
    })
}
function requestWeatherData() {
    return {
        "cityid": "101120201",//城市ID
        "update_time": "2018-12-08 08:00:00",//最后更新时间
        "city": "青岛"
    };
}

function getData() {
    let jsaonData = requestWeatherData()

    return []
}

function showData(center, data) {
    var map = new inMap.Map({
        id: 'allmap',
        skin: "Blueness",
        center: center,
        zoom: {
            value: 6,
            show: true,
            max: 18,
            min: 5
        },
    })
    var overlay = new inMap.MoveLineOverlay({
        style: {
            point: {
                tooltip: {
                    show: true,
                    formatter: "{name}"
                },
                style: {
                    normal: {
                        backgroundColor: 'rgba(200,200,50,1)',
                        borderWidth: 1,
                        borderColor: "rgba(255,255,255,1)",
                        size: 6,
                        label: {
                            show: true,
                            color: 'rgba(255,255,255,1)'
                        },
                    },
                    mouseOver: {
                        backgroundColor: 'rgba(200,200,200,1)',
                        borderWidth: 4,
                        borderColor: "rgba(255,255,255,1)",
                    },
                    selected: {
                        backgroundColor: 'rgba(184,0,0,1)',
                        borderColor: "rgba(255,255,255,1)",
                    },
                },
                event: {
                    onMouseClick: function (item) {
                        var d = document.getElementById('airport');
                        d.innerHTML = '233333';
                    }
                },
            },
            line: { //线的配置
                style: {
                    normal: {
                        borderColor: 'rgba(200, 200, 50, 1)',
                        borderWidth: 1,
                        shadowColor: 'rgba(255, 250, 50, 1)',
                        shadowBlur: 20,
                        lineOrCurve: "curve"
                    }
                }
            },
            lineAnimation: {
                style: {
                    size: 2,
                    //移动点颜色
                    fillColor: '#fff',
                    //移动点阴影颜色
                    shadowColor: '#fff',
                    //移动点阴影大小
                    shadowBlur: 10,
                    lineOrCurve: 'curve',
                }

            },
        },
        data: data,

    });
    map.add(overlay);
}

function changeCity() {
    let cityName = prompt("请输入城市");
    $("#btn_city").html(cityName);
    showData(center, data);
}


let data = [{
    "from": {"name": "广州", "coordinates": [113.270793, 23.135308]},
    "to": {"name": "衡山", "coordinates": [112.612787, 27.317599]},
    "count": 1
},
    {
        "from": {"name": "广州", "coordinates": [113.270793, 23.135308]},
        "to": {"name": "北京", "coordinates": [116.413554, 39.911013]},
        "count": 2
    },
    {
        "from": {"name": "广州", "coordinates": [113.270793, 23.135308]},
        "to": {"name": "三亚", "coordinates": [109.518646, 18.258217]},
        "count": 3
    },
    {
        "from": {"name": "广州", "coordinates": [113.270793, 23.135308]},
        "to": {"name": "上海", "coordinates": [121.480237, 31.236305]},
        "count": 4
    },
    {
        "from": {"name": "广州", "coordinates": [113.270793, 23.135308]},
        "to": {"name": "韶关", "coordinates": [113.603757, 24.816174]},
        "count": 4
    }];
let center = [113.270793, 23.135308];
showData(center, data);  //center:[113.270793,23.135308],data:数据
requestAirportData();