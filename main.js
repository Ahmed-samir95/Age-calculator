// get elementes
let form = document.getElementsByClassName("form")
let addname = document.getElementById("addname");
let addage = document.getElementById("addage");
let yourAge = document.getElementById("yourAgeInDays")
let submitForm = document.getElementById("submit")
let showAgedays = document.getElementById("showagedays")
let submitHourss = document.getElementById("submitHourss")
let submitHours = document.getElementById("submitHours")
let showagehours = document.getElementById("showagehours")
let yourAgeInHours = document.getElementById("yourAgeInHours")
console.log(yourAgeInHours);

// check input
submitForm.onclick = function () {
  if (addage.value === "" || addname.value === "") {
    addage.setAttribute("placeholder", "Please enter your age in years");
    addname.setAttribute("placeholder", "Please enter your name")
  } else{
    yourAgeInDays.innerHTML = `Hello ${addName()} your age in days is: ${calckAgeInDays()} days`;
    showAgedays.style.cssText = "display: block" 
    submitHourss.style.cssText = "display: block"
  }
}

function calckAgeInDays() {
  let result = addage.value * 365
  return result
}

function addName() {
  return addname.value
}

submitHours.onclick = function () {
  yourAgeInHours.innerHTML = `Hello ${addName()} your age in Hours is: ${calckAgeInHours()} Hours`;
  showagehours.style.cssText = "display: block"

}

function calckAgeInHours() {
  let Hoursresult = calckAgeInDays() * 24
  return Hoursresult
}









