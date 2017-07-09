
//Get weather
function get_weather(url){
  var unit = "metric";
  var html = "";
  var temp_unit = "";

  $.getJSON(url, {units: unit}, function(json){
    html += "<p class='local-name'><i class='fa fa-map-marker' aria-hidden='true'> </i> " + json.name + ", " + json.sys.country + "</p>";         
    html += "<p class='desc'>" + json.weather[0].description + "</p>";
    $(".location").html(html);
    temp_unit = "<p id='temperature'>" + json.main.temp + "</p>";
    $(".temp").html(temp_unit );
  });

  //Unit temperature control 
  $(function() {
      $('#toggle-two').bootstrapToggle({
        on: '°F',
        off: '°C'
      });
      $('#toggle-event').change(function() {
        var unit = "imperial";
        var state = $(this).prop('checked');
        $.getJSON(url, {units: unit}, function(json){
            temp_unit = json.main.temp;
            if(!state){
              unit = "metric";
              $.getJSON(url, {units: unit}, function(json){
                temp_unit = json.main.temp;
                $("#temperature").html(temp_unit);
              });
            }
          $("#temperature").html(temp_unit);
        });
      });
  });

  //background weather
  $.getJSON(url,function(json){
    var weatherId = json.weather[0].id;
    console.log("id: " + weatherId);
    if(weatherId >= 200 && weatherId <= 232){
      $("html").css("background", "url('img/tormenta.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/storm.png");
    }
    if(weatherId >= 300 && weatherId <= 321){
      $("html").css("background", "url('img/llovizna.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/drops.png");
    }

    if(weatherId >= 500 && weatherId <= 531){
      $("html").css("background", "url('img/lluvia.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/rain.png");
    }

    if(weatherId >= 600 && weatherId <= 622){
      $("html").css("background", "url('img/nieve.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/snowflake.png");
    }

    if(weatherId == 761){
      console.log("dust!");
      $("html").css("background", "url('img/dust.jpeg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/dust.png");
    }

    if(weatherId == 800){
      console.log("despejado!");
      $("html").css("background", "url('img/despejado.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/sun.png");
    }

    if(weatherId >= 801 && weatherId <= 804){
      console.log("parcialmente nublado!");
      $("html").css("background", "url('img/nublado.jpg') no-repeat center center fixed");
      $("html").css("background-size", "cover");
      $(".temp-img").attr("src","icons/clouds.png");
    }
    console.log(url);
  }); 
};
  
var load = function() {
  navigator.geolocation.getCurrentPosition(setLocation);
  function setLocation(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=ae2f419ea5acffef9a3f1b6b3ac2b579";

    get_weather(url);    
  
  };
}
$(document).ready(load);