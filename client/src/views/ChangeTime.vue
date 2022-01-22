<template>
  <v-app>
    <v-main class="background">
      <v-container>
        <v-row>
          <v-col>
            <span class="text white--text"
              >Rennen auf
              <input v-model="newTime" type="text" class="mt-2 input white form-control" />
              verschieben oder vorziehen</span
            >
            <v-btn @click="changeTime(rid)" class="btn warning">Enter</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    rid: {
      type: String,
    },
  },
  data() {
    return {
      newTime: '',
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
        this.$router.push('/');
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
.text {
  font-family: fredoka one;
  font-weight: 100;
  font-size: 30px;
}
.input {
  border-radius: 3px;
  width: 70px;
  height: 40px;
  font-family: fredoka one;
  font-weight: 20;
  font-size: 25px;
}
.btn {
  font-family: fredoka one;
  font-weight: 100;
  width: 100px;
}
</style>
