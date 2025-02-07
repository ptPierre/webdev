<script lang="ts" setup>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';

const appropriateForm = ref('signup')
</script>

<template>
  <AppHeader />
  <main>
    <header>
      <label for="signup-radio">Sign up</label>
      <input type="radio" v-model="appropriateForm" value="signup" name="formType" id="signup-radio" checked>
      <label for="signin-radio">Sign in</label>
      <input type="radio" v-model="appropriateForm" value="signin" name="formType" id="signin-radio">
    </header>
    <SignUp v-if="appropriateForm === 'signup'" />
    <SignIn v-if="appropriateForm === 'signin'" />
  </main>
</template>
