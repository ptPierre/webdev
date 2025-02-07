<script lang="ts" setup>
defineProps<{
  id: string
  label: string
  type: string
}>()
</script>


<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id">
  </div>
</template>