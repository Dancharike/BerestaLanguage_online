<template>
  <div class="ide-root">
    <Toolbar @run="editor.runCode" />
    
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
  </div>
</template>

<script setup lang="ts">
import {provide} from "vue";
import Toolbar from "~/components/editor/Toolbar.vue";
import CodeEditor from "~/components/editor/CodeEditor.vue";
import ConsoleView from "~/components/editor/ConsoleView.vue";
import {useCodeEditor} from "~/composables/useCodeEditor";
import {useConsole} from "~/composables/useConsole";
import {EditorKey} from "~/editorContext";

const editor = useCodeEditor();
provide(EditorKey, editor);

const {show_console, console_height, editor_height, toggle_console} = useConsole();
</script>
