<template>
  <div class="background">

    <LogoSection />
    <WelcomeDialog />
    <!-- Picture Container -->

    <v-container class="picture-container">
      <v-col class="d-flex justify-center">
        <!--<v-img
            src="/images/vvv.png"
            max-width="1300"
            max-height="500"
            cover
        /> -->
      </v-col>
    </v-container>

    <!-- Navigation Links -->
    <v-container class="nav-container">
      <v-row align="center" class="my-4" justify="center">
        <v-col cols="auto">
          <router-link class="router-link" to="/">Home</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link class="router-link" to="/shop">Shop</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link class="router-link" to="/look-book">Lookbook</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link class="router-link" to="/contact">Contact</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link class="router-link" to="/news">News</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link class="router-link" to="/terms">Terms</router-link>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>


  import WelcomeDialog from '@/components/WelcomeDialog.vue';


  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';


  export default {
    components: {
      LogoSection,
      WelcomeDialog,

    },
    data () {
      return {
        activeTab: 0,
        openAddItemDialog: false,
        newItem: { name: '', link: '', type: '', price: '' }
        ,

        selectedItems: [],
        users: [],
        openWelcomeDialog: true,
        drawer: true,
        itemRules: [v => !!v || 'Item Name is required'],
        typeRules: [v => !!v || 'Item Type is required'],
        linkRules: [v => !!v || 'Item Link is required'],
      };
    },

    computed: {
      filteredItems () {
        return this.currentUser?.items ?? [];
      },
      currentUser () {
        return this.users[this.activeTab] ?? { items: [] };
      },
    },

    watch: {
      activeTab () {
        this.fetchItem();
      },
    },
    async mounted () {
      await this.fetchUsers();
      if (this.users.length > 0) {
        this.activeTab = 0;
        await this.fetchItem();
      }
    },

    methods: {
      async fetchUsers () {
        try {
          const response = await fetch('http://localhost:8080/users');
          if (!response.ok) {
            throw new Error('Fehler beim Laden der Benutzer');
          }
          const data = await response.json();
          this.users = data._embedded.users.map(users => ({
            ...users,
            uuid: users._links.self.href.split('/').pop(),
          }));
        } catch (error) {
          console.error('Fehler beim Abrufen der Benutzerdaten:', error);
        }
      },
      async fetchItem () {
        try {
          const currentUser = this.users[this.activeTab];

          if (!currentUser || !currentUser._links || !currentUser._links.items) {
            console.warn('Kein Benutzer ausgewählt oder keine Items-URL vorhanden');
            return;
          }

          const response = await fetch(currentUser._links.items.href);

          console.log('Status der Antwort:', response.status);

          if (!response.ok) throw new Error('Fehler beim Abrufen der Items');

          const data = await response.json();
          console.log('Antwortdaten:', data);

          if (!data._embedded || !data._embedded.items) {
            console.warn('Keine Items vorhanden');
            this.users[this.activeTab].items = [];
            return;
          }

          this.users[this.activeTab].items = data._embedded.items;
        } catch (error) {
          console.error('Fehler beim Abrufen der Items:', error);
          alert('Es gab ein Problem beim Laden der Items. Bitte versuche es später noch einmal.');
        }
      },


      async addItem () {
        try {
          console.log('Aktiver Tab:', this.activeTab);

          const currentUser = this.users[this.activeTab];

          console.log('Aktueller Benutzer:', currentUser);

          if (!currentUser || !currentUser._links || !currentUser._links.items) {
            console.warn('Kein Benutzer ausgewählt oder keine Items-URL vorhanden');
            return;
          }

          const userId = currentUser.uuid;
          if (!userId) {
            console.warn('Keine gültige User ID gefunden');
            return;
          }

          const response = await fetch(`http://localhost:8080/api/${userId}/items`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.newItem.name,
              link: this.newItem.link,
              type: this.newItem.type,
              price: this.newItem.price,
            }),
          });

          console.log('Status der Antwort:', response.status);

          if (!response.ok) throw new Error('Fehler beim Hinzufügen des Items');

          const data = await response.json();
          console.log('Antwortdaten:', data);

          if (data.success && data.item) {
            currentUser.items.push(data.item);


          }

          this.resetNewItem();


          this.openAddItemDialog = false;

        } catch (error) {
          console.error('Fehler beim Hinzufügen des Items:', error);
          alert('Es gab ein Problem beim Hinzufügen des Items. Bitte versuche es später noch einmal.');
        } finally {

          this.openAddItemDialog = false;
        }
      }


      ,


      deleteSelectedItems () {
        const currentUser = this.users[this.activeTab];
        currentUser.items = currentUser.items.filter((_, index) => !this.selectedItems.includes(index));
        this.selectedItems = [];
      },

      buySelectedItems () {
        const currentUser = this.users[this.activeTab];
        currentUser.items.forEach((item, index) => {
          if (this.selectedItems.includes(index)) {
            item.status = 'Bought';
          }
        });
        this.selectedItems = [];
      },

      resetNewItem () {
        this.newItem = { name: '', price: [], link: '', type: '', status: '' };
      },
    },
  }
</script>


<style scoped>
.background {
  min-height: 100vh; /* Ganze Höhe */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ256eTg5ZWpxOXVkMjF1ZWNjcTdseDlyeG04eGRmdzNlcWJ0OWM4NSZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/ySk1ijL6o8FXmSHHsE/giphy.gif');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-container,
.picture-container {
  margin-bottom: -50px; /* Abstand zwischen Logo und Bild */

  .logo-container, .picture-container {
    margin-bottom: 20px;
  }
}
.router-link {
  margin: 0 15px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.router-link:hover {
  color: #fad15a; /* Hover-Farbe */
  transform:scale(1.1); /* Leichte Vergrößerung bei Hover */
}
.nav-container {
  margin-top: 40px; /* Abstand von den Bildern zu den Links */
}
/* Responsivität */
@media (max-width: 768px) {
  .router-link {
    font-size: 1rem;
    margin: 0 8px;

  }
}
</style>
