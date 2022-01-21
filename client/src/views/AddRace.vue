<template>
  <v-app>
    <v-main class="background">
      <h1 class="head mt-15 text-center white--text">Rennen hinzufügen</h1>
      <v-container class="d-flex justify-space-around mt-5">
        <v-col class="d-flex justify-center flex-wrap">
          <div>
            <span class="text white--text">Land</span> <br />
            <input
              v-model="rennen.land"
              type="text"
              class="mt-2 input white form-control"
              aria-label="Large"
            />
          </div>
          <div class="mt-15">
            <span class="text white--text">Ort</span> <br />
            <input
              v-model="rennen.ort"
              type="text"
              class="mt-2 input white form-control"
              aria-label="Large"
            />
          </div>
          <div class="mt-15">
            <span class="text white--text">Datum</span> <br />
            <input
              v-model="rennen.datum"
              type="text"
              class="mt-2 input white form-control"
              aria-label="Large"
            />
          </div>
        </v-col>
        <v-col class="d-flex justify-center flex-wrap">
          <div>
            <span class="text white--text">Uhrzeit</span> <br />
            <input
              v-model="rennen.uhrzeit"
              type="text"
              class="mt-2 input white form-control"
              aria-label="Large"
            />
          </div>

          <div class="mt-15 mb-13">
            <span class="text white--text">Geschlecht</span> <br />
            <input
              v-model="rennen.geschlecht"
              type="text"
              class="mt-2 input white form-control"
              aria-label="Large"
            />
          </div>

          <div class="mx-15 mt-15">
            <v-btn @click="postRennen()" class="btn warning">Hinzufügen</v-btn>
          </div>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rennen: {},
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
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-color: #414b6f;
}
.head {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 40px;
}
.text {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 30px;
}
.btn {
  font-family: fredoka one;
  font-weight: 100;
  width: 200px;
}
.input {
  border-radius: 3px;
  width: 300px;
  height: 35px;
  font-family: fredoka one;
  font-weight: 20;
  font-size: 20px;
}
</style>
