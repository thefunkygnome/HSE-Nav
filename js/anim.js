function figFloat() {
  $('figure').each(function() {
      $(this).animate({
          top: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*50).toString(),
          left: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*50).toString(),
      }, 3000);

  });
  figFloat()
}

$(function() {
  figFloat()
})
