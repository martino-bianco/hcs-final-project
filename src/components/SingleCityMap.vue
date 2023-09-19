<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  props: {
    selectedCity: Object
  },
  data() {
    return {
      travelData: [],
      markers: []
    }
  },
  async mounted() {
    await this.fetchTravelData()

    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFydGluLWJpYW5jbyIsImEiOiJjbGp2NDdlOG4xY3FiM2psbG0zMjZnOTY3In0.lGTYBbEfzfoLG_a1aHl5Zg' // Replace with your Mapbox access token

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.390828, 43.110717],
      zoom: 4.5
    })

    this.map = map // Store the map instance in a data property
    this.addMarkersToMap(this.map) // Pass the map instance to the method
  },
  methods: {
    async fetchTravelData() {
      try {
        const response = await fetch('/travels.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.travelData = await response.json()
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message)
      }
    },

    addMarkersToMap(map) {
      //   Good bye markers:
      this.markers.forEach((marker) => {
        marker.remove()
      })

      this.travelData.forEach((entry) => {
        if (this.selectedCity && entry.id === this.selectedCity.id) {
          const marker = new mapboxgl.Marker()
            .setLngLat([entry.longitude, entry.latitude])
            .addTo(map)

          // Create a link to the city page using its ID
          const cityLink = `<a id="cityLink" href="/post/${entry.id}">${entry.city}</a>`

          const popupContent = `
              <div id="popupContainer">
                <h3>${cityLink}</h3>
                <p>${entry.date}</p>
                <p>${entry.author}</p>
                <p><a id="cityLinkSmall" href="/post/${entry.id}">${entry.city}</a></p>
              </div>
            `

          const popup = new mapboxgl.Popup().setHTML(popupContent)
          marker.setPopup(popup)
          this.markers.push(marker)
        }
      })
    }
  }
}
</script>

<style>
/* Marker */
.mapboxgl-popup-close-button {
  display: none;
}

.mapboxgl-popup-content {
  padding: 0;
  width: 180px;
}

.mapboxgl-popup-content h3 {
  background: #000000;
  color: #fff;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  margin-top: -15px;
}

.mapboxgl-popup-content h4 {
  margin: 0;
  padding: 10px;
  font-weight: 400;
}

.mapboxgl-popup-content div {
  padding: 10px;
}

#cityLink {
  color: white;
  outline: none;
}
#cityLinkSmall {
  color: black;
  outline: none;
}

#map {
  width: 100%;
  height: 550px;
  border-radius: 10px;
}

#popupContainer {
  background-color: rgb(255, 255, 255);
  width: 300px;
  border-radius: 10px;
}

#popupContainer h3 {
  font-size: 20px;
}
#headShot {
  width: 45px !important;
  height: 45px !important;
  border-radius: 50%;
  text-align: left;
  filter: grayscale(100%);
}
</style>
