/* eslint-disable import/no-extraneous-dependencies */
import Vue from "vue";
import { MglPopup, MglMarker, MglMap, MglGeolocateControl } from "vue-mapbox";
import MglGeocoderControl from 'vue-mapbox-geocoder';
import Mapbox from "mapbox-gl";

Vue.component("MglMap", MglMap);
Vue.component("MglGeolocateControl", MglGeolocateControl);
Vue.component("MglPopup", MglPopup);
Vue.component("MglMarker", MglMarker);
Vue.component("MglGeocoderControl", MglGeocoderControl);

Vue.prototype.$mapbox = Mapbox;
