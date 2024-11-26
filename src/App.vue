<script setup>
import TodoCreatePage from './pages/TodoCreatePage.vue'
import TodoProvider from './providers/TodoProvider.vue'
</script>

<template>
  <TodoProvider>
    <TodoCreatePage />
  </TodoProvider>
</template>
