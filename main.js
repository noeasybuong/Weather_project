$(document).ready(function () {

  //Onload
  $(document).ready(function () {
    isReasultDefault();
  });

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
});

function isReasultDefault() {
  const defaultSeverAPI =
    "https://api.tomorrow.io/v4/weather/realtime?location=hanoi&apikey=ermFk4uKhKdg8UgK0BbWaFkbdkUNHf5O";
  $.get(defaultSeverAPI, function (datas, status) {
    isReasultWeather(datas);
  });
}

//Logic
function isReasult() {
  let severAPI =
    "https://api.tomorrow.io/v4/weather/realtime?location= &apikey=ermFk4uKhKdg8UgK0BbWaFkbdkUNHf5O";

  let dataUser = $(".inputLocation").val();
  let weatherApi = severAPI.replace(" ", dataUser);

  $.get(weatherApi, function (datas, status) {
    isReasultWeather(datas);
  });
}

function isReasultWeather(values) {
  const isLocation = values.location.name;
  const isDate = new Date();
  const isHours = isDate.getHours();
  const isToday = isHours + ":" + isDate.getMinutes() + ":" + isDate.getSeconds() + "        " + isDate.getDate() + "-" + (isDate.getMonth() + 1) + "-" + isDate.getFullYear();
  const isTemperature = values.data.values.temperature;
  const isHumidity = values.data.values.humidity;
  const isPrecipitationProbability =
    values.data.values.precipitationProbability;
  const isCloudCover = values.data.values.cloudCover;
  const isuvIndex = values.data.values.uvIndex

  $(".icon-uvIndex").attr('src', 'images/istockphoto-968115898-170667a.jpg');
  $(".icon-humidity").attr('src', 'images/pngtree-humidity-water-vapor-droplet-moisture-png-image_4812649.png');
  $(".icon-precipitationProbability").attr('src', 'images/weather-forecast.png');
  $(".icon-cloudCover").attr('src', 'images/cloudy-day.png');
  $(".location").html(function () {
    return isLocation;
  });

  $(".todayDate").html(function () {
    return isToday
  });

  $(".weather-temperature").html(function () {
    return isTemperature + "°C";
  });



  $(".weather-uvIndex").html(function () {
    return "Chỉ số UV :" + isuvIndex;
  });

  $(".weather-humidity").html(function () {
    return "Độ ẩm " + isHumidity + "%";
  });

  $(".weather-precipitationProbability").html(function () {
    return "Khả năng mưa " + isPrecipitationProbability + "%";
  });

  $(".wether-cloudCover").html(function () {
    return "Mây che phủ " + isCloudCover + "%";
  });











  if (isHours >= 19 || isHours <= 4) {
    $(".app").html(function () {
      $(".app").css({
        "background-image": "url(images/pexels-miriam-espacio-365633.jpg)"
      });
      $(".icon-weather").attr('src', 'images/moon (1).png');

    });

  }

  else {

    if (isTemperature < 34 && (isHumidity < 90 && isHumidity > 30)) {

      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(images/04099_dataibaysunset_1920x1080.jpg)"
        });
        $(".icon-weather").attr('src', 'images/cloudy (1).png');
      });
    }

    if (isTemperature > 34 && isHumidity < 30) {

      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(images/04099_dataibaysunset_1920x1080.jpg)"
        });

        $(".icon-weather").attr('src', 'images/sun.png');
      });
    }


    if (isTemperature < 34 && isHumidity > 90) {

      $(".app").html(function () {
        $(".app").css({
          "background-image": "url(anh-bau-troi-am-u-dep-nhat_022454740.jpg)"
        });
        $(".icon-weather").attr('src', 'images/cloudy.png');
      });
    }

  }



}


