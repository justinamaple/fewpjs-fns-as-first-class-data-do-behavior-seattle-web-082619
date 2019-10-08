/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let time = timeString.split(':');
  let hour = parseInt(time[0], 10);

  console.log(hour)
  if(hour < 12)
    return "Good Morning"
  else if(hour > 17)
    return "Good Evening"
  else
    return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(timeString) {
  document.getElementById("greeting").innerText = timeString
}