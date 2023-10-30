<script>
  import { useAuthStore } from "~/pinia/auth"
  definePageMeta({
    middleware: [() => {
      const authStore = useAuthStore();
      if (!authStore.authed) {
        return navigateTo('/sites/login/')
      }
    }]
  })
</script>
<template>
<span class="font-mono text-2xl">Home</span>
</template>~/auth