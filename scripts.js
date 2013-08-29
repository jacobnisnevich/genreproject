$(document).ready(function () {
  $('.youtube').click(function () {
    if ($(this).attr('data-url')) {
    	$(this).html('<iframe width="250" height="24" align="right" src="'+$(this).attr('data-url')+'" frameborder="0" autohide="0" autoplay="1" allowfullscreen></iframe>')
          .addClass('expanded');
      $(this).parent().children(':nth-child(2)').addClass('contracted');
    }
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
