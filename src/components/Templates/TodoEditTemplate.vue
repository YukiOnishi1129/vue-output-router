<script setup>
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseLayout from '../Organisms/BaseLayout.vue'
import InputForm from '../Atoms/InputForm.vue'
import TextArea from '../Atoms/TextArea.vue'
import CommonButton from '../Atoms/CommonButton.vue'

const router = useRouter()
const route = useRoute()
const todoId = route.params.id

const originTodoList = inject('originTodoList')
const todo = originTodoList.value.find((todo) => String(todo.id) === todoId)

const handleSubmitUpdateTodo = (e) => {
  e.preventDefault()
  const formElements = e.target.elements
  const updatedTodo = {
    id: todo.id,
    title: formElements.title.value,
    content: formElements.content.value
  }
  originTodoList.value = originTodoList.value.map((todo) => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo
    }
    return todo
  })
  router.push('/')
}
</script>

<template>
  <BaseLayout title="Edit Todo" @submit.prevent="handleSubmitUpdateTodo">
    <form class="container">
      <div class="area">
        <InputForm v-model="todo.title" name="title" placeholder="Title" />
      </div>
      <div class="area">
        <TextArea v-model="todo.content" name="content" placeholder="Content" />
      </div>
      <div class="area">
        <CommonButton type="submit" label="Update" />
      </div>
    </form>
  </BaseLayout>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 40px auto;
}

.area {
  margin-top: 40px;
}
</style>
