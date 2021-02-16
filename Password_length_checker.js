// <reference path="../typings/globals/jquery/index.d.ts" />
let ps=$("#pswd").val();
$(document).ready(function () {
  $("#pswd").on("keyup", function () {
    let pswd = $(this).val();
    console.log(ps);
    // $('#checker').addClass('strong');
    let strong = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=/()%ยง!@#$%^&*])(?=.{8,})"
      ),
      medium = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
    if (pswd === "") {
      $("#checker p").remove();
      
    } else {
      if (strong.test(pswd)) {
        $("#checker").removeClass();
        //$("#checker").addClass("strong");
        $("#checker").html("<p>&#128519</p>");
      } else if (medium.test(pswd)) {
        $("#checker").removeClass();
        //$("#checker").addClass("medium");
        $("#checker").html("<p>&#128515</p>");
      } else {
        // $("#checker").addClass("low");
        $("#checker").html("<p>&#128543</p>");
      }
    }
  });
  $('#show_hide').click(function () {
      if($('#pswd').attr('type')==='password'){
          $("#pswd").attr("type", "text");
          $('#eye').removeClass('fa-eye');
          $("#eye").addClass("fa-eye-slash");
      }
      else {
        $("#pswd").attr("type", "password");
        $("#eye").removeClass("fa-eye-slash");
        $("#eye").addClass("fa-eye");
      }
  })
});
