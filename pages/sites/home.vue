<script>
  import { useAuthStore } from "~/pinia/auth"
  definePageMeta({
    name: "home",
    middleware: [() => {
      const authStore = useAuthStore();
      if (!authStore.authed) {
        return navigateTo('/sites/login/')
      }
    }]
  })
</script>
<template>
  <div class="w-screen h-screen">
    <HomeNavBar></HomeNavBar>
    <div class="flex justify-center w-5/6">
      <HomeWeightTracker class="mt-5"></HomeWeightTracker>
    </div>
  </div>
  
</template>