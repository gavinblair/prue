document.ontouchstart = function(e){ 
    e.preventDefault(); 
}
document.ontouchmove = function(e){ 
    e.preventDefault(); 
}

$(document).ready(function(){
	setInterval(function(){
		$('#train').attr('data-left', parseInt($('#train').attr('data-left'),10)+100);
		$('#train').css('left', $('#train').attr('data-left')+"px");
	}, 2000);

	$(document).on('keydown click touchend', function(){
		$('#prue').addClass('running');
		$('#prue').attr('data-left', parseInt($('#prue').attr('data-left'),10)+10);
		$('#prue').css('left', $('#prue').attr('data-left')+"px");
		setInterval(function(){
			$('#prue').removeClass('running');
		}, 1000);
	});
});