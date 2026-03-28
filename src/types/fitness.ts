// ── Domain types ──────────────────────────────────────────────────────────────

export interface StudentData {
  name: string
  age: string
  weight: string
  height: string
  objective: string
  notes: string
}

export interface Exercise {
  id: string
  name: string
  sets: string
  reps: string
  weight: string
}

export interface WorkoutBlock {
  id: string
  name: string
  day: string
  exercises: Exercise[]
}

export interface FoodItem {
  id: string
  name: string
  quantity: string
  calories: string
  protein: string
}

export interface MealBlock {
  id: string
  name: string
  time: string
  foods: FoodItem[]
}

export interface FitnessData {
  title: string
  workouts: WorkoutBlock[]
  meals: MealBlock[]
}
