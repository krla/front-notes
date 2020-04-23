<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-card-text v-html="noteObject.texto">{{noteObject.texto}}</v-card-text>

        <v-card-actions>
          <v-btn text>Editar</v-btn>
          <v-btn text>Eliminar</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
  export default {
    name: "note",
    props:{
      noteObject: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>