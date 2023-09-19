<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  // Trying to make the map focus on one city:
  props: {
    travelData: Array,
    zoom: {
      required: false,
      type: Number,
      default: 4.5
    },
    center: {
      required: false,
      type: Array,
      default() {
        return [12.390828, 43.110717]
      }
    }
  },
  data() {
    return {
      map: null
    }
  },
  async mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFydGluLWJpYW5jbyIsImEiOiJjbGp2NDdlOG4xY3FiM2psbG0zMjZnOTY3In0.lGTYBbEfzfoLG_a1aHl5Zg' // Replace with your Mapbox access token
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom
    })
  },
  watch: {
    travelData() {
      console.log(this.travelData)
      this.addMarkersToMap(this.map)
    },
    center() {
      this.map.flyTo({
        center: this.center
      })
    }
  },
  methods: {
    addMarkersToMap(map) {
      console.log(this.travelData)
      this.travelData.forEach((entry) => {
        const marker = new mapboxgl.Marker().setLngLat([entry.longitude, entry.latitude]).addTo(map)

        // Create a link to the city page using its ID
        const cityLink = `<a id="cityLink" href="/post/${entry.id}">${entry.city}</a>`

        const popupContent = `

            <div id="popupContainer">
              <h3>${cityLink}</h3>
              <div>Date:<br>${entry.date}</div>
              <div id=author>
              <p>Author:<br>${entry.author}</p>
              <img id="headShot" src="${entry.authorpic}" alt="Author image">
</div>

            </div>

        `
        const popup = new mapboxgl.Popup().setHTML(popupContent)
        marker.setPopup(popup)
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
  background-color: rgba(255, 255, 255, 0.8);
  width: 250px;
  border-radius: 10px;
}

.mapboxgl-popup-content h3 {
  background-color: rgba(0, 0, 0, 0.5);
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

#map {
  width: 100%;
  height: 550px;
  border-radius: 10px;
}

#popupContainer h3 {
  font-size: 20px;
}
#author {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#headShot {
  width: 45px !important;
  height: 45px !important;
  border-radius: 50%;
  text-align: left;
  filter: grayscale(100%);
}
div {
  font-size: 16px;
}
</style>
