'use strict'




function save(userData) {
    saveToStorage('userPreferences', userData)
}

function load() {
    return loadFromStorage('userPreferences') || {}
}