<template>
  <div>
    <v-app-bar color="blue darken-1" dense dark>
      <v-toolbar-title>Reboot Notes Editor</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
       <v-btn icon @click="goAuth">
        <v-icon>mdi-location-enter</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goAuth() {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped></style>