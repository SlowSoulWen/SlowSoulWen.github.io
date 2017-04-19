$(document).ready(function() {
	$("img").addClass('lazy');
	$("img.lazy").lazyload({
		 effect : "fadeIn"
	});
});