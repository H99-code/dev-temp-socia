<template>
  <LogoSection />

  <v-container class="d-flex justify-center align-start mt-8">
    <v-row class="d-flex justify-center align-center flex-wrap" style="width: 100%;">
      <!-- Bildkarte -->
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-card class="w-100" flat max-width="400">
          <div v-if="selectedItem" class="zoom-container" style="overflow: hidden;">
            <img alt="Produktbild" class="zoom-image" :src="selectedItem.image" style="width: 100%;">
          </div>
        </v-card>
      </v-col>

      <!-- Informationskarte -->
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-card class="w-100" flat max-width="400">
          <div v-if="selectedItem">
            <v-row>
              <v-col>
                <h2 class="custom-item">{{ selectedItem.name }}</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <select v-model="selectedSize" class="custom-select">
                  <option v-for="size in selectedItem.sizes" :key="size" :value="size">{{ size }}</option>
                </select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <section>This Tee is Made Out Of</section>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex">
                <img alt="Produktbild" :src="selectedItem.image" style="width: 100px; margin-right: 10px;">
                <img alt="Produktbild" :src="selectedItem.image" style="width: 100px;">
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Preis: {{ selectedItem.price }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <select v-model="selectedColor" class="custom-select">
                  <option v-for="color in selectedItem.colors" :key="color" :value="color">{{ color }}</option>
                </select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <button class="custom-btn" :disabled="!selectedSize || !selectedColor">
                  ADD TO CART
                </button>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="10">
        <NavigationSection />
        <ItemPriceSection />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import ItemPriceSection from '@/components/shop-view/sections/ItemPriceSection.vue';

  export default {
    components: { ItemPriceSection, NavigationSection, LogoSection },
    props: {
      id: {
        type: [String, Number],
        required: true,
      },
    },
    data () {
      return {
        items: [
          { id: 1, price: '10€', image: '/images/Tee.svg', name: 'SOCIA TEE', sizes: ['S', 'M', 'L'], colors: ['BLACK', 'WHITE'] },
          { id: 2, price: '15€', image: '/images/Tee.svg', name: 'SOCIA HOODIE', sizes: ['M', 'L', 'XL'], colors: ['BLACK', 'WHITE'] },
          { id: 3, price: '20€', image: '/images/Tee.svg', name: 'SOCIA CAP', sizes: ['One Size'], colors: ['BLACK', 'WHITE'] },
        ],
        selectedItem: null,
        selectedSize: 'S',
        selectedColor: null,
      };
    },
    created () {
      this.selectedItem = this.items.find(item => item.id == this.id);
      if (this.selectedItem && this.selectedItem.colors.length > 0) {
        this.selectedColor = this.selectedItem.colors[0];
      }
    },
  };
</script>

<style scoped>
.custom-select {
  width: 100%;
  max-width: 200px;
  height: 40px;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 0px;
  background-color: white;
  transition: border-color 0.3s ease;
}

.custom-select:focus {
  border-color: #3f51b5;
}

.custom-btn {
  background-color: #9f81cf;
  color: white;
  border-radius: 0px;
  padding: 10px 20px;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.custom-btn:hover {
  background-color: #e91e63;
  border-color: #e91e63;
}

@media (max-width: 600px) {
  .custom-select, .custom-btn {
    max-width: 100%;
  }
}

.zoom-image {
  transition: transform 0.9s ease;
  cursor: zoom-in;
}

.zoom-image:hover {
  transform: scale(2.2);
}

.custom-item {
  color: #8c96ff;
  font-size: x-large;
}
</style>
