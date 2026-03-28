import { reactive } from 'vue'
import type { MealBlock, FoodItem } from '@/types/fitness'
import { uid } from '@/utils/uid'

// ── Factories ────────────────────────────────────────────────────────────────

function createFood(): FoodItem {
  return { id: uid(), name: '', quantity: '', calories: '', protein: '' }
}

function createMeal(name = '', time = ''): MealBlock {
  return {
    id: uid(),
    name,
    time,
    foods: [createFood()],
  }
}

// ── State ────────────────────────────────────────────────────────────────────

const state = reactive<{ meals: MealBlock[] }>({
  meals: [
    createMeal('Café da Manhã', '07:00'),
    createMeal('Almoço', '12:00'),
  ],
})

// ── Actions ──────────────────────────────────────────────────────────────────

function addMeal() {
  state.meals.push(createMeal())
}

function removeMeal(id: string) {
  const idx = state.meals.findIndex((m: MealBlock) => m.id === id)
  if (idx !== -1) state.meals.splice(idx, 1)
}

function addFood(mealId: string) {
  const meal = state.meals.find((m: MealBlock) => m.id === mealId)
  if (meal) meal.foods.push(createFood())
}

function removeFood(mealId: string, foodId: string) {
  const meal = state.meals.find((m: MealBlock) => m.id === mealId)
  if (!meal) return
  const idx = meal.foods.findIndex((f: FoodItem) => f.id === foodId)
  if (idx !== -1) meal.foods.splice(idx, 1)
}

// ── Composable ───────────────────────────────────────────────────────────────

export function useMeals() {
  return {
    meals: state.meals,
    addMeal,
    removeMeal,
    addFood,
    removeFood,
  }
}
