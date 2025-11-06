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
                  :class="{active: current_path === file.path}"
              >
                {{file.title}}
              </li>
            </ul>
          </template>
        </aside>

        <main ref="contentRef" class="docs-content" v-html="html"></main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useDocumentation} from "~/composables/useDocumentation";

const emit = defineEmits<{(e: "close"): void;}>();
const {docs, html, lang, current_path, loadIndex, loadFile, attachContentElement} = useDocumentation();
const contentRef = ref<HTMLElement | null>(null);

onMounted(() =>
{
  if(contentRef.value)
  {
    attachContentElement(contentRef.value);
  }
  loadIndex();
});
</script>