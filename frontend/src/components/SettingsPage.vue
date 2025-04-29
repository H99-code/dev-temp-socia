<script>
  import PagesTopBar from '@/components/PagesTopBar.vue';

  export default {
    components: { PagesTopBar },

    data () {

      return {
        components: PagesTopBar,
        selectedTheme: 'darkmode',
        selectedLanguage: 'englisch',
        themeSettings: ['Light Mode', 'Dark Mode', 'System'],
        languageSettings: ['Deutsch', 'Englisch', 'Französisch'],
      };
    },
    methods: {
      updateTheme () {
        console.log('Theme geändert zu:', this.selectedTheme);

      },
      updateLanguage () {
        console.log('Sprache geändert zu:', this.selectedLanguage);

      },
    },
  };
</script>

<template>
  <PagesTopBar />
  <v-container class="d-flex justify-center">
    <v-card class="pa-4" width="400px">
      <v-list>
        <v-select
          v-model="selectedTheme"
          :items="themeSettings"
          label="Change Theme"
          @update:model-value="updateTheme"
        />

        <v-select

          v-model="selectedLanguage"
          :items="languageSettings"
          label="Change Language"
          @update:model-value="updateLanguage"
        />
      </v-list>
    </v-card>
  </v-container>
</template>
