<script setup lang="ts">
// AppHeader – static hero banner with gradient title and subtitle
import { ref } from 'vue'

const props = defineProps<{ title: string }>()
const emit = defineEmits<{ (e: 'update:title', value: string): void }>()

const editing = ref(false)

function startEdit() { editing.value = true }
function finishEdit(e: Event) {
  emit('update:title', (e.target as HTMLInputElement).value)
  editing.value = false
}
</script>

<template>
  <header class="relative overflow-hidden py-12 px-6 text-center">
    <!-- Ambient glow blobs -->
    <div class="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full
                bg-accent-primary/10 blur-3xl" />
    <div class="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full
                bg-accent-secondary/5 blur-2xl" />

    <!-- Logo mark -->
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                bg-gradient-to-br from-accent-primary to-accent-secondary
                shadow-xl shadow-accent-primary/30 mb-5 animate-fade-in">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>

    <!-- Editable title -->
    <div class="animate-slide-up" style="animation-delay: 0.05s">
      <div v-if="editing" class="flex justify-center">
        <input
          :value="props.title"
          @blur="finishEdit"
          @keyup.enter="($event.target as HTMLInputElement).blur()"
          class="input-base text-center text-2xl font-display font-bold max-w-md"
          autofocus
        />
      </div>
      <h1
        v-else
        class="gradient-text font-display font-extrabold text-4xl md:text-5xl cursor-pointer
               hover:opacity-80 transition-opacity"
        title="Clique para editar o título"
        @click="startEdit"
      >{{ props.title }}</h1>
    </div>

    <p class="mt-3 text-slate-400 text-sm tracking-wide animate-slide-up" style="animation-delay: 0.1s">
      Monte seu plano de treino &amp; dieta e exporte em PDF
    </p>

    <!-- Divider -->
    <div class="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-dark-300 to-transparent" />
  </header>
</template>
