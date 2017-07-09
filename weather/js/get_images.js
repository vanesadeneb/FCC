function get_images(weatherId){
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
}