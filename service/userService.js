'use strict'


const user = {
    email : '',
    txtColor : '',
    bgColor : '',
    Age : '',
    birthDate: '',
    birthTime: ''
}


function save(userData) {
    saveToStorage('userPreferences', userData)
}

function load() {
    return loadFromStorage('userPreferences') || {}
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal
}
