function get_value_1() {
  console.log('Поднимись на' + ' ' + $('#aud').val().substr(0, 1) + ' ' + 'этаж')
}

function get_value_2exp() {
  console.log( $('#aud').val().substr(1, 1) )
  if ($('#aud').val().substr(1, 1) <= 6) {
    console.log('Поверни направо')
  } else {
    console.log('Поверни налево')
  }
}

// function get_value_2() {
//   var inputValue = $('#aud').val()
//   var valueLength = inputValue.length
//
//   console.log(inputValue.substr(valueLength * 0,1))
//   console.log(inputValue.substr(valueLength - 1) <= 6)
//
//   if (inputValue.substr(valueLength - 1) <= 6) {
//     console.log('Поверни направо')
//   } else {
//     console.log('Поверни налево')
//   }
// }

$(function() {
  $('#nav-btn').click(function() {
    get_value_1()
    get_value_2exp()
    $('#nav-txt-1').text('Поднимись на' + ' '+ $('#aud').val().substr(0, 1) + ' ' + 'этаж')

    if ($('#aud').val().substr(1, 1) <= 6) {
      $('#nav-txt-2').text('Поверни направо')
    } else {
      $('#nav-txt-2').text('Поверни налево')
    }

    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('.about').hide()
    $('.hselogo').hide()
    $('.route').show()
    $('#back-nav').show()
  })
})

$(function(){
  $('#back-nav').click(function() {
    $('.route').hide()
    $('#back-nav').hide()
    $('.about-txt-1').hide()
    $('.about-txt-2').hide()
    $('#aud').show()
    $('#nav-btn').show()
    $('#main').show()
    $('.about').show()
    $('.hselogo').show()
  })
})

$(function() {
  $('.about').click(function() {
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('.about').hide()
    $('.about-txt-1').show()
    $('.about-txt-2').show()
    $('#back-nav').show()
  })
})

$(function(event) {
  $("#aud").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#nav-btn").click();
    }
  });
});
