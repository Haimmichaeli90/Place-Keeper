'use strict'

function getPlaces() {
    return [...places]
}

function removePlace(placeId) {
    const index = places.findIndex(place => place.id === placeId)
    if (index > -1) {
        places.splice(index, 1)
    }
}

function addPlace(name, lat, lng) {
    const id = (Math.random() + 1).toString(36).substring(7)
    const newPlace = _createPlace(name, lat, lng)
    places.push(newPlace)
}

function getPlaceById(placeId) {
    return places.find(place => place.id === placeId)
}



function _createPlace(name, lat, lng) {
    return { id: (Math.random() + 1).toString(36).substring(7), lat, lng, name }
}

function _createPlaces() {
    return [
        _createPlace('Pukis house', 32.1416, 34.831213),
        _createPlace('Another place', 31.1416, 35.831213)
    ]
}
