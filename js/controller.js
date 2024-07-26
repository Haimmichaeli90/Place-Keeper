'use strict'


function onInit(){
 
}

function onSubmit(event) {
    event.preventDefault()

    userData.email = document.getElementById('email').value
    userData.Age = document.getElementById('age').value
    userData.birthDate = document.getElementById('dob').value
    userData.txtColor = document.getElementById('txtColor').value
    userData.bgColor = document.getElementById('bgColor').value

    save(userData)
    
    document.body.style.backgroundColor = userData.bgColor
    document.body.style.color = userData.txtColor
}