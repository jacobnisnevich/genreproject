$(document).ready(function () {
  $('.youtube').click(function () {
  	$('<div>').html('<iframe width="300" height="24" src="//www.youtube.com/embed/Z9IQnDRYIYU" frameborder="0" allowfullscreen></iframe>').appendTo($(this).parent());
  });
  $('.uarrow').click(function () {
  	$(this).closest('.arrows').find('a').removeClass('bigarrow');
  	$(this).addClass('bigarrow');
  });
  $('.darrow').click(function () {
  	$(this).addClass('bigarrow');
  });
});