const hrDisplay = document.querySelector("#hour")
const minDisplay = document.querySelector("#min")
const secDisplay = document.querySelector("#sec")
const sesDisplay = document.querySelector("#session")

function showTime() {
  const date = new Date()
  let hrs = date.getHours() 
  const mins = date.getMinutes()
  const secs = date.getSeconds()
  const ses = hrs >=12 ? "PM" : "AM"
  // converts to civilian time if necessary
  if (hrs > 12) hrs = hrs - 12
  // hrs = (hrs % 12) || 12
  hrDisplay.innerText = concatZero(hrs)
  minDisplay.innerText = concatZero(mins)
  secDisplay.innerText = concatZero(secs)
  sesDisplay.innerText = ses
}

showTime()
setInterval(showTime, 1000);

function concatZero(data) {
  return data < 10 ? '0' + data : data
}