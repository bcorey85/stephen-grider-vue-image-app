<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      <h3>Image Storage</h3>
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <router-link to="#" class="item" @click="logout">Logout</router-link>
      </div>
      <a v-else href="#" class="item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
     