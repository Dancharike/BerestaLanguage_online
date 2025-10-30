<template>
  <div class="ide-root">
    <header class="ide-header">
      <h1>Beresta Online Editor</h1>
      <button @click="runCode" class="run-btn">▶ Run</button>
    </header>

    <main class="ide-body">
      <section class="editor-section">
        <textarea
            v-model="code"
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

async function runCode()
{
  try           {result.value = await useBerestaApi(code.value);}
  catch(e: any) {result.value = {stdout: "", stderr: e.message, success: false};}
}
</script>
