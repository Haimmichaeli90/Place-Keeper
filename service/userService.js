'use strict'

const userData = {}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal
}

function save(userData) {
    saveToStorage('userPreferences', userData)
}

function load() {
    return loadFromStorage('userPreferences') || {}
}