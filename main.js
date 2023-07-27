$(document).ready(function () {

  // window.onload = function () {
  //   $.get("https://api.tomorrow.io/v4/weather/realtime?location=hanoi&apikey=Mxg1qyFAjPwkATUsXh6o5qb8Vx8ejY8q", function (datas, status) {
  //     isReasultWeather();
  //   })
  // }


  //onclick Enter
  $('.inputLocation').keypress(function (event) {
    event.preventDefault();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      isReasult();
    }

    $(".search").click(function () {
      isReasult();
    }
    )


  });

});


//Logic
function isReasult() {
  let severAPI =
    "https://api.tomorrow.io/v4/weather/realtime?location= &apikey=Mxg1qyFAjPwkATUsXh6o5qb8Vx8ejY8q";

  let dataUser = $(".inputLocation").val();
  let weatherApi = severAPI.replace(" ", dataUser);

  $.get(weatherApi, function (datas, status) {



    const isTemperature = datas.data.values.temperature;
    const isHumidity = datas.data.values.humidity;
    const isPrecipitationProbability =
      datas.data.values.precipitationProbability;
    const isCloudCover = datas.data.values.cloudCover;

    $(".weather-temperature").html(function () {
      return "Nhiệt độ " + isTemperature + "°C";
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

    if (isTemperature > 30) {
      $(".app").html(function () {
        $(".app").css({ "background-image": "url(chup-anh-khi-troi-nang-gat.jpg)" })
      });
    }
  });

}

