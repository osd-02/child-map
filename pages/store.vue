<template>
  <v-sheet class="bg-red-200">
    <h1 class="bg-red-200">店舗用データ入力ページ</h1>
    <form method="get" name="form1" class="bg-red-200">
      <v-text-field
        label="登録するお店の名前を入力してください．"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <br />
      <v-text-field
        label="登録するお店のurlを入力してください．"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <br />
      <v-text-field
        type="number"
        label="現在の受け入れ可能人数を入力してください．"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <br />
      <v-btn elevation="2" outlined plain @click="insert">送信</v-btn>
    </form>
  </v-sheet>
</template>

<script>
import store from '@/store/index.js';
export default {
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
      this.$store.commit("insert", { store: this.store });
      this.$store.commit("insert", { num: this.num });
      this.$store.commit("insert", { url: this.url });
      this.$store.commit("insert", { coordinate: this.coordinate });
      this.store = "";
      this.num = null;
      this.url = "";
      this.coordinate = null;
    }
  }
};
</script>
