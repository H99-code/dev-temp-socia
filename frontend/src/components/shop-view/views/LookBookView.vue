<!-- LookBookView.vue -->
<template>
  <LogoSection />

  <SeasonsSection />

  <NavigationSection />
</template>

<script setup>
// Hier kannst du JavaScript oder andere Logik für LookBook hinzufügen, wenn nötig
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';
  import SeasonsSection from '@/components/shop-view/sections/SeasonsSection.vue';
</script>

<style scoped>

</style>
