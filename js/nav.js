
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

function route_active(action) {
  if (action == 'show') {
    $('.route').hide()
    $('#back-nav').hide()
    $('.about-txt-1').hide()
    $('.about-txt-2').hide()
    $('#aud').show()
    $('#nav-btn').show()
    $('#main').show()
    $('.about').show()
    $('.hselogo').show()
  } else {
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('.about').hide()
    $('.hselogo').hide()
    $('.route').show()
    $('#back-nav').show()
  }
}

function showNav() {

  var audNum = $('#aud').val()

  console.log(audNum)


  $('input#aud').css({'border-bottom': '3px white solid', 'color': 'white'})
  get_value_1()
  get_value_2exp()
  $('#nav-txt-1').text('Поднимись на' + ' '+ $('#aud').val().substr(0, 1) + ' ' + 'этаж')

  if ($('#aud').val().substr(1, 1) <= 6) {
    $('#nav-txt-2').text('Поверни направо')
  } else {
    $('#nav-txt-2').text('Поверни налево')
  }

  if (audNum == 269) {
    console.log('true')
    $('#p4').show()
    $('#nav-txt-4').show()
    $('#nav-txt-2').text('Поверни налево')
    $('#nav-txt-3').text('Пройди первую лестницу')
    $('#nav-txt-4').text('Нужная аудитория –' + '\n' + 'третья справа')
  } else if (audNum == 560) {
    $('#nav-txt-3').text('Нужная аудитория –' + '\n' + 'прямо по курсу')
    $('#p4').hide()
    $('#nav-txt-4').hide()
  }
  route_active('hide')
  $('.err').hide()
};

function showError() {
  $('input#aud').css({'border-bottom': '3px #F44336 solid', 'color': '#F44336'})
  $('.err').show()
}



$(function() {

  $('#nav-btn').click(function() {
    if ($('#aud').val() >= 101 && $('#aud').val() <= 899) {
      showNav()
    } else {
      showError()
    }
  })

  $('#back-nav').click(function() {
    route_active('show')
  })

  $('.about').click(function() {
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('.about').hide()
    $('.about-txt-1').show()
    $('.about-txt-2').show()
    $('.err').hide()
    $('input#aud').css({'border-bottom': '3px white solid', 'color': 'white'})
    $('#back-nav').show()
  })


  $("#aud").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#nav-btn").click()
    }
  })
})
