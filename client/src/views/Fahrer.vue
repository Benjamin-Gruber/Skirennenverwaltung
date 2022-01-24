<template>
  <v-app>
    <v-main class="background">
      <h1 class="head mt-15 text-center white--text">Fahrer/Innen</h1>
      <v-container class="d-flex justify-center">
        <v-btn to="/" class="text mt-5 warning">Zurück zu Home</v-btn>
      </v-container>
      <v-container fluid class="mt-5 d-flex flex-wrap" justify-center>
        <ShowFahrer class="my-10 mx-10" :f="f" v-for="f of fahrer" :key="f" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import ShowFahrer from '@/components/ShowFahrer.vue';

export default {
  props: {
    rid: {
      type: String,
    },
  },

  data() {
    return {
      fahrer: [],
    };
  },

  created() {
    this.getFahrer(this.rid);
  },

  components: {
    ShowFahrer,
  },

  methods: {
    async getFahrer(rid) {
      try {
        const { data } = await axios({
          url: `http://localhost:3000/fahrer/${rid}`,
          method: 'GET',
        });
        this.fahrer = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 40px;
}
.background {
  background-color: #414b6f;
}
.text {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 15px;
}
</style>
