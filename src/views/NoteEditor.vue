<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
		<div>
			<v-btn @click="createNote()">Guardar</v-btn>
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
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  methods: {
    createNote() {
      const newNote = {
        texto: this.editorData
      };
      Api.createNote(newNote).then(() => {
        this.$router.push("/notes");
      });
    }
  }
};
</script>