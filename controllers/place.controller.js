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
    createPlaceByUser()
    addYourLocationButton(gMap)
    
}

function createPlaceByUser(){
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
            <button onclick="onRemovePlace('${place.id}')">Delete</button>
        `
        
        placesList.appendChild(placeItem)
    })
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

function addYourLocationButton(map) {
    const controlDiv = document.createElement('div')
    const firstChild = document.createElement('button')
    firstChild.style.backgroundColor = '#fff'
    firstChild.style.border = 'none'
    firstChild.style.outline = 'none'
    firstChild.style.width = '28px'
    firstChild.style.height = '28px'
    firstChild.style.borderRadius = '2px'
    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)'
    firstChild.style.cursor = 'pointer'
    firstChild.style.marginRight = '10px'
    firstChild.style.marginLeft = '10px'
    firstChild.style.padding = '0'
    firstChild.title = 'Your Location'
    controlDiv.appendChild(firstChild)

    const secondChild = document.createElement('div')
    secondChild.style.margin = '5px'
    secondChild.style.width = '18px'
    secondChild.style.height = '18px'
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)'
    secondChild.style.backgroundSize = '180px 18px'
    secondChild.style.backgroundPosition = '0 0'
    secondChild.style.backgroundRepeat = 'no-repeat'
    firstChild.appendChild(secondChild)

    google.maps.event.addListener(map, 'center_changed', () => {
        secondChild.style['background-position'] = '0 0'
    })

    firstChild.addEventListener('click', () => {
        let imgX = '0'
        const animationInterval = setInterval(() => {
            imgX = imgX === '-18' ? '0' : '-18'
            secondChild.style['background-position'] = `${imgX}px 0`
        }, 500)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                map.setCenter(latlng)
                clearInterval(animationInterval)
                secondChild.style['background-position'] = '-144px 0'
            })
        } else {
            clearInterval(animationInterval)
            secondChild.style['background-position'] = '0 0'
        }
    })

    controlDiv.index = 1
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv)
}