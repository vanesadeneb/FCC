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

  //background weather and icons
  $.getJSON(url,function(json){
    var weatherId = json.weather[0].id;
    get_images(weatherId);
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