<template>
  <section class="console-section">
    <pre class="console">
      <span v-if="result?.stdout" class="console-line success">{{result.stdout}}</span>
      <span v-if="result?.stderr" class="console-line error">{{result.stderr}}</span>
    </pre>
  </section>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {EditorKey} from "~/editorContext";

const editor = inject(EditorKey)!;
const result = editor.result;
</script>