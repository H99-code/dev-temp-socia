<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function goToItem () {
    router.push('/');
  }
</script>

<template>
  <!-- Logo Container -->
  <v-container class="logo-container">
    <v-col class="d-flex justify-center" style="margin-bottom: 10px; margin-top: -20px ">
      <v-img
        contain

        max-height="250"
        max-width="250"
        src="/images/socia_logo.png"
        @click="goToItem"
      />
    </v-col>
  </v-container>

</template>

<style scoped>
.logo-container,
.picture-container {
  margin-bottom: 10px; /* Abstand zwischen Logo und Bild */

}

/* der doppelte .logo-container Block ist überflüssig - hier korrigiert */
</style>
