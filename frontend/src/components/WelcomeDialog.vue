<template>
  <v-dialog
    v-model="openWelcomeDialog"
    class="custom-dialog-overlay"
    max-width="500px"
  >
    <v-card class="card" elevation="14">
      <v-card-title>Hello there!</v-card-title>
      <v-card-text>This website is a concept store for clothing.</v-card-text>
      <v-card-text>It is currently under development, showcasing my vision for future products.</v-card-text>
      <v-card-text>All images are AI-generated, except for the logo.</v-card-text>
      <v-card-text>The brand name is real, but the items are fictional and not for sale at this time.</v-card-text>


      <v-card-actions>
        <v-btn block color="black" flat @click="openWelcomeDialog = false">Take a Look</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

  export default {
    components: {

    },
    data () {
      return {


        openWelcomeDialog: true,

        drawer: true,

        itemRules: [v => !!v || 'Item Name is required'],
        typeRules: [v => !!v || 'Item Type is required'],
        linkRules: [v => !!v || 'Item Link is required'],
        user1: [
          { item: 'Item 1', price: [10, 30], link: 'https://example.com', type: 'Type 1', status: 'Active' },
        ],
        user2: [
          { item: 'Item 2', price: [40, 60], link: 'https://example.com', type: 'Type 2', status: 'Pending' },
        ],
      };
    },
    computed: {

    },
    methods: {


    },
  }

</script>
<style scoped>
.card {
  background-color: #2582D3;
}

</style>
