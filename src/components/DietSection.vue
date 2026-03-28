<script setup lang="ts">
import { useMeals } from '@/composables/useMeals'
import MealBlock from './MealBlock.vue'

const { meals, addMeal } = useMeals()
</script>

<template>
  <section id="dieta-section">
    <!-- Section header -->
    <div class="section-header">
      <div class="section-icon bg-gradient-to-br from-cyan-600 to-cyan-400 glow-cyan">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h2 class="section-title">Dieta</h2>
        <p class="text-slate-500 text-xs mt-0.5">{{ meals.length }} refeição{{ meals.length !== 1 ? 'ões' : '' }}</p>
      </div>
      <div class="ml-auto">
        <span class="badge bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
          Nutrição
        </span>
      </div>
    </div>

    <!-- Meal blocks -->
    <transition-group tag="div" name="block" class="flex flex-col gap-4">
      <MealBlock
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
      />
    </transition-group>

    <!-- Empty state -->
    <div v-if="meals.length === 0"
         class="card-inner p-8 text-center text-slate-500 text-sm border-dashed">
      Nenhuma refeição adicionada. Clique em <strong class="text-slate-400">Adicionar Refeição</strong>.
    </div>

    <!-- Add meal -->
    <button class="btn-secondary mt-4 w-full justify-center py-3" @click="addMeal">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Adicionar Refeição
    </button>
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
