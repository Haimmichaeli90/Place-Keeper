'use strict'

const places = loadPlaces()

function addPlace(place) {
    places.push(place)
    savePlaces()
}

function removePlace(placeId) {
    const placeIndex = places.findIndex(place => place.id === placeId)
    if (placeIndex > -1) {
        places.splice(placeIndex, 1)
        savePlaces()
    }
}

function getPlaces() {
    return places
}

function loadPlaces() {
    return loadFromStorage('places') || []
}

function savePlaces() {
    saveToStorage('places', places)
}

function createPlace(id, lat, lng, name) {
    return { id, lat, lng, name }
}

