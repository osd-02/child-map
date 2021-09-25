<template>
  <v-sheet class="w-1/2 m-auto pb-20 bg-green-50">
    <h1 class="bg-green-50">店舗用データ入力ページ</h1>
    <form method="get" name="form1" class="bg-green-50">
      <v-text-field
        label="登録するお店の名前を入力してください．"
        :rules="rules"
        hide-details="auto"
        v-model="store"
      ></v-text-field>
      <br />
      <v-text-field
        label="登録するお店のurlを入力してください．"
        :rules="rules"
        hide-details="auto"
        v-model="url"
      ></v-text-field>
      <br />
      <v-text-field
        type="number"
        label="現在の受け入れ可能人数を入力してください．"
        :rules="rules"
        hide-details="auto"
        v-model="num"
      ></v-text-field>
      <br />
      <v-btn elevation="2" outlined plain @click="insert">送信</v-btn>
    </form>
  </v-sheet>
</template>

<script>
import store from "@/store/index.js";
export default {
  props: ["sendCoordinate"],
  data() {
    return {
      store: "",
      num: null,
      coordinate: null,
      url: "",
      rules: [value => !!value || "必須項目です．"]
    };
  },
  methods: {
    insert: function() {
      this.$store.commit("insert", { coordinate: this.sendCoordinate, store: this.store, num: this.num, url: this.url });
      this.store = "";
      this.num = null;
      this.url = "";
      this.sendCoordinate = null;
    }
  }
};
</script>
