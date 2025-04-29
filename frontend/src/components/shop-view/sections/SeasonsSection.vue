<script setup>

</script>

<template>

  <v-container>
    <v-row align="center" justify="center">
      <v-card flat width="500">
        <v-card-text>

          <v-col class="d-flex justify-center">
            <h2><router-link class="season-link" to="/season/1">Season 1</router-link></h2>
          </v-col>
          <v-col class="d-flex justify-center">
            <h2><router-link class="season-link" to="/season/2">Season 2</router-link></h2>
          </v-col>
          <v-col class="d-flex justify-center">
            <h2><router-link class="season-link" to="/season/3">Season 3</router-link></h2>
          </v-col>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
.season-link {
  color: #8c96ff;
  text-decoration: none;
}
</style>
