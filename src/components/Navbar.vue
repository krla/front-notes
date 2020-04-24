<template>
  <div>
    <v-app-bar color="blue darken-1" dense dark>
      <v-toolbar-title>Reboot Notes Editor</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
       <v-btn icon @click="goEditor">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon @click="logOut">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      {{ isToken }}
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/notes");
    },
    logOut() {
      localStorage.clear();
      this.$router.push("/");
    },
    goEditor() {
      this.$router.push("/editor");
    }
  }
}
</script>

<style lang="scss" scoped></style>