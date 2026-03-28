<script setup lang="ts">
import type { WorkoutBlock } from '@/types/fitness'
import { useWorkouts } from '@/composables/useWorkouts'

const props = defineProps<{ workout: WorkoutBlock }>()
const { addExercise, removeExercise, removeWorkout } = useWorkouts()

const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Livre']
</script>

<template>
  <article class="card p-5 animate-slide-up">
    <!-- Block header -->
    <div class="flex items-start gap-3 mb-4">
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <!-- Workout name -->
        <input
          v-model="props.workout.name"
          placeholder="Nome do Treino (ex: Peito & Tríceps)"
          class="input-base font-semibold"
          :id="`workout-name-${props.workout.id}`"
        />
        <!-- Day selector -->
        <select
          v-model="props.workout.day"
          class="input-base"
          :id="`workout-day-${props.workout.id}`"
        >
          <option value="">Selecione o dia</option>
          <option v-for="d in DAYS" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>

      <!-- Remove block -->
      <button
        class="btn-danger mt-1 shrink-0"
        title="Remover treino"
        @click="removeWorkout(props.workout.id)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- Exercises table header -->
    <div class="grid grid-cols-12 gap-1.5 mb-1.5 px-1">
      <span class="col-span-5 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Exercício</span>
      <span class="col-span-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Séries</span>
      <span class="col-span-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Reps</span>
      <span class="col-span-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Carga</span>
      <span class="col-span-1" />
    </div>

    <!-- Exercise rows -->
    <transition-group
      tag="div"
      name="list"
      class="flex flex-col gap-1.5"
    >
      <div
        v-for="exercise in props.workout.exercises"
        :key="exercise.id"
        class="grid grid-cols-12 gap-1.5 items-center"
      >
        <input
          v-model="exercise.name"
          placeholder="ex: Supino Reto"
          class="input-sm col-span-5"
        />
        <input
          v-model="exercise.sets"
          placeholder="3"
          class="input-sm col-span-2 text-center"
        />
        <input
          v-model="exercise.reps"
          placeholder="12"
          class="input-sm col-span-2 text-center"
        />
        <input
          v-model="exercise.weight"
          placeholder="kg"
          class="input-sm col-span-2 text-center"
        />
        <button
          class="btn-danger col-span-1 justify-center"
          title="Remover exercício"
          @click="removeExercise(props.workout.id, exercise.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition-group>

    <!-- Add exercise -->
    <button
      class="btn-secondary mt-3"
      @click="addExercise(props.workout.id)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Adicionar Exercício
    </button>
  </article>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>
