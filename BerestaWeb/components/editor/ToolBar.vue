<template>
  <header class="ide-header">
    <h1>BerestaLanguage Online Editor</h1>
  </header>

  <header class="ide-header1">
    <button @click="emit('run')" class="run-btn">▶ Run</button>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{(e: "run"): void}>();
</script>