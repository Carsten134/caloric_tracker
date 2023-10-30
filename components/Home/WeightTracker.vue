<script setup>
  import { useAuthStore } from "~/pinia/auth"
  const supabase = useSupabaseClient();
  const authStore = useAuthStore()
  const weight = ref(0);
  const errorMessage = ref("");
  const confirmation = ref(false);

  async function addWeight(){
    if  (weight.value < 0) {
      errorMessage.value = "Negative Gewichte nicht möglich";
    }
    else if (weight) {
      const { data, error } = await supabase.from("body_weight")
      .insert([{
        user_id: authStore.id,
        weight: weight.value
      }]);
      if (error) {
        console.log(error)
      } else {
        confirmation.value = true
      }
    } else {
      errorMessage.value = "Kein Gewicht angegeben!"
    }
  }

</script>

<template>
  <div class="border border-slate-300 rounded-md p-2 h-30" v-if="!confirmation">
    <span class="font-mono text-xl block">Gewichtstracker</span>
    <div>
        <label for="weight" class="pr-3 font-mono">heutiges Gewicht (in Kg)</label>
        <input type="number" name="weight" id="weight" v-model="weight" class="pr-3 border w-14" />
    </div>
    <p v-if="errorMessage" class="font-mono text-red-500">{{ errorMessage }}</p>
    <button class="rounded-md border border-slate-300 hover:bg-black hover:text-white hover:rounded-full transition-all ease-in-out p-1 px-2"
      @click="addWeight">Senden</button>
  </div>
  <div class="border border-slate-400 rounded-full p-3" v-else>
    <span class="font-mono text-xl text-green-400">Erfolgreich Gewicht gepostet!</span>
  </div>
</template>