<script setup>
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';
</script>

<template>
  <LogoSection />
  <v-container>
    <v-card class="p-6 space-y-6" flat>


      <v-col class="d-flex justify-start">
        <section>
          <h1 class="text-2xl font-bold mb-4">CONTACT</h1>

          <h2 class="text-xl font-semibold mt-6 mb-2">Information / General Questions</h2>
          <p><b>contact@fakeshop.com</b></p>

          <h2 class="text-xl font-semibold mt-6 mb-2">Orders</h2>
          <p><b>orders@fakeshop.com</b></p>
        </section>
      </v-col>
    </v-card>
  </v-container>
  <NavigationSection />
</template>

<style scoped>
p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
h1,h2 {
  color: #8c96ff;
}
</style>
