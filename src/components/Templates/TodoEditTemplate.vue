<script setup>
import { inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseLayout from '../Organisms/BaseLayout.vue'
import InputForm from '../Atoms/InputForm.vue'
import TextArea from '../Atoms/TextArea.vue'
import CommonButton from '../Atoms/CommonButton.vue'

const router = useRouter()
const route = useRoute()
const todoId = route.params.id

const originTodoList = inject('originTodoList')
const handleUpdateTodo = inject('handleUpdateTodo')
const todo = originTodoList.value.find((todo) => String(todo.id) === todoId)

const showTitle = ref(todo?.title || '')
const showContent = ref(todo?.content || '')

const handleSubmitUpdateTodo = (e) => {
  e.preventDefault()
  handleUpdateTodo(todoId, showTitle.value, showContent.value)
  router.push('/')
}
</script>

<template>
  <BaseLayout title="Edit Todo" @submit.prevent="handleSubmitUpdateTodo">
    <form class="container">
      <div class="area">
        <InputForm v-model="showTitle" name="title" placeholder="Title" />
      </div>
      <div class="area">
        <TextArea v-model="showContent" name="content" placeholder="Content" />
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
