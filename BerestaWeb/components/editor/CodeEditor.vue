<template>
  <section class="editor-section">
    <div ref="lineNumbers" class="line-numbers">
      <span
          v-for="n in lineCount"
          :key="n"
          :class="{'active-line': n === activeLine}"
      >{{n}}
      </span>
    </div>

    <div class="editor-wrapper">
      <div ref="highlightEl" class="code-highlighter">
        <span
            v-for="(line, idx) in code.split('\n')"
            :key="idx"
            :class="{'active-line-bg': idx + 1 === activeLine}"
        >{{line || ' '}}
        </span>
      </div>

      <div ref="minimapEl" class="minimap" @mousedown="onMinimapMouseDown">
        <pre>{{code}}</pre>
      </div>

      <textarea
          ref="codeEditor"
          v-model="code"
          wrap="off"
          @input="onInput"
          @scroll="syncScroll"
          @click="onClick"
          @keydown="onKeyDown"
          @keyup="onKeyUp"
          @keydown.tab.prevent="insertTab"
          class="code-editor"
          placeholder="Write your Beresta code here..."
      ></textarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {EditorKey} from "~/editorContext";

const editor = inject(EditorKey)!;

const
{
  code, lineCount, activeLine,
  lineNumbers, highlightEl, minimapEl, codeEditor,
  onInput, onKeyDown, onKeyUp, onClick, insertTab,
  onMinimapMouseDown, syncScroll
} = editor;
</script>