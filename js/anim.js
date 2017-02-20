function figFloat() {
  var a = Math.random() * 100;

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

// this will be called onload
// jQuery(function($) {
//     $('figure').each(function() {
//         var a = Math.random() * 100;
//         $(this).css('transform', 'rotate(' + a + 'deg)');
//     }, 3000);
// });

//
// $(function() {
//   $("figure").hover(function() {
//     $(this).css({
//       '-webkit-transform': 'rotate('+130+'deg)',
//       '-moz-transform': 'rotate('+130+'deg)'
//     })
//   })
// })
