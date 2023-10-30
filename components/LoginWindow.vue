<script setup>
  import { useAuthStore } from '~/pinia/auth';
  const textInput = ref("");
  const loginMessage = ref("");
  const authStore = useAuthStore();

  const Checkpassword = () => {
    if (authStore.tryPassword(textInput.value) == true) {
      navigateTo("/sites/home");
    } else {
      loginMessage.value = "Passwort nicht korrekt";
    }
  }
</script>
<template>
  <div>
    <label for="Ipassword" class="pr-3">Passwort</label>
    <input type="password" id="Ipassword" class="border-solid border-slate-300 border pr-3" v-model="textInput">
    <div class="flex justify-center items-center my-3">
      <button class="border border-solid border-slate-300" @click="Checkpassword">Senden</button>
    </div>
    <div class="flex justify-center items-center">
      <p v-if="loginMessage" class="text-mono text-red-600">{{ loginMessage }}</p>
    </div>
  </div>
</template>~/auth