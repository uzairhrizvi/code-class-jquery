$(document).ready(function(){
	console.log('got to document ready');
	$('.button').click(function(){

		// when i click the button, i will test each circle in order
		// to see what class they have
		// if it has class big-green, i will remove the class big-green and add the class small-red
		// otherwise, i will remove the class small-red and add big-green
 
    $('.circle').each(function(){
    	if ( $(this).hasClass('big-green')){
    		$(this).removeClass('big-green').addClass('small-red');
    	} else {
    		$(this).removeClass('small-red').addClass('big-green');
    	}
    });
        // var backgroundColor = $('.circle').css('background-color');
        // console.log(backgroundColor)
        // if (backgroundColor == 'rgb(255, 0, 0)') {
        // 	$('.circle').css('background', 'steelblue');

        // } else {
        // 	$('.circle').css('background', 'red');

        // }

		
	});
});