document.body.addEventListener('touchmove', function(event) {
  console.log(event.source);
  //if (event.source == document.body)
    event.preventDefault();
}, false);

window.onresize = function() {
  $(document.body).width(window.innerWidth).height(window.innerHeight);
}

$(function() {
  window.onresize();
});

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