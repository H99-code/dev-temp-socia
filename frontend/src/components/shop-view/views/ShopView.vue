<script>
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';

  import ItemPriceSection from '@/components/shop-view/sections/ItemPriceSection.vue';

  export default {
    components: { ItemPriceSection, LogoSection, NavigationSection },
    data () {
      return {
        items: [
          { id: 1, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 2, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 3, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 4, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 5, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 6, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 7, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 8, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
          { id: 9, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE' },
        //{ id: 10, price: "10€", image: "/images/jj.png", name: "SOCIA TEE" }
        ],
      };
    },
    methods: {
      goToItem (item) {
        this.$router.push({ name: 'ShopItemView', params: { id: item.id } });


      },
    },
  }
</script>

<template>
  <!-- Moving Banner -->
  <div class="moving-banner">
    <div class="banner-content">
      <span v-for="n in 10" :key="n">WE ONLY HAVE BLACK TEES SORRY &nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>
  <LogoSection />

  <v-container style="margin-top: -100px">
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        class="d-flex justify-center"
        cols="12"
        md="4"
        sm="4"
      >
        <v-card
          class="custom-card"
          color="white"
          flat
          hover
          max-width="200"
          min-height="100"
          @click="goToItem(item)"
        >
          <v-card color="white" flat height="200">
            <v-img height="500px" :src="item.image" />
          </v-card>
          <v-card color="white" flat>
            <v-card-title class="d-flex justify-center">{{ item.name }}</v-card-title>
            <v-card-subtitle class="d-flex justify-center">{{ item.price }}</v-card-subtitle>
          </v-card>
        </v-card>

      </v-col>
    </v-row>
  </v-container>


  <NavigationSection />

  <ItemPriceSection />

</template>

<style scoped>
.custom-card {

  /* Flexibles Layout mit max-width und flexibler Höhe */
  width: 100%;
  max-width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
}

@keyframes moveBanner {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.moving-banner {
  background-color: #000000;
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.banner-content {
  white-space: nowrap;
  display: inline-block;
  animation: moveBanner 40s linear infinite; /* Geschwindigkeit anpassen */
  font-size: 18px;
  text-align: center;
  color: #8c96ff;
  animation-delay: 0s;
}

/* Media Queries für verschiedene Bildschirmgrößen */

/* Auf großen Bildschirmen (Desktop) */
@media (min-width: 1200px) {
  .custom-card {
    max-width: 250px; /* Größere Karten auf großen Bildschirmen */
  }
}

/* Auf mittleren Bildschirmen (Tablets) */
@media (max-width: 1200px) and (min-width: 600px) {
  .custom-card {
    max-width: 200px; /* Standardgröße für Tablets */
  }
}

/* Auf kleinen Bildschirmen (Mobile) */
@media (max-width: 600px) {
  .custom-card {
    max-width: 100%; /* Karten nehmen 100% der Breite auf Mobilgeräten */
    margin-left: 0;
    margin-top: 10px;
  }
}

</style>
