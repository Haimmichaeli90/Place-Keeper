'use strict'

let gMap = {}


const places = [
    {id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Ramat Sharon'},
    {id: '2p3', lat: 19.969390, lng: -155.843500, name: 'Hawaii'}
]

function onInit() {
    gMap = new google.maps.Map(document.getElementById('map-container'), {
        center: {lat: 29.550360, lng: 34.952278},
        zoom: 14
    })
    renderPlaces()
    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })
    
    
}

function renderPlaces() {
    const placesList = document.getElementById('places-list')
    placesList.innerHTML = ''

    places.forEach(place => {
        const placeItem = document.createElement('div')
        placeItem.classList.add('place-item')

        placeItem.innerHTML = `
            <span>${place.name}</span>
            <button onclick="onPanToPlace('${place.id}')">Show on Map</button>
        `;
        placesList.appendChild(placeItem)
    });
}

function getPlaceById(placeId) {
    return places.find(p => p.id === placeId)
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    if (place) {
        gMap.setCenter({lat: place.lat, lng: place.lng})
        gMap.setZoom(12)
    }
}

function onRemovePlace(placeId) {
   removePlace(placeId)
    renderPlaces()
}



function togglePlacesList() {
    const checkbox = document.getElementById('show-places-list')
    const dialog = document.getElementById('places-dialog')
    if (checkbox.checked) {
        dialog.style.display = 'block'
        renderPlaces()
    } else {
        dialog.style.display = 'none'
    }
}

function closePlacesList() {
    const checkbox = document.getElementById('show-places-list')
    const dialog = document.getElementById('places-dialog')
    dialog.style.display = 'none'
    checkbox.checked = false
}