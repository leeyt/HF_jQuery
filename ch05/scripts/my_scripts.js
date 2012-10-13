$(document).ready(function() {
	var headclix = 0,
	    eyesclicx = 0,
	    noseclix = 0,
	    mouthclix = 0;

	lightning_one(4000);
	lightning_two(5000);
	lightning_three(7000);

	$("#head").click(function() {
		if (headclix < 9) {
			headclix++;
		} else {
			headclix = 0;
		}
	});

	$("#eyes").click(function() {
		if (eyesclix < 9) {
			eyesclix++;
		} else {
			eyesclix = 0;
		}
	});

	$("#nose").click(function() {
		if (noseclix < 9) {
			noseclix++;
		} else {
			noseclix = 0;
		}
	});

	$("#mouth").click(function() {
		if (mouthclix < 9) {
			mouthclix++;
		} else {
			mouthclix = 0;
		}
	});

});

function lightning_one(t) {
	$("#lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()", t);
}

function lightning_two(t) {
	$("#lightning2").fadeIn(250).fadeOut(250);
	setTimeout("lightning_two()", t);
}

function lightning_three(t) {
	$("#lightning3").fadeIn(250).fadeOut(250);
	setTimeout("lightning_three()", t);
}
