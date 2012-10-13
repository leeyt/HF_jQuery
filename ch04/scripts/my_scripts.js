$(document).ready(function(){
	var v = false;

	$("#vegOn").click(function() {
		if (v == false) {
			v = true;

			$f = $("li.fish").parent().parent().detach();
			$(".hamburger").replaceWith("<li class='portobello'>Portobello Mushroom</li>");
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
			$m = $(".meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
		}

	});

	$("#restoreMe").click(function() {
		if (v == true) {
			v = false;

			$(".menu_entrees li").first().before($f);
			$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			$(".tofu").each(function(i) {
				$(this).parent().parent().removeClass("veg_leaf");
				$(this).after($m[i]).remove();
			});
		}
	});
});