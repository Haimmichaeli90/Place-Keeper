'use strict'

const userData = {}

function onInit(){
 
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal
}

function onSubmit(event) {
    event.preventDefault()

    userData.email = document.getElementById('email').value
    userData.Age = document.getElementById('age').value
    userData.birthDate = document.getElementById('dob').value
    userData.gender = document.getElementById('gender').value
    userData.txtColor = document.getElementById('txtColor').value
    userData.bgColor = document.getElementById('bgColor').value

    saveToStorage('userPreferences', userData)
    
    document.body.style.backgroundColor = userData.bgColor
    document.body.style.color = userData.txtColor
    
    
}

