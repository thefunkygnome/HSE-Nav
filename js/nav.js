$(document).ready(function(){
    $('#aud').keyup( function() {
        var $this = $(this);
        if($this.val().length > 3)
            $this.val($this.val().substr(0, 3));
    });
     });

function get_value_1() {
  console.log('Поднимись на' + $('#aud').val().substr(0, 1) + 'этаж')
}

function get_value_2() {
  var inputValue = $('#aud').val()
  var valueLenght = inputValue.length

  console.log(inputValue.substr(valueLenght - 1))
  console.log(inputValue.substr(valueLenght - 1) <= 6)

  if (inputValue.substr(valueLenght - 1) <= 6) {
    console.log('Поверни направо')
  } else {
    console.log('Поверни налево')
  }
}

$(function() {
  $('#nav-btn').click(function() {
    get_value_1()
    get_value_2()
    $('#nav-txt-1').text('Поднимись на' + ' '+ $('#aud').val().substr(0, 1) + ' ' + 'этаж')
    var inputValue = $('#aud').val()
    var valueLenght = inputValue.length
    if (inputValue.substr(valueLenght - 1) <= 6) {
      $('#nav-txt-2').text('Поверни направо')
    } else {
      $('#nav-txt-2').text('Поверни налево')
    }

    $('.route').show()
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('#back-nav').show()
    $('.about').hide()
  })
})

$(function(){
  $('#back-nav').click(function() {
    $('.route').hide()
    $('#aud').show()
    $('#nav-btn').show()
    $('#main').show()
    $('#back-nav').hide()
    $('.about').show()
    $('.about-txt-1').hide()
    $('.about-txt-2').hide()
  })
})

$(function() {
  $('.about').click(function() {
    $('.about-txt-1').show()
    $('.about-txt-2').show()
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
    $('#back-nav').show()
    $('.about').hide()
  })
})
