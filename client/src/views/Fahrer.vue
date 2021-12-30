<template>
  <v-app>
    <v-main class="background">
      <h1 class="head mt-15 text-center white--text">Fahrer/innen</h1>
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
  data() {
    return {
      fahrer: [],
    };
  },
  created() {
    this.getFahrer();
  },

  components: {
    ShowFahrer,
  },

  methods: {
    async getFahrer() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/fahrer',
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
</style>
