<script setup>
import { inject } from 'vue'
import BaseLayout from '../Organisms/BaseLayout.vue'
import InputForm from '../Atoms/InputForm.vue'
import TextArea from '../Atoms/TextArea.vue'
import CommonButton from '../Atoms/CommonButton.vue'

const handleAddTodo = inject('handleAddTodo')

const handleSubmitAddTodo = (e) => {
  e.preventDefault()
  const formElements = e.target.elements
  handleAddTodo(formElements.title.value, formElements.content.value)
}
</script>

<template>
  <BaseLayout title="Create TODO">
    <form class="container" @submit.prevent="handleSubmitAddTodo">
      <div class="area">
        <InputForm name="title" placeholder="Title" />
      </div>
      <div class="area">
        <TextArea name="content" placeholder="Content" />
      </div>
      <div class="area">
        <CommonButton type="submit" label="Create" />
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
