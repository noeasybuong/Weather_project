$(document).ready(function () {

  //onclick Enter
  $(".inputLocation").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;

    if (keycode == "13") {
      event.preventDefault();
      isReasult();
    }

    $(".search").click(function () {
      isReasult();
    });
  });



  //Onload
  $(document).ready(function () {
    isReasultDefault();
  });


});


function isReasultDefault() {
  const defaultSeverAPI =
    "http://api.weatherapi.com/v1/current.json?key=9683829700c84a269be72831231808&q=ha noi&aqi=yes";
  $.get(defaultSeverAPI, function (datas, status) {
    isReasultWeather(datas);
  })
}


//Logic
function isReasult() {
  let severAPI = "http://api.weatherapi.com/v1/current.json?key=9683829700c84a269be72831231808&q= &aqi=yes";

  let dataUser = $(".inputLocation").val();
  let weatherApi = severAPI.replace(" ", dataUser);

  $.get(weatherApi, function (datas, status) {

    isReasultWeather(datas);
  })
}

function isReasultWeather(values) {
  const isLocation = values.location.name;
  const isDate = new Date();
  const isHours = isDate.getHours();
  const isToday =
    isHours +
    ":" +
    isDate.getMinutes() +
    "   " +
    isDate.getDate() +
    "-" +
    (isDate.getMonth() + 1) +
    "-" +
    isDate.getFullYear();
  const temperature = values.current.temp_c;
  console.log(values);
  const humidity = values.current.humidity;
  // const precipitationProbability =
  //   values.data.values.precipitationProbability;
  // const windSpeed = values.data.values.windSpeed;
  const uvIndex = values.current.uv;
  console.log(temperature);
  console.log(humidity);
  console.log(uvIndex);
  $(".location").html(function () {
    return isLocation;
  });

  $(".todayDate").html(function () {
    return isToday;
  });



  $(".weather-temperature").html(function () {
    return temperature + "°C";
  });

  $(".weather-uvIndex").html(function () {
    return uvIndex;
  });

  $(".weather-humidity").html(function () {
    return humidity + "%";
  });
  // $(".weather-precipitationProbability").html(function () {
  //   return precipitationProbability + "%";
  // });

  // $(".wether-WindSpeed").html(function () {
  //   return windSpeed + "km/giờ";
  // });

  if (isHours >= 19 || isHours <= 4) {
    $(".app").html(function () {
      $(".app").css({
        "background-image": "url(images/pexels-miriam-espacio-365633.jpg)",
      });
      $(".icon-weather").attr("src", "images/moon (1).png");
    });

  } else {
    if (temperature < 34 && humidity < 90 && humidity > 30) {
      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(images/04099_dataibaysunset_1920x1080.jpg)",
        });
        $(".icon-weather").attr("src", "images/cloudy (1).png");
      });
    }

    if (temperature > 34 && humidity < 30) {
      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(images/chup-anh-khi-troi-nang-gat.jpg)",
        });

        $(".icon-weather").attr("src", "images/sun.png");
      });
    }

    if (temperature < 34 && humidity > 90) {
      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(anh-bau-troi-am-u-dep-nhat_022454740.jpg)",
        });
        $(".icon-weather").attr("src", "images/cloudy.png");
      });
    }

  }
}
