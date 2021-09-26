<template>
  <div class="min-h-screen h-full w-screen bg-green-50">
    <v-sheet class="h-screen w-screen bg-green-50">
    <div class="w-5/6 h-5/6 m-auto shadow-xl">
      <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="defaultCoordinates"
        :zoom="zoom"
      >
        <MglGeocoderControl
          :accessToken="accessToken"
          @results="handleSearch"
        />
        <MglGeolocateControl position="bottom-right" />
        <MglMarker
          v-for="(item, index) in coordinates"
          :key="index"
          :coordinates="item.coordinate"
        >
          <img
            v-if="item.num > 20"
            slot="marker"
            src="~/assets/babyFacePinBlue.svg"
            class="h-16 absolute"
          />
          <img
            v-if="item.num <= 20 && 10 < item.num"
            slot="marker"
            src="~/assets/babyFacePinYellow.svg"
            class="h-16 absolute"
          />
          <img
            v-if="item.num <= 10"
            slot="marker"
            src="~/assets/babyFacePinRed.svg"
            class="h-16 absolute"
          />
          <MglPopup>
            <v-sheet>
              <div>残空き数: {{ item.num }}</div>
              <div>場所名: {{ item.store }}</div>
              <div><a :href="item.url">公式サイト</a></div>
            </v-sheet>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>
    </v-sheet>
    <Store :send-coordinate="this.sendCoordinate" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoicG9ueWFvIiwiYSI6ImNrdHo3bGZpMDA3MzUyb25wbHRlYW8zZjcifQ.zJp2XScgvelBiKISsrs5hQ",
      mapStyle: "mapbox://styles/ponyao/cktznbqp322fe17pcoozkalaj",
      defaultCoordinates: [139.540667, 35.650614],
      zoom: 7,
      defaultInput: "mapbox",
      sendCoordinate: null
    };
  },
  computed: {
    ...mapState(["coordinates"])
  },
  methods: {
    handleSearch(event) {
      if (event.features[0].center !== undefined || null) {
        const lng = event.features[0].center[0]
        const lat = event.features[0].center[1]
        console.log(lng)
        console.log(lat)
        this.sendCoordinate = [lng, lat];
      } else {
        pass
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mapboxgl-ctrl-top-right {
  background-color: red;
}
</style>
