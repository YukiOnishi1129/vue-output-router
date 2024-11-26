<script setup>
import TodoListTemplate from '../components/Templates/TodoListTemplate.vue'
import TodoProvider from '../providers/TodoProvider.vue'
</script>

<template>
  <TodoProvider>
    <TodoListTemplate />
  </TodoProvider>
</template>
