<template>
  <LogoSection />

  <v-container>
    <v-row align="center" justify="center">
      <!-- Season 1 -->
      <v-card
        v-if="seasonNumber === 1"
        flat
        height="750"
        style="margin-top: -100px"
        width="750"
      >
        <v-col class="d-flex justify-center">
          <h2>Season 1 - 4LIFE</h2>
        </v-col>
        <v-col class="d-flex justify-center" style="position: relative;">
          <v-carousel height="750" hide-delimiters show-arrows>
            <!-- Custom navigation buttons -->
            <template #prev="{ props }">
              <v-btn
                color="white"
                flat
                icon
                style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <template #next="{ props }">
              <v-btn

                color="white"
                flat
                icon
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>

            <v-carousel-item v-for="(image, index) in season1Images" :key="index">
              <v-img height="750" :src="image" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-card>
    </v-row>
  </v-container>

  <!-- Season 2 -->
  <v-container>
    <v-row align="center" justify="center">
      <v-card v-if="seasonNumber === 2" flat height="750" width="1000">
        <v-col class="d-flex justify-center">
          <h2>Season 2 - SKULLS</h2>
        </v-col>
        <v-col class="d-flex justify-center" style="position: relative;">
          <v-carousel height="750" hide-delimiters show-arrows>
            <template #prev="{ props }">
              <v-btn
                color="white"
                flat
                icon
                style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <template #next="{ props }">
              <v-btn
                color="white"
                flat
                icon
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>

            <v-carousel-item v-for="(image, index) in season2Images" :key="index">
              <v-img height="750" :src="image" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-card>
    </v-row>
  </v-container>

  <!-- Season 3 -->
  <v-container>
    <v-row align="center" justify="center">
      <v-card v-if="seasonNumber === 3" flat height="750" width="1000">
        <v-col class="d-flex justify-center">
          <h2>Season 3 - SOCIA</h2>
        </v-col>
        <v-col class="d-flex justify-center" style="position: relative;">
          <v-carousel height="750" hide-delimiters show-arrows>
            <template #prev="{ props }">
              <v-btn
                color="white"
                flat
                icon
                style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <template #next="{ props }">
              <v-btn
                color="white"
                flat
                icon
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%)"
                @click="props.onClick"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>

            <v-carousel-item v-for="(image, index) in season3Images" :key="index">
              <v-img height="750" :src="image" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-card>
    </v-row>
  </v-container>

  <NavigationSection />
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue'
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue'

  const route = useRoute()
  const seasonNumber = parseInt(route.params.seasonNumber, 10)

  const season1Images = ['/images/gg.jpg', '/images/rr.jpg']
  const season2Images = ['/images/ioio.jpg', '/images/ll.jpg']
  const season3Images = ['/images/uu.jpg', '/images/joko.jpg']
</script>

<style scoped>
v-card {
  margin-bottom: 20px;
}
</style>
