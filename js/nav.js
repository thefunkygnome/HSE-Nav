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
    $('#nav-txt').show()
    $('#aud').hide()
    $('#nav-btn').hide()
    $('#main').hide()
  })
})
