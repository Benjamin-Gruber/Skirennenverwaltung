<template>
  <v-app>
    <v-main class="background">
      <h1 class="text mt-15 text-center white--text">Ski Alpin Kalender 2021</h1>
      <v-container class="mt-5">
        <v-btn to="addRace" class="text mt-5 mb-5 warning">Rennen hinzufügen</v-btn>
        <v-card>
          <!-- <v-data-table
            :headers="headers"
            :items="rennen"
            :items-per-page="14"
            :footer-props="{ itemsPerPageOptions: [8, 14, 18] }"
            class="elevation-1"
          >
          </v-data-table>-->
        </v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead class="grey lighten-3">
              <tr>
                <th class="text-left font-weight-black">Land</th>
                <th class="text-left font-weight-black">Ort</th>
                <th class="text-left font-weight-black">Datum</th>
                <th class="text-left font-weight-black">Uhrzeit</th>
                <th class="text-left font-weight-black">Geschlecht</th>
                <th class="text-left font-weight-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in rennen" :key="r.name">
                <td>{{ r.land }}</td>
                <td>{{ r.ort }}</td>
                <td>{{ r.datum.substring(0, 10) }}</td>
                <td>{{ r.uhrzeit.substring(0, 5) }}</td>
                <td>{{ r.geschlecht }}</td>
                <td>
                  <v-btn @click="delRennen(r.rennnummer)" icon><v-icon small>mdi-delete</v-icon></v-btn>
                  <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
                  <v-btn icon><v-icon small>mdi-information</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-btn to="fahrer" class="text mt-5 mb-5 warning">fahrer</v-btn>
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
      rennen: [],
      // headers: [
      //   {
      //     text: 'Land',
      //     value: 'land',
      //     class: 'blue-grey lighten-5',
      //   },
      //   {
      //     text: 'Ort',
      //     value: 'ort',
      //     class: 'blue-grey lighten-5',
      //   },
      //   {
      //     text: 'Datum',
      //     value: 'datum',
      //     class: 'blue-grey lighten-5',
      //   },
      //   {
      //     text: 'Uhrzeit',
      //     value: 'uhrzeit',
      //     class: 'blue-grey lighten-5',
      //   },
      //   {
      //     text: 'Geschlecht',
      //     value: 'geschlecht',
      //     class: 'blue-grey lighten-5',
      //   },
      //   {
      //     text: 'Actions',
      //     value: 'actions',
      //     class: 'blue-grey lighten-5',
      //   },
      // ],
    };
  },

  created() {
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

    async delRennen(rid) {
      try {
        await axios({
          url: `http://localhost:3000/rennen/${rid}`,
          method: 'DELETE',
        });
        this.getRennen();
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
