

$(document).ready(function(){

var winWidth = $(window).width();

var total = $('.images li').length;

var strip = winWidth/35;

	
$('#status').fadeOut();
$('#preloader').delay(350).fadeOut('fast');
$('body').delay(250).css({
	'overflow': 'visible'
	
});

var current = 0;
var m = 0;
var oldm = 0;
var previ = 0;
var prevrandom = 0;
var count = 1;


$(document).mousemove(function(e){	
//		$('#images li img').css("display","block");
	     var pageX = e.pageX;
         var pageY = e.pageY;
	
	    $('#images li img').css("top", pageY+"px");
		$('#images li img').css("left", pageX+"px");
	
		var y = e.pageY;
		var y_ = Math.floor(y/strip);
		
		var x = e.pageX;
		var x_ = Math.floor(x/strip);
		
		if(y_ !== previ || x_ !== prevx  ){
			if(count === total - 1){
				count = 0;
			} else {count += 1;
			//	$('.images li:eq(' + count + ') img');
				$('.images li').hide();
			//	$('.images li').eq(count).show();
				   $('.images li').eq(count).css("display","block");
				   }
		}
		
		prevx = x_;
		previ = y_;

	});
	


});
