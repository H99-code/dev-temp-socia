<template>
  <v-container fill-height>
    <v-row class="d-flex justify-center" :style="{ marginTop: '10vh' }">
      <v-col
        lg="4"
        md="6"
        sm="8"
        class="d-flex justify-center"
        xl="3"
        xs="12"
      >
        <v-card class="gif-background" elevation="10" width="100%">
          <v-form ref="registerForm" v-model="isValid">
            <v-col>
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                variant="solo-filled"
              />

              <v-text-field
                v-model="username"
                label="Username"
                :rules="usernameRules"
                variant="solo-filled"
              />

              <v-text-field
                v-model="password"
                label="Password"
                :rules="passwordRules"
                type="password"
                variant="solo-filled"
              />

              <v-alert v-if="errorMessage" class="mx-4" type="error">
                {{ errorMessage }}
              </v-alert>

              <v-col class="d-flex justify-end">
                <v-btn color="blue" :disabled="!isValid" @click="register">
                  Register
                </v-btn>
              </v-col>
            </v-col>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


  export default {
    name: 'RegistrationPage',
    data () {
      return {
        username: '',
        password: '',
        email: '',
        errorMessage: '',
        isValid: false,
        usernameRules: [
          v => !!v || 'Username is required',
          v => (v && v.length >= 3) || 'Username must be at least 3 characters',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be at least 6 characters',
        ],
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Enter a valid email',
        ],
      };
    },
    methods: {
      async register () {
        this.errorMessage = '';

        const isFormValid = await this.$refs.registerForm.validate();
        if (!isFormValid) {
          this.errorMessage = 'Bitte alle Felder korrekt ausfüllen!';
          return;
        }

        try {
          const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.username,
              email: this.email,
              password: this.password,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registrierung fehlgeschlagen');
          }

          alert('Registrierung erfolgreich!');
          this.$router.push('/home');

        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  }
</script>

<style scoped>
.gif-background {
  background-image: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ256eTg5ZWpxOXVkMjF1ZWNjcTdseDlyeG04eGRmdzNlcWJ0OWM4NSZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/ySk1ijL6o8FXmSHHsE/giphy.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  padding: 20px;
}
</style>
