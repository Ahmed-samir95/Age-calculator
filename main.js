// get elementes
let form = document.getElementsByClassName("form")
let addage = document.getElementById("addage");
let yourAge = document.getElementById("yourAge")
let submitForm = document.getElementById("submit")

// check input
submitForm.onclick = function () {
  if (addage.value === "") {
    addage.setAttribute("placeholder", "Please enter your age in years")
  } else{
    yourAge.innerHTML = `your age in days is: ${calckAge()}` 
  }
}

function calckAge() {
  let result = addage.value * 365
  return result
}


