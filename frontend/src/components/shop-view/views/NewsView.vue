<script>


  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';

  export default {
    components: {
      LogoSection,
      NavigationSection,
    },
    data () {
      return {
        newsItems: [
          { date: '20.03', text: 'New season has started! We are proud to present you with fresh new pieces.', image: '/images/vvv.png', title:'New Season Drop !!!! ' },
          { date: '20.03', text: '4LIFE 2 is out and we are the first ever to collaborate with Notstar Games.', image: '/images/ff.png', title:'GET your fit in your favorite game!!!!' },
        ],
      }
    },
  }
</script>

<template>

  <LogoSection />


  <v-container>
    <v-row>
      <v-col v-for="(newItem, index) in newsItems" :key="index" class="d-flex justify-center" cols="12">
        <v-card flat width="1200">
          <h1 class="custom-color" v-text="newItem.title" />
          <h2 v-text="newItem.date" />
          <section v-text="newItem.text" />
          <v-img :src="newItem.image" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <NavigationSection />

</template>

<style scoped>
.custom-color {
  color: #8c96ff;
}
</style>
