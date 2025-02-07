<script lang="ts" setup>
import { ref } from 'vue'
import BasicInput from './BasicInput.vue'

const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <form id="signup">
    <fieldset>
      <legend class="with-before">Please fill in the form</legend>
      <BasicInput label="Username" type="text" id="username" />
      <BasicInput label="Email" type="email" id="email" />
      <BasicInput label="Password" type="password" id="password" />
    </fieldset>

    <button type="submit">Sign up</button>
  </form>
</template>