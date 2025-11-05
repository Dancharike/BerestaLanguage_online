<template>
  <div class="docs-backdrop" @click.self="emit('close')">
    <div class="docs-window">
      <header>
        <h2>Documentation</h2>

        <div class="docs-controls">
          <select v-model="lang" @change="loadIndex">
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
          <button class="close-btn" @click="emit('close')">×</button>
        </div>
      </header>

      <div class="docs-body">
        <aside class="docs-sidebar">
          <template v-for="(category, key) in docs" :key="key">
            <h3>{{category.title}}</h3>
            <ul>
              <li
                  v-for="file in category.files"
                  :key="file.path"
                  @click="loadFile(file.path)"
                  :class="{ active: current_path === file.path }"
              >
                {{file.title}}
              </li>
            </ul>
          </template>
        </aside>

        <main class="docs-content" v-html="html"></main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {marked} from "marked";

const emit = defineEmits<{(e: "close"): void;}>();

const docs = ref<any>(null);
const html = ref("<p>Select an article from the sidebar.</p>");
const lang = ref("en");
const current_path = ref<string | null>(null);

async function loadIndex()
{
  try
  {
    const res = await fetch(`/documentation/${lang.value}/index.json`);
    docs.value = await res.json();
    html.value = "<p>Select an article from the sidebar.</p>";
    current_path.value = null;
  }
  catch(err)
  {
    html.value = `<p style='color:red'>Failed to load documentation index.</p>`;
  }
}

async function loadFile(path: string)
{
  try
  {
    current_path.value = path;
    const res = await fetch("/" + path);
    const text = await res.text();
    html.value = marked(text);
  }
  catch(err)
  {
    html.value = `<p style='color:red'>Failed to load file: ${path}</p>`;
  }
}

onMounted(loadIndex);
</script>