<script lang="ts" setup>
import { ref } from 'vue'
import BasicInput from './BasicInput.vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <form id="signin">
    <fieldset>
      <legend>Please authenticate</legend>
      <BasicInput label="Username or email" type="text" id="username" />
      <BasicInput label="Password" type="password" id="password" />
    </fieldset>

    <button type="submit">Sign up</button>
  </form>
</template>