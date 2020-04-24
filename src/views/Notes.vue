<template>
  <div class="notes">
    <Note v-for="(note, idx) in notes" :key="idx" :noteObject="note" v-on:deleteNote="deleteNote" />
  </div>
</template>

<script>
import Api from "../services/Api";
import Note from "../components/NoteCard";

export default {
  name: "Notes",
  data() {
    return {
      notes: []
    };
  },
  components: {
    Note
  },
  created() {
    Api.getAllNotes().then(res => {
      this.notes = res;
    });
  },
  methods: {
    deleteNote(noteId) {
      Api.deleteNote(noteId).then(() => {
        Api.getAllNotes().then(res => {
          this.notes = res;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
