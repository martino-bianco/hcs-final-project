<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  props: {
    travelData: Array,
    zoom: {
      required: false,
      type: Number,
      default: 4.5
    },
    initialZoom: {
      required: false,
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      map: null,
      initialZoomComplete: false,
      center: [12.948895586334427, 41.966501605840534]
    }
  },

  computed: {
    newestDateCenter() {
      if (this.travelData.length === 0) {
        return this.center
      }

      const newestEntry = this.travelData.reduce((prev, current) => {
        return new Date(current.date) > new Date(prev.date) ? current : prev
      })

      return [newestEntry.longitude, newestEntry.latitude]
    }
  },

  async mounted() {
    mapboxgl.accessToken = import.meta.env.VITE_SOME_KEY

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.newestDateCenter,
      zoom: this.initialZoom || 0
    })

    this.map.on('load', () => {
      if (!this.initialZoomComplete) {
        setTimeout(() => {
          this.map.flyTo({
            center: this.newestDateCenter,
            zoom: this.zoom,
            essential: true,
            duration: 5000
          })
          this.initialZoomComplete = true
        })
      }
    })

    this.addMarkersToMap(this.map)
  },

  watch: {
    travelData() {
      this.addMarkersToMap(this.map)
    }
  },

  methods: {
    addMarkersToMap(map) {
      this.travelData.forEach((entry) => {
        const marker = new mapboxgl.Marker({
          element: this.createCustomMarkerElement(entry.image)
        })
          .setLngLat([entry.longitude, entry.latitude])
          .addTo(map)

        // My popups:
        const cityLink = `<a id="cityLink" href="/post/${entry.id}">${entry.city}</a>`

        const popupContent = `
          <div id="popupContainer">
            <h3>${cityLink}</h3>
            <div>Date:<br>${entry.date}</div>
            <div id="author">
              <p>Author:<br>${entry.author}</p>
              <img id="headShot" src="${entry.authorpic}" alt="Author image">
            </div>
          </div>
        `

        const popup = new mapboxgl.Popup().setHTML(popupContent)
        marker.setPopup(popup)
      })
    },

    // Making custom markers:

    createCustomMarkerElement(imageUrl) {
      const marker = document.createElement('div')
      marker.className = 'custom-marker'
      marker.style.backgroundImage = `url(${imageUrl})`
      marker.style.width = '30px'
      marker.style.height = '30px'
      return marker
    }
  }
}
</script>

<style>
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
  margin-bottom: 20px;
}

.mapboxgl-popup-content div {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

.custom-marker {
  background-size: cover;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
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
</style>
