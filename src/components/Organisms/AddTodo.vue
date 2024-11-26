<script setup>
import { inject } from 'vue'
import InputForm from '../Atoms/InputForm.vue'

defineEmits(['update:addInputValue'])

const addInputValue = inject('addInputValue')
const handleAddTodo = inject('handleAddTodo')
</script>

<template>
  <h2 class="subTitle">
    Add TODO
  </h2>
  <InputForm
    v-model="addInputValue"
    :placeholder="`Please input todo`"
    :on-keydown="handleAddTodo"
  />
</template>

<style scoped>
.subTitle {
  text-align: center;
  color: #fff;
}
</style>
