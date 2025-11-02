<template>
  <div class="ide-root">
    <Toolbar @run="editor.runCode" />
    
    <main class="ide-body">
      <CodeEditor />
      <ConsoleView />
    </main>
  </div>
</template>

<script setup lang="ts">
import {provide} from "vue";
import Toolbar from "~/components/editor/Toolbar.vue";
import CodeEditor from "~/components/editor/CodeEditor.vue";
import ConsoleView from "~/components/editor/ConsoleView.vue";
import {useCodeEditor} from "~/composables/useCodeEditor";
import {EditorKey} from "~/editorContext";

const editor = useCodeEditor();
provide(EditorKey, editor);
</script>
