$(function() {
    function moveAimlessly() {
        $("figure").each(function() {
            $(this).animate({
                top: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*50).toString(),
                left: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*50).toString()
            }, 50000);
        });
    }
    moveAimlessly();
});

$(function() {
  $("figure").hover(function() {
    $(this).css({
      '-webkit-transform': 'rotate('+130+'deg)',
      '-moz-transform': 'rotate('+130+'deg)'
    })
  })
})
