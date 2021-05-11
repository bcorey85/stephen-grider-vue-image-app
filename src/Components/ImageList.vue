<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link" :key="image.link" />
    </div>
    <div v-else>
      <h2>Please log in to view your images.</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"])
  },
  methods: {
    ...mapActions(["fetchImages"])
  },
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>