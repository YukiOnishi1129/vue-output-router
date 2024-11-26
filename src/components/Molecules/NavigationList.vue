<script setup>
import NavigationLink from '../Atoms/NavigationLink.vue'
import { NAVIGATION_PATH } from '../../constants/navigation'
</script>

<template>
  <nav>
    <ul className="{styles.ul}">
      <NavigationLink :title="Top" :link-path="NAVIGATION_PATH.TOP" />
      <NavigationLink :title="Create" :link-path="NAVIGATION_PATH.CREATE" />
    </ul>
  </nav>
</template>

<style scoped>
.ul {
  width: 100%;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
}
</style>
