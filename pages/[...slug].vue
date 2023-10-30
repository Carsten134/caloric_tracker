<script setup>
  definePageMeta({
    middleware: ['auth-redirect'],
    name: 'redirecting...'
  });
</script>

<template>
  <span class="font-mono text-2xl">Redirecting...</span>
</template>