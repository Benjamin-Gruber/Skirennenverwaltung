<template>
  <div>
    <v-card max-width="344" class="mx-auto" color="#FFEFA1">
      <v-img :src="f.image" width="320"></v-img>
      <v-card-title>{{ f.name }}</v-card-title>
      <v-card-text>
        Geburtstag: <span class="font-weight-black">{{ f.geburtstag }} </span> <br />
        Nationalität: <span class="font-weight-black">{{ f.nationalität }}</span> <br />
        Größe: <span class="font-weight-black">{{ f.größe }}</span> <br />
        Gewicht: <span class="font-weight-black">{{ f.gewicht }}</span> <br />
        Geschlecht: <span class="font-weight-black">{{ f.geschlecht }}</span> <br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    f: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: fredoka one;
  font-weight: 100;
}
</style>
