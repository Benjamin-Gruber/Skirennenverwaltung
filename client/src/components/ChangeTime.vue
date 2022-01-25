<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" small>mdi-pencil</v-icon>
      </template>
      <v-card>
        <v-card-title class="h3 grey lighten-3" primary-title>Rennen verschieben oder vorziehen</v-card-title>
        <v-card-text>
          <v-form class="px-3 mt-4">
            <v-text-field label="Neue Zeit" v-model="newTime"></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn @click="changeTime(rid)" class="btn warning mx-0 mt-3 text">Save</v-btn>
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
      newTime: '',
      dialog: false,
    };
  },
  methods: {
    async changeTime(rid) {
      try {
        await axios({
          url: `http://localhost:3000/rennen/${rid}`,
          method: 'PATCH',
          contentType: 'application/json',
          data: {
            uhrzeit: this.newTime,
          },
        });
        this.dialog = false;
        this.newTime = '';
        this.$emit('update');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
