$(function () {
  // Get our save button id's and when clicked, assign the corresponding text areas value to local storage
  $('#save-btn1').click(function (e) {
    localStorage.setItem('9AM', $('#1').val())
  })
  $('#save-btn2').click(function (e) {
    localStorage.setItem('10AM', $('#2').val())
  })
  $('#save-btn3').click(function (e) {
    localStorage.setItem('11AM', $('#3').val())
  })
  $('#save-btn4').click(function (e) {
    localStorage.setItem('12PM', $('#4').val())
  })
  $('#save-btn5').click(function (e) {
    localStorage.setItem('1PM', $('#5').val())
  })
  $('#save-btn6').click(function (e) {
    localStorage.setItem('2PM', $('#6').val())
  })
  $('#save-btn7').click(function (e) {
    localStorage.setItem('3PM', $('#7').val())
  })
  $('#save-btn8').click(function (e) {
    localStorage.setItem('4PM', $('#8').val())
  })
  $('#save-btn9').click(function (e) {
    localStorage.setItem('5PM', $('#9').val())
  })

  // Get our saved text area data and display it if it's there
  $('#1').text(localStorage.getItem('9AM'))
  $('#2').text(localStorage.getItem('10AM'))
  $('#3').text(localStorage.getItem('11AM'))
  $('#4').text(localStorage.getItem('12PM'))
  $('#5').text(localStorage.getItem('1PM'))
  $('#6').text(localStorage.getItem('2PM'))
  $('#7').text(localStorage.getItem('3PM'))
  $('#8').text(localStorage.getItem('4PM'))
  $('#9').text(localStorage.getItem('5PM'))

  // Assign the inner text of current day with the formatted date
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

  // Get current hour in 24 hour format
  const currentHour = new Date().getHours()

  // Using .each() with jQuery, we can latch on to all .time-blocks and use the dom api to conditionally add the classes.
  $('.time-block').each(function () {
    if ($(this)[0].dataset.value < currentHour) {
      this.classList.add('past')
    } else if ($(this)[0].dataset.value == currentHour) {
      this.classList.add('present')
    } else {
      this.classList.add('future')
    }
  })
})
