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
    $("#work4").hover(function(){
        $("#work4").fadeOut();
        $("#work04").fadeIn();
    });
    $("#work04").hover(function(){
        $("#work04").fadeOut();
        $("#work4").fadeIn();
    });
    $("#work3").hover(function(){
        $("#work3").fadeOut();
        $("#work03").fadeIn();
    });
    $("#work03").hover(function(){
        $("#work03").fadeOut();
        $("#work3").fadeIn();
    });
    $("#work2").hover(function(){
        $("#work2").fadeOut();
        $("#work02").fadeIn();
    });
    $("#work02").hover(function(){
        $("#work02").fadeOut();
        $("#work2").fadeIn();
    });
    $("#work1").hover(function(){
        $("#work1").fadeOut();
        $("#work01").fadeIn();
    });
    $("#work01").hover(function(){
        $("#work01").fadeOut();
        $("#work1").fadeIn();
    });
    
});

$(document).ready(function(){
    $("#work5").hover(function(){
        $("#work5").fadeOut();
        $("#work05").fadeIn();
    });
    $("#work05").hover(function(){
        $("#work05").fadeOut();
        $("#work5").fadeIn();
    });
    $("#work6").hover(function(){
        $("#work6").fadeOut();
        $("#work06").fadeIn();
    });
    $("#work06").hover(function(){
        $("#work06").fadeOut();
        $("#work6").fadeIn();
    });
    $("#work7").hover(function(){
        $("#work7").fadeOut();
        $("#work07").fadeIn();
    });
    $("#work07").hover(function(){
        $("#work07").fadeOut();
        $("#work7").fadeIn();
    });
    $("#work8").hover(function(){
        $("#work8").fadeOut();
        $("#work08").fadeIn();
    });
    $("#work08").hover(function(){
        $("#work08").fadeOut();
        $("#work8").fadeIn();
    });
    
});

function myFunction(work){
var work = document.getElementById("name").value;
if (work !== null){
    alert(work + " we have received your message. Thank you for reaching out to us.")
    };
    return work;
};
