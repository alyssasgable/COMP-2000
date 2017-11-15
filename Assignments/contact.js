     $(document).ready(function(){
       $(".open").click(function() {
         showpopup();
       });
       $(".reject").click(function() {
         showreject();
       });
       $(".confirm").click(function() {
         showconfirm();
       });
      $(".close").click(function(){
          hidepopup();
       });
       $(".rejectYes").click(function(){
           location.reload();
        });
     });

     function showpopup() {
      $(".popupInner").fadeToggle();
      $(".popupInner").css({"visibility":"visible","display":"block"});
     }

     function showreject() {
      $(".rejectPopup").fadeToggle();
      $(".rejectPopup").css({"visibility":"visible","display":"block"});
     }

     function hidepopup() {
      $(".popupInner").fadeToggle();
      $(".popupInner").css({"visibility":"hidden","display":"none"});
      $(".confirmPopup").css({"visibility":"hidden","display":"none"});
      $(".rejectPopup").css({"visibility":"hidden","display":"none"});
     }

     function showconfirm() {
       $(".confirmPopup").fadeToggle();
       $(".confirmPopup").css({"visibility":"visible","display":"block"});
       $(".popupInner").fadeToggle();
       $(".popupInner").css({"visibility":"hidden","display":"none"});
     }
