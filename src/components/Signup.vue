<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1 class="font-weight-thin">Signup</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            v-model="username"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>

          <v-text-field label="E-mail" v-model="email" :rules="emailRules" prepend-icon="mdi-email"></v-text-field>

          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="signup">Signup</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from '../services/Api'

export default {
  data () {
    return {
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 10 || 'Password must be more than 10 characters'
      ],
      username: '',
      userRules: [v => !!v || 'Username is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    signup () {
      const newUser = {
        user_name: this.username,
        user_email: this.email,
        user_password: this.userPassword
      }

      Api.signup(newUser)
        .then(response => {
          localStorage.setItem('token', response.token)
          this.$router.push('/notes')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped></style>
