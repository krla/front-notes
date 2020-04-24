<template>
  <div id="card">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-text v-html="noteObject.texto">{{noteObject.texto}}</v-card-text>

      <v-card-actions>
        <v-btn :to="`/editor/${noteObject._id}`" text>Editar</v-btn>
        <v-btn text @click="deleteNote()">Eliminar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "note",
  props: {
    noteObject: Object
  },
  methods: {
    deleteNote() {
      this.$emit("deleteNote", this.noteObject._id);
    }
  }
}
</script>

<style lang="scss" scoped>
#card {
  margin: 10px 15px;
}
</style>
