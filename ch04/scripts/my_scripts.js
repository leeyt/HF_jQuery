$(document).ready(function(){
	var v = false;

	$("#vegOn").click(function() {
		if (v == false) {
			v = true;
		}
	});

	$("#restoreMe").click(function() {
		if (v == true) {
			v = false;
		}
	});
});