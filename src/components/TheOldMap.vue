<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  data() {
    return {
      travelData: []
    }
  },
  async mounted() {
    await this.fetchTravelData()

    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFydGluLWJpYW5jbyIsImEiOiJjbGp2NDdlOG4xY3FiM2psbG0zMjZnOTY3In0.lGTYBbEfzfoLG_a1aHl5Zg' // Replace with your Mapbox access token

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.390828, 43.110717], // Initial map center
      zoom: 4.5
    })

    this.addMarkersToMap(map)

    // Define marker coordinates and popup content
    const markerData = [
      {
        coordinates: [16.871872, 41.117142], // Longitude and latitude of the marker's location
        popupContent:
          '<div id="popupContainer"><h3>Bari</h3><p>2022-07-01</p><p>Martino Bianco</p><p></p></div>'
      },
      {
        coordinates: [14.26812, 40.851799], // Longitude and lati  tude of another location
        popupContent:
          '<div id="popupContainer"><h3>Napoli</h3><p>2022-07-01</p><p>Martino Bianco</p><p>LINK</p></div>'
      },
      {
        coordinates: [12.496365, 41.902782], // Longitude and latitude of the marker's location
        popupContent:
          '<div id="popupContainer"><h3>Rome</h3><p>2022-07-01</p><p>Martino Bianco</p><p>LINK</p></div>'
      },
      {
        coordinates: [11.255814, 43.769562], // Longitude and latitude of the marker's location
        popupContent:
          '<div id="popupContainer"><h3>Florence</h3><p>2022-07-01</p><p>Martino Bianco</p><p>LINK</p></div>'
      },
      {
        coordinates: [9.33228, 46.153381], // Longitude and latitude of the marker's location
        popupContent:
          '<div id="popupContainer"><h3>Domaso</h3><p>2022-07-01</p><p>Martino Bianco</p><p>LINK</p></div>'
      }

      // Add more marker data as needed
    ]

    // Add markers and popups based on the markerData array
    markerData.forEach((data) => {
      const marker = new mapboxgl.Marker().setLngLat(data.coordinates).addTo(map)

      const popup = new mapboxgl.Popup().setHTML(data.popupContent)

      marker.setPopup(popup)
    })
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
