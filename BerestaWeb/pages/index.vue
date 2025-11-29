<template>
  <div class="ide-root">
    <ToolBar @run="editor.runCode" @toggleDocs="show_docs = !show_docs" />
    
    <main class="ide-body">
      <CodeEditor :style="{height: editor_height + 'px'}" />
      
      <div class="console-bar">
        <button class="console-toggle" @click="toggle_console">
          {{show_console ? '▼ Hide console' : '▲ Show console'}}
        </button>
      </div>

      <transition name="console-slide">
        <section v-show="show_console" class="console-wrapper" :style="{height: console_height + 'px'}">
          <ConsoleView />
        </section>
      </transition>
    </main>
    
    <DocumentationView v-if="show_docs" @close="show_docs = false" />
  </div>
</template>

<script setup lang="ts">
import {provide, ref} from "vue";
import ToolBar from "~/components/editor/ToolBar.vue";
import CodeEditor from "~/components/editor/CodeEditor.vue";
import ConsoleView from "~/components/editor/ConsoleView.vue";
import DocumentationView from "~/components/editor/DocumentationView.vue";
import {useCodeEditor} from "~/composables/useCodeEditor";
import {useConsole} from "~/composables/useConsole";
import {EditorKey} from "~/editorContext";

const editor = useCodeEditor();
provide(EditorKey, editor);

const {show_console, console_height, editor_height, toggle_console} = useConsole();
const show_docs = ref(false);
</script>
