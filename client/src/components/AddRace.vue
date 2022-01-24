<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="text mt-5 mb-8 warning">Rennen hinzufügen</v-btn>
      </template>
      <v-card>
        <v-card-title class="h3 grey lighten-3" primary-title>Rennen erstellen</v-card-title>
        <v-card-text>
          <v-form class="px-3 mt-4">
            <v-text-field label="Land" v-model="rennen.land"></v-text-field>
          </v-form>
          <v-form class="px-3 mt-4">
            <v-text-field label="Ort" v-model="rennen.ort"></v-text-field>
          </v-form>
          <v-form class="px-3 mt-4">
            <v-text-field label="Datum" v-model="rennen.datum"></v-text-field>
          </v-form>
          <v-form class="px-3 mt-4">
            <v-text-field label="Uhrzeit" v-model="rennen.uhrzeit"></v-text-field>
          </v-form>
          <v-form class="mt-4 px-3">
            <v-text-field label="Geschlecht" v-model="rennen.geschlecht"></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn @click="postRennen()" class="btn warning mx-0 mt-3 text">Enter</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    rid: {
      type: Number,
    },
  },
  data() {
    return {
      rennen: {},
      dialog: false,
    };
  },
  methods: {
    async postRennen() {
      try {
        await axios({
          url: 'http://localhost:3000/rennen',
          method: 'POST',
          data: this.rennen,
        });
        this.dialog = false;
        (this.rennen = {}), this.$emit('update');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
