<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <div>
			<v-btn @click="editNote()">Guardar cambios</v-btn>
		</div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Api from "../services/Api";

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    }
  },
  methods: {
    editNote() {
      const newText = { 
        texto: this.editorData
      }
      Api.editNote(this.$route.params.noteId, newText).then(() => {  
        this.$router.push("/notes")
      })
    } 
  },
  mounted() {
    Api.getNoteById(this.$route.params.noteId)
      .then(note => {
        this.editorData = note.texto
      })
  }
}
</script>