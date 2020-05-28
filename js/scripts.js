$(document).ready(function(){
    $("#dotext1").hide();
    $("#dotext2").hide();
    $("#dotext3").hide();
    $("#dotext11").hide();
    $("#dotext21").hide();
    $("#dotext31").hide();
    $("#dotext41").hide();
    $("#dotext51").hide();
    $("#dotext61").hide();
    $("#dotext71").hide();
    $("#dotext81").hide();

     $(".imagetoggle0 , .imagetoggle1").click(function(){
       $("#dotext1").toggle();
       $(".imagetoggle0").toggle();
     });
     $(".imagetoggle2 , .imagetoggle3").click(function(){
       $("#dotext2").toggle();
       $(".imagetoggle2").toggle();
     });
     $(".imagetoggle4 , .imagetoggle5").click(function(){
       $("#dotext3").toggle();
       $(".imagetoggle4").toggle();
     });
     $(".imagetoggle10 , .imagetoggle11").hover(function(){
       $("#dotext11").toggle();
       $(".imagetoggle10").toggle();
     });
     $(".imagetoggle20 , .imagetoggle21").hover(function(){
       $("#dotext21").toggle();
       $(".imagetoggle20").toggle();
     });
     $(".imagetoggle30 , .imagetoggle31").hover(function(){
       $("#dotext31").toggle();
       $(".imagetoggle30").toggle();
     });
     $(".imagetoggle40 , .imagetoggle41").hover(function(){
       $("#dotext41").toggle();
       $(".imagetoggle40").toggle();
     });
     $(".imagetoggle50 , .imagetoggle51").hover(function(){
       $("#dotext51").toggle();
       $(".imagetoggle50").toggle();
     });
     $(".imagetoggle60 , .imagetoggle61").hover(function(){
       $("#dotext61").toggle();
       $(".imagetoggle60").toggle();
     });
     $(".imagetoggle70 , .imagetoggle71").hover(function(){
       $("#dotext71").toggle();
       $(".imagetoggle70").toggle();
     });
     $(".imagetoggle80 , .imagetoggle81").hover(function(){
       $("#dotext81").toggle();
       $(".imagetoggle80").toggle();
     });
   });


   $(document).ready(function(){
   $("form").submit(function(){
   alert("Your message has been received");
   });
   });
