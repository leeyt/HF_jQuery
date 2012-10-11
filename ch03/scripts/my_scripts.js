$(document).ready(function() {
  $(".guess_box").click( function() {
    var my_num = Math.floor((Math.random()*5) + 5);
    var discount = "<p>Your Discount is " + my_num + "%</p>";
    $(this).append(discount);

    $(".guess_box").each(function() {
      $(this).unbind("click");
    });
  });
});
