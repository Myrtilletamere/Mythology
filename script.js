$( document ).ready(function() {


$('.god').click( function() {
	var target = $(this).children(".description");
	if ( target .css ("display") == "none") {
		target .css ("display", "block");
	}
	else {
		target .css ("display", "none");
	}
	

});
});