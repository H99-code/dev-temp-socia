<script setup>

</script>

<template>
  <!-- Navigation Links -->
  <v-container class="nav-container">
    <v-row align="center" class="my-4" justify="center">
      <v-col cols="auto">
        <router-link class="router-link" to="/">Home</router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="router-link" to="/shop">Shop</router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="router-link" to="/look-book">Lookbook</router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="router-link" to="/contact">Contact</router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="router-link" to="/news">News</router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="router-link" to="/terms">Terms</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.nav-container {
  margin-top: 40px; /* Abstand von den Bildern zu den Links */
}

.router-link {
  margin: 0 15px;
  text-decoration: none;
  color: #8c96ff;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.router-link:hover {
  color: #fad15a; /* Hover-Farbe */
  transform: scale(1.1); /* Leichte Vergrößerung bei Hover */
}
/* Responsivität */
@media (max-width: 768px) {
  .router-link {
    font-size: 1rem;
    margin: 0 8px;

  }
}
</style>
