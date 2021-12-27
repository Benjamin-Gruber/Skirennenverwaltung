<template>
  <v-app>
    <v-main class="background">
      <h1 class="text mt-15 text-center white--text">Ski Alpin Kalender 2021</h1>
      <v-container class="mt-5">
        <v-btn class="text mt-5 mb-5 warning">Rennen hinzufügen</v-btn>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="rennen"
          show-select
          :items-per-page="6"
          :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
          class="elevation-1"
        ></v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      selected: [],
      rennen: [],
      headers: [
        {
          text: 'Land',
          value: 'land',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Ort',
          value: 'ort',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Datum',
          value: 'datum',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Uhrzeit',
          value: 'uhrzeit',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Geschlecht',
          value: 'geschlecht',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Action',
          value: 'action',
          class: 'blue-grey lighten-5',
        },
      ],
    };
  },

  created () {
    this.getRennen();
  },

  methods: {
    async getRennen() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/rennen',
          method: 'GET',
        });
        this.rennen = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
.background {
  background-color: #414b6f;
}
.text {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 40px;
}
</style>
