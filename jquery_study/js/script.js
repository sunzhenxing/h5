$(document).ready(function() {
	// show按钮的点击事件
	$("#show").click(function() {
		$("h4").show();
	});
	// hide按钮的点击事件
	$("#hide").click(function() {
		$("h4").hide();
	});
	// toggle按钮的点击事件
	$("#toggle").click(function() {
		$("h4").toggle();
	});
	// fadein按钮的点击事件
	$("#fadein").click(function() {
		$("#fade").fadeIn(1000, fade_callback("fadein"));
	});
	// fadeout按钮的点击事件
	$("#fadeout").click(function() {
		$("#fade").fadeOut(1000, fade_callback("fadeout"));
	});
	
	$("#slidedown").click(function(){
		$("#slide").slideDown();
	});
	
	$("#slideup").click(function(){
		$("#slide").slideUp();
	});
	
	$("#toggle_slide").click(function(){
		$("#slide").slideToggle();
	});
});

function fade_callback(a) {
	console.log("fade is over " + a);
}