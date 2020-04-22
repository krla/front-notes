<template>
  <div id="auth">
    <v-row>
      <v-col cols="6">
        <h1 id="title">Welcome to Reboot Wallpapers</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <Login />
      </v-col>
      <v-col cols="3">
        <Signup />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
  #auth{
    text-align: center;
    margin-left: 400px;
  }
</style>
