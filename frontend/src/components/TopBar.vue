<template>
  <v-app-bar color="white">
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>Web</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/">
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>
