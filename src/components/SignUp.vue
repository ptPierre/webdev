<template>
  <form id="signup">
    <fieldset>
      <legend class="with-before">Please fill in the form</legend>
      <div>
        <label for="username">username</label>
        <input name="username" type="text" id="username" required>
      </div>
      <div>
        <label for="email">email</label>
        <input name="email" type="email" id="email" required>
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" type="password" id="password" required>
      </div>
      <button type="submit">Sign up</button>
    </fieldset>
  </form>
</template>