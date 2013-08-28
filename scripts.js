$(document).ready(function () {
  $('.youtube').click(function () {
  	$('<div> id=test3').html('<iframe width="250" height="24" align="right" src="//www.youtube.com/embed/Z9IQnDRYIYU?theme=light&autohide=0" frameborder="0" autohide="0" autoplay="1" allowfullscreen></iframe>').appendTo($('#test2').parent());
    $(this).hide();
    $('table.starless').css("width","0");
    $('table.test').css("width","100%");
  });

  $('.artist_score_area a').click(function () {
    if (!$(this).hasClass('bigarrow')) {
      // mark this arrow as clicked
      $(this).closest('.arrows').find('a').removeClass('bigarrow');
    	$(this).addClass('bigarrow');

      // get artist name and new score
      var artistName = $(this).closest('.artbox').attr('id');
      var currentScore = artistData[artistName].score;
      if ($(this).hasClass('uarrow')) {
        var newScore = currentScore + 1;
      } else if ($(this).hasClass('darrow')) {
        var newScore = currentScore - 1;
      }

      // update artist score
      var artistRef = new Firebase('https://musicthingy.firebaseio.com/artists/' + artistName);
      artistRef.update({score: newScore});
    }
  });

  $('.samples .arrows a').click(function () {
    $(this).closest('.arrows').find('a').removeClass('smallarrow');
    $(this).addClass('smallarrow');
  });

  // get all artist scores
  var artistsRef = new Firebase('https://musicthingy.firebaseio.com/artists');
  var artistData;
  artistsRef.on('value', function(snapshot) {
    artistData = snapshot.val();
    $.each(artistData, function (artist, data) {
      $('#' + artist + ' .artist_score').text(data.score);
    });
  });

});
