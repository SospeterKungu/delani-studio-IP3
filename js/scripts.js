$(document).ready(function(){
    $("#dotext1").hide();
    $("#dotext2").hide();
    $("#dotext3").hide();
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
   });

   $(document).ready(function(){
   $("form").submit(function(){
   alert("Your message has been received");
   });
   });

   $(document).ready(function() {
       $(".myportfolio").hover(
         function() {
           $(this)
             .find(".overlay")
             .show();
         },
         function() {
           $(this)
             .find(".overlay")
             .hide();
         }
       );
     });
