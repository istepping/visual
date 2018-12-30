function requestAirportData(startCity, endCity) {
    $.ajax({
        url: "http://127.0.0.1:8000/get_airplane_data",
        data: "startCity=" + startCity + "&endCity=" + endCity,
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res);
            showAirLineData(res);
        },
        fail: function (error) {
            console.log(error);
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
    document.querySelector("#loading").style.display = 'block';
    document.querySelector("#loading_text").style.display = 'block';
    $.ajax({
        url: "http://127.0.0.1:8000/get_visual_data",
        data: "startCity=" + city,
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res);
            document.querySelector("#loading").style.display = 'none';
            document.querySelector("#loading_text").style.display = 'none';
            showData(res[0].from.coordinates, res);
        },
        fail: function (error) {
            console.log(error)
        }
    })
}

function changeStartAndEndCity() {
    let startCity = $("#searchInputStart").val();
    let endCity = $("#searchInputEnd").val();
    document.querySelector("#loading").style.display = 'block';
    document.querySelector("#loading_text").style.display = 'block';
    $.ajax({
        url: "http://127.0.0.1:8000/get_visual_data_with_end",
        data: "startCity=" + startCity + "&endCity=" + endCity,
        dataType: 'json',
        type: "get",
        success: function (res) {
            console.log(res);
            document.querySelector("#loading").style.display = 'none';
            document.querySelector("#loading_text").style.display = 'none';
            showData(res[0].from.coordinates, res);
            requestAirportData(startCity, endCity);
        },
        fail: function (error) {
            console.log(error)
        }
    })
}

function showAirLineData(res) {
    console.log("显示数据");
    console.log(res);
    if (res.msg === "success") {
        $("#start_time").html(res.result[0].planTime);
        $("#during_time").html(res.result[0].flightTime);
        $("#end_time").html(res.result[0].planArriveTime);
        $("#start_airplane").html(res.result[0].from);
        $("#airplane").html(res.result[0].airLines);
        $("#end_airplane").html(res.result[0].to);
        $("#fromCityName").html(res.result[0].fromCityName);
        $("#toCityName").html(res.result[0].toCityName);
        $("#flightNo").html(res.result[0].flightNo);
        $("#airLine").html(res.result[0].airLines);
        $("#flightRate").html(res.result[0].flightRate);
        $("#week").html(res.result[0].week);
    } else {
        alert("该航线没有航班信息!");
    }
}

function showData(center, data) {
    var map = new inMap.Map({
        id: 'allmap',
        skin: "Blueness",
        center: center,
        zoom: {
            value: 5,
            show: false,
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
                        document.getElementById('w_searchInput').value = item[0].name;
                        changeData();
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
                        requestAirportData(item[0].properties.from.name, item[0].properties.to.name)
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
    let cityName = $("#searchInput").val();
    getData(cityName);
}

function changeData() {
    document.getElementById('iframe').src = "https://tianqiapi.com/api.php?style=ts&skin=pitaya&color=00A3AC&city=" +$("#w_searchInput").val();
}


getData("广州");
