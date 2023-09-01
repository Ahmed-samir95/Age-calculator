// get elementes
let form = document.getElementsByClassName("form")
let addname = document.getElementById("addname");
let addage = document.getElementById("addage");
let yourAge = document.getElementById("yourAge")
let submitForm = document.getElementById("submit")

// check input
submitForm.onclick = function () {
  if (addage.value === "" || addname.value === "") {
    addage.setAttribute("placeholder", "Please enter your age in years");
    addname.setAttribute("placeholder", "Please enter your name")
  } else{
    yourAge.innerHTML = `Hello ${addName()} your age in days is: ${calckAge()} days` 
  }
}

function calckAge() {
  let result = addage.value * 365
  return result
}

function addName() {
  return addname.value
}
