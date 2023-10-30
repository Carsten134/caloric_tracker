<script setup>
  // const selected_tab = ref("");
  const userName = ref("Carsten");

</script>
<template>
  <div class="flex p-2 justify-center shadow-xl w-screen">
    <div class="flex justify-between w-5/6">
      <div class="w-5/6">
        <span class="font-mono text-xl text-black">Hello {{ userName }}</span>
      </div>
      <div >
        <button class="border mr-3 p-1 px-2 border-solid rounded-md border-slate-300 font-mono hover:bg-black hover:text-white hover:rounded-full transition-all ease-in-out"
          >Tracking</button>
        <button class="border p-1 px-2 border-solid rounded-md border-slate-300 font-mono hover:bg-black hover:text-white hover:rounded-full transition-all ease-in-out"
          >Progress</button>
      </div>
    </div>
  </div>
</template>