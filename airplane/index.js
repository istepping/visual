function requestAirportData(startCity,endCity) {
    $.ajax({
        url: "http://127.0.0.1:8000/get_airplane_data",
        data: "startCity="+startCity+"&endCity="+endCity,
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res)
        },
        fail: function (error) {
            console.log(error)
        }
    })
}

function requestWeatherData() {
    $.ajax({
        url: "https://www.tianqiapi.com/api/",
        data: "version=v1&city=济南",
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res)
        }
    });
}

function getData(city) {
    $.ajax({
        url: "http://127.0.0.1:8000/get_visual_data",
        data: "startCity=" + city,
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res);
            showData(res[0].from.coordinates, res);
        },
        fail: function (error) {
            console.log(error)
        }
    })
}

function showData(center, data) {
    var map = new inMap.Map({
        id: 'allmap',
        skin: "Blueness",
        center: center,
        zoom: {
            value: 5,
            show: true,
            max: 18,
            min: 3
        },
    });
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
                        console.log(item)
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
                },
                event: {
                    onMouseClick: function (item) {
                        requestAirportData(item[0].properties.from.name,item[0].properties.to.name)
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
    getData(cityName);
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