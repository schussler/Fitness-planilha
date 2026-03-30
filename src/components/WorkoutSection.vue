<script setup lang="ts">
import { useWorkouts } from '@/composables/useWorkouts'
import WorkoutBlock from './WorkoutBlock.vue'

const { workouts, addWorkout } = useWorkouts()
</script>

<template>
  <section id="treino-section">
    <!-- Section header -->
    <div class="section-header">
      <div class="section-icon bg-gradient-to-br from-violet-600 to-violet-400 glow-violet">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 3M3 18l3-3M21 6l-3 3M21 18l-3-3" />
        </svg>
      </div>
      <div>
        <h2 class="section-title">Treino</h2>
        <p class="text-slate-500 text-xs mt-0.5">{{ workouts.length }} bloco{{ workouts.length !== 1 ? 's' : '' }} de treino</p>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <span class="badge bg-violet-500/15 text-violet-400 border border-violet-500/20">
          Musculação
        </span>
        <button
          class="btn-secondary !py-1 !px-2 sm:hidden"
          title="Adicionar Treino"
          @click="addWorkout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Workout blocks -->
    <transition-group tag="div" name="block" class="flex flex-col gap-4">
      <WorkoutBlock
        v-for="workout in workouts"
        :key="workout.id"
        :workout="workout"
      />
    </transition-group>

    <!-- Empty state -->
    <div v-if="workouts.length === 0"
         class="card-inner p-8 text-center text-slate-500 text-sm border-dashed">
      Nenhum treino adicionado. Clique em <strong class="text-slate-400">Adicionar Treino</strong>.
    </div>

    <!-- Add workout -->
    <div class="mt-6">
      <button class="btn-secondary w-full justify-center py-3.5 shadow-lg shadow-black/10" @click="addWorkout">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Adicionar Treino
      </button>
    </div>
  </section>
</template>

<style scoped>
.block-enter-active,
.block-leave-active {
  transition: all 0.25s ease;
}
.block-enter-from,
.block-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
