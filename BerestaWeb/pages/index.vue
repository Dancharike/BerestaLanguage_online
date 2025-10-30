<template>
  <div class="ide-root">
    <header class="ide-header">
      <h1>Beresta Online Editor</h1>
    </header>
    
    <header class="ide-header1">
      <button @click="runCode" class="run-btn">▶ Run</button>
    </header>
    
    <main class="ide-body">
      <section class="editor-section">
        <div ref="lineNumbers" class="line-numbers">
          <span v-for="n in lineCount" :key="n">{{n}}</span>
        </div>
        <textarea
            ref="codeEditor"
            v-model="code"
            @input="updateLineCount"
            @scroll="syncScroll"
            class="code-editor"
            placeholder="Write your Beresta code here..."
        ></textarea>
      </section>

      <section class="console-section">
        <pre class="console">
          <span v-if="result?.stdout" class="console-line success">{{result.stdout}}</span>
          <span v-if="result?.stderr" class="console-line error">{{result.stderr}}</span>
        </pre>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useBerestaApi} from "~/composables/useBerestaApi";

const code = ref('console_print("Hello from Beresta!");');
const result = ref<any>(null);
const lineCount = ref(1);

const codeEditor = ref<HTMLTextAreaElement | null>(null);
const lineNumbers = ref<HTMLElement | null>(null);

function syncScroll()
{
  if(lineNumbers.value && codeEditor.value)
  {
    lineNumbers.value.scrollTop = codeEditor.value.scrollTop;
  }
}

async function runCode()
{
  try           {result.value = await useBerestaApi(code.value);}
  catch(e: any) {result.value = {stdout: "", stderr: e.message, success: false};}
}

function updateLineCount()
{
  lineCount.value = code.value.split("\n").length;
}
</script>
