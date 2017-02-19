// $(function() {
//     var timeout;
//     function moveAimlessly() {
//         $("figure").each(function() {
//             $(this).stop().animate({
//                 top: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*41).toString(),
//                 left: Math.floor(Math.random()*2) == 1 ? "+=" + Math.floor(Math.random()*41).toString() : "-=" + Math.floor(Math.random()*41).toString()
//             }, 300);
//         });
//         timeout = setTimeout(moveAimlessly, 0);
//     }
//     moveAimlessly();
// });

$(function() {
  $("figure").hover(function() {
    var rNum = (Math.random()*4)-2;
    $(this).css({
      '-webkit-transform': 'rotate('+rNum+'deg)',
      '-moz-transform': 'rotate('+rNum+'deg)'
    });
  });
})

$(document).ready(function(){
    animateDiv();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $('body').height() - 50;
    var w = $('body').width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('figure').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('figure').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.050;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
