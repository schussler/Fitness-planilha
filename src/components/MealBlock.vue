<script setup lang="ts">
import type { MealBlock } from '@/types/fitness'
import { useMeals } from '@/composables/useMeals'

const props = defineProps<{ meal: MealBlock }>()
const { addFood, removeFood, removeMeal } = useMeals()
</script>

<template>
  <article class="card p-5 animate-slide-up">
    <!-- Block header -->
    <div class="flex items-start gap-3 mb-4">
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <!-- Meal name -->
        <input
          v-model="props.meal.name"
          placeholder="Nome da Refeição (ex: Almoço)"
          class="input-base font-semibold"
          :id="`meal-name-${props.meal.id}`"
        />
        <!-- Time -->
        <input
          v-model="props.meal.time"
          type="time"
          class="input-base"
          :id="`meal-time-${props.meal.id}`"
        />
      </div>

      <!-- Remove block -->
      <button
        class="btn-danger mt-1 shrink-0"
        title="Remover refeição"
        @click="removeMeal(props.meal.id)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- Foods table header -->
    <div class="grid grid-cols-12 gap-1.5 mb-1.5 px-1">
      <span class="col-span-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Alimento</span>
      <span class="col-span-3 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Quantidade</span>
      <span class="col-span-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">kcal</span>
      <span class="col-span-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Prot.</span>
      <span class="col-span-1" />
    </div>

    <!-- Food rows -->
    <transition-group
      tag="div"
      name="list"
      class="flex flex-col gap-1.5"
    >
      <div
        v-for="food in props.meal.foods"
        :key="food.id"
        class="grid grid-cols-12 gap-1.5 items-center"
      >
        <input
          v-model="food.name"
          placeholder="ex: Arroz"
          class="input-sm col-span-4"
        />
        <input
          v-model="food.quantity"
          placeholder="100g"
          class="input-sm col-span-3 text-center"
        />
        <input
          v-model="food.calories"
          placeholder="0"
          class="input-sm col-span-2 text-center"
        />
        <input
          v-model="food.protein"
          placeholder="0g"
          class="input-sm col-span-2 text-center"
        />
        <button
          class="btn-danger col-span-1 justify-center"
          title="Remover alimento"
          @click="removeFood(props.meal.id, food.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition-group>

    <!-- Add food -->
    <button
      class="btn-secondary mt-3"
      @click="addFood(props.meal.id)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Adicionar Alimento
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
