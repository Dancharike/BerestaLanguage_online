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
import {ref, onMounted, onBeforeUnmount, nextTick} from "vue";
import {useBerestaApi} from "~/composables/useBerestaApi";

const code = ref("");
onMounted(async () =>
{
  const res = await fetch("/main.beresta");
  code.value = await res.text();
  
  await nextTick();
  
  const el = codeEditor.value!;
  el.focus({preventScroll: true});
  el.setSelectionRange(0, 0);
  el.scrollTop = 0;
  
  updateLineCount();
  updateActiveLine();
  syncScroll();
  
  requestAnimationFrame(() =>
  {
    el.dispatchEvent(new Event("input"));
    updateLineCount();
    updateActiveLine();
    syncScroll();
  });
});

const result = ref<any>(null);
const lineCount = ref(1);
const activeLine = ref(1);

const codeEditor = ref<HTMLTextAreaElement | null>(null);
const minimapEl = ref<HTMLElement | null>(null);
const lineNumbers = ref<HTMLElement | null>(null);
const highlightEl = ref<HTMLElement | null>(null);

let is_dragging_minimap = false;

function onMinimapMouseDown(e: MouseEvent)
{
  if(!minimapEl.value || !codeEditor.value) {return;}
  is_dragging_minimap = true;
  scrollToMinimapPosition(e);
  
  window.addEventListener("mousemove", onMinimapMouseMove);
  window.addEventListener("mouseup", onMinimapMouseUp);
}

function onMinimapMouseMove(e: MouseEvent)
{
  if(is_dragging_minimap) {scrollToMinimapPosition(e);}
}

function onMinimapMouseUp()
{
  is_dragging_minimap = false;
  window.removeEventListener("mousemove", onMinimapMouseMove);
  window.removeEventListener("mouseup", onMinimapMouseUp);
}

function scrollToMinimapPosition(e: MouseEvent)
{
  if(!minimapEl.value || !codeEditor.value) {return;}

  const rect = minimapEl.value.getBoundingClientRect();
  const click_y = e.clientY - rect.top;
  const ratio = click_y / rect.height;

  const target_scroll = (codeEditor.value.scrollHeight - codeEditor.value.clientHeight) * ratio;
  codeEditor.value.scrollTop = target_scroll;
  syncScroll();
}

onBeforeUnmount(() =>
{
  window.removeEventListener("mousemove", onMinimapMouseMove);
  window.removeEventListener("mouseup", onMinimapMouseUp);
});

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
  
  if(minimapEl.value && codeEditor.value)
  {
    const ratio = minimapEl.value.scrollHeight / codeEditor.value.scrollHeight;
    minimapEl.value.scrollTop = codeEditor.value.scrollTop * ratio;
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

function onKeyUp()
{
  requestAnimationFrame(() => updateActiveLine());
}

function onClick()
{
  requestAnimationFrame(() => updateActiveLine());
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
  const tab = "    ";
  
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
