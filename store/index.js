import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'


export const state= () => ({
  coordinates: [
    {coordinate: [138.540667, 35.650614], num: 15, url: "https://www.yahoo.co.jp/", store: "Yahoo!"}, 
    {coordinate: [139.540667, 35.650614], num: 30, url: "https://www.mapbox.jp/", store: "mapbox"}, 
    {coordinate: [140.540667, 35.650614], num: 1, url: "https://line.me/ja/", store: "LINE"}
  ]
})

export const mutations = {
  insert(state, obj) {
    state.coordinates.unshift({
      coordinate: obj.coordinate,
      num: obj.num,
      url: obj.url,
      store: obj.store
    })
    console.log(state.coordinates)
  }
}