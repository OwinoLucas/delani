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
        $("#work4").fadeTo("fast", 0.4);
        $("#work04").show();
    });
    $("#work04").hover(function(){
        $("#work04").hide();
        $("#work4").fadeTo("fast", 1);
    });
    $("#work3").hover(function(){
        $("#work3").fadeTo("fast", 0.4);
        $("#work03").show();
    });
    $("#work03").hover(function(){
        $("#work03").hide();
        $("#work3").fadeTo("fast", 1);
    });
    $("#work2").hover(function(){
        $("#work2").fadeTo("fast", 0.4);
        $("#work02").show();
    });
    $("#work02").hover(function(){
        $("#work02").hide();
        $("#work2").fadeTo("fast", 1);
    });
    $("#work1").hover(function(){
        $("#work1").fadeTo("fast", 0.4);
        $("#work01").show();
    });
    $("#work01").hover(function(){
        $("#work01").hide();
        $("#work1").fadeTo("fast", 1);
    });
    
});

$(document).ready(function(){
    $("#work5").hover(function(){
        $("#work5").fadeTo("fast", 0.4);
        $("#work05").show();
    });
    $("#work05").hover(function(){
        $("#work05").hide();
        $("#work5").fadeTo("fast", 1);
    });
    $("#work6").hover(function(){
        $("#work6").fadeTo("fast", 0.4);
        $("#work06").show();
    });
    $("#work06").hover(function(){
        $("#work06").hide();
        $("#work6").fadeTo("fast", 1);
    });
    $("#work7").hover(function(){
        $("#work7").fadeTo("fast", 0.4);
        $("#work07").show();
    });
    $("#work07").hover(function(){
        $("#work07").hide();
        $("#work7").fadeTo("fast", 1);
    });
    $("#work8").hover(function(){
        $("#work8").fadeTo("fast", 0.4);
        $("#work08").show();
    });
    $("#work08").hover(function(){
        $("#work08").hide();
        $("#work8").fadeTo("fast", 1);
    });
    
});

function myFunction(work){
var work = document.getElementById("name").value;
if (work !== null){
    alert(work + " we have received your message. Thank you for reaching out to us.")
    };
    return work;
};
