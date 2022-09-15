<script setup>

import InputSelect from "./components/InputSelect.vue";
import {ref} from "vue";
import Button from "./components/Button.vue";

const val = ref('')
const options = ref([
  {body: 'Scoped Slots Guide', username: 'Evan You', likes: 20},
  {body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10}
])

function onChange(value) {
  console.log(value)
}

</script>
<template>
  <div class="flex w-full h-screen bg-white items-center justify-center flex-col">
    <div class="w-2/3 p-3 h-40 ">
      <Button/>
    </div>
    <div class="w-80">
      <span class="text-lg text-cyan-300">input-select: {{ val }}</span>
      <input-select
          :options="options"
          v-model:value="val"
          bind-prop="body"
          @change="onChange">
        <template v-slot="{body, username, links}">
          {{ body }} - {{ username }}
        </template>
      </input-select>
      <div class="h-40 border w-80"></div>
      <input type="text" v-model="val">
    </div>
  </div>
</template>

