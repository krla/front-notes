<template>
  <div id="card">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-text v-html="noteObject.texto">{{noteObject.texto}}</v-card-text>

      <v-card-actions>
        <v-btn text>Editar</v-btn>
        <v-btn text @click="deleteNotes()">Eliminar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from "../services/Api";
export default {
  name: "note",
  props: {
    noteObject: Object
  },
  methods: {
    deleteNotes() {
      Api.deleteNotes().then(() => {})
    }
  }
};
</script>

<style lang="scss" scoped>
#card {
  margin: 10px 15px;
}
</style>