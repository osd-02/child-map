<template>
  <v-card flat height="100px" tile fixed class="bg-green-50">
    <v-toolbar class="bg-green-100">
      <v-toolbar-title><img src="~/assets/logo.png" /></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-map-search-outline</v-icon>
      </v-btn>
      <v-btn icon to="/store">
        <v-icon>mdi-cog-transfer-outline</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
