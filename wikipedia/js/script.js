var getArticle = function(){
    var searchInput = $("input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";

    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
            for(var i = 0; i < data[1].length; i++){
                $(".articles").prepend("<li><a href='" + data[3][i] + "'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
            }
        },
        error: function(errorMessage){
            alert("Error! Oops :()");
       }
    });
};

var load = function(){
    /* Press search button */
    $("button").click(getArticle);

    /* Press enter */
    $("input").keypress(function(e) {
        if(e.which == 13) {
            $(this).blur();
            $("button").focus().click(getArticle);
            }
    });
    /* Press random button */
    $("#randomButton").click(function(){
        var href = $("#randomButton").attr('href');
        window.open("https://en.wikipedia.org/wiki/Special:Random", '_black');
    });
};

$(document).ready(load);