// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Get our ids and store them into variables
  const app = $('#app-container')
  const nine = $('#hour-9')
  const ten = $('#hour-10')
  const eleven = $('#hour-11')
  const twelve = $('#hour-12')
  const one = $('#hour-1')
  const two = $('#hour-2')
  const three = $('#hour-3')
  const four = $('#hour-4')
  const five = $('#hour-5')
  // Get the current hour, whether it's am or pm, and store it
  const currentHour = dayjs().format('hhA')
  // Loop through the app children, then loop through their children, and return the innerText. 9AM, 10AM, etc
  for (let i = 0; i < app[0].children.length; i++) {
    for (let j = 0; j < app[i].children.length; j++) {
      console.log(app[i].children[j].innerText)
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  {
    $('.saveBtn').click(function (e) {
      console.log(e)
    })
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  // Get the current date with day js and format it
  const today = dayjs().format('dddd, MMMM D, YYYY')
  // Grab the id from the page
  const currentDate = $('#currentDay')
  // Assign the inner text of that ID with the formatted date
  currentDate.text(today)
})
