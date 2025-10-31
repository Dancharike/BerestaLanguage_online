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

          <textarea
              ref="codeEditor"
              v-model="code"
              wrap="off"
              @input="onInput"
              @scroll="syncScroll"
              @click="updateActiveLine"
              @keydown="onKeyDown"
              @keydown.tab.prevent="insertTab"
              class="code-editor"
              placeholder="Write your Beresta code here..."
          ></textarea>
        </div>
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
const activeLine = ref(1);

const codeEditor = ref<HTMLTextAreaElement | null>(null);
const lineNumbers = ref<HTMLElement | null>(null);
const highlightEl = ref<HTMLElement | null>(null);

function syncScroll()
{
  if(lineNumbers.value && codeEditor.value)
  {
    lineNumbers.value.scrollTop = codeEditor.value.scrollTop;
  }
  if(highlightEl.value && codeEditor.value)
  {
    highlightEl.value.scrollTop = codeEditor.value.scrollTop;
  }
}

function onInput()
{
  updateLineCount();
  updateActiveLine();
}

function onKeyDown()
{
  requestAnimationFrame(() =>
  {
    updateActiveLine();
    syncScroll();
  });
}

function updateLineCount()
{
  lineCount.value = code.value.split("\n").length;
}

function updateActiveLine()
{
  if(!codeEditor.value) {return;}
  
  const text = code.value.slice(0, codeEditor.value.selectionStart);
  const lines = text.split(/\r?\n/);
  
  activeLine.value = lines.length;
}

function insertTab()
{
  if(!codeEditor.value) {return;}
  
  const el = codeEditor.value;
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const tab = "\t";
  
  code.value = code.value.substring(0, start) + tab + code.value.substring(end);
  
  requestAnimationFrame(() =>
  {
    el.selectionStart = el.selectionEnd = start + tab.length;
    updateActiveLine();
  });
}

async function runCode()
{
  try           {result.value = await useBerestaApi(code.value);}
  catch(e: any) {result.value = {stdout: "", stderr: e.message, success: false};}
}
</script>
