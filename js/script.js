$(document).ready(function(){
    $(".img").click(function(){
        $(".img").hide();
        $(".what-showing2").show();
    });
    $(".what-showing2").click(function(){
        $(".what-showing2").hide();
        $(".img").show();
    });
      
    $(".DM").click(function(){
        $(".DM").hide();
        $(".what-showing3").show();
    });
    $(".what-showing3").click(function(){
        $(".what-showing3").hide();
        $(".DM").show();
    });

    $(".PM").click(function(){
        $(".PM").hide();
        $(".what-showing4").show();
    });
    $(".what-showing4").click(function(){
        $(".what-showing4").hide();
        $(".PM").show();
    });
});

$(document).ready(function(){
    $("#work4").mouseenter(function(){
        $("#work4").show("work4");
    });
});
