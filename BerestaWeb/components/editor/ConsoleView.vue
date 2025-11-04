<template>
  <section class="console-section">
    <div class="console">
      <template v-if="result">
        <div 
            v-if="result.stdout"
            class="console-line success"
            v-html="formatOutput(result.stdout)">
        </div>
        <div
            v-if="result.stderr"
            class="console-line error"
            v-html="formatOutput(result.stderr)">
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {EditorKey} from "~/editorContext";

const editor = inject(EditorKey)!;
const result = editor.result;

function formatOutput(text: string)
{
  if(!text) {return "";}
  
  return text.replace(/\r\n/g, "\n")
      .replace(/\n/g, "<br>")
      .replace(/^\s+/gm, "");
}
</script>