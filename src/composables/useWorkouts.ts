import { reactive } from 'vue'
import type { WorkoutBlock, Exercise } from '@/types/fitness'
import { uid } from '@/utils/uid'

// ── Factories ────────────────────────────────────────────────────────────────

function createExercise(): Exercise {
  return { id: uid(), name: '', sets: '3', reps: '12', weight: '' }
}

function createWorkout(day = ''): WorkoutBlock {
  return {
    id: uid(),
    name: '',
    day,
    exercises: [createExercise()],
  }
}

// ── State ────────────────────────────────────────────────────────────────────

const state = reactive<{ workouts: WorkoutBlock[] }>({
  workouts: [createWorkout('Segunda')],
})

// ── Actions ──────────────────────────────────────────────────────────────────

function addWorkout() {
  state.workouts.push(createWorkout())
}

function removeWorkout(id: string) {
  const idx = state.workouts.findIndex((w: WorkoutBlock) => w.id === id)
  if (idx !== -1) state.workouts.splice(idx, 1)
}

function addExercise(workoutId: string) {
  const workout = state.workouts.find((w: WorkoutBlock) => w.id === workoutId)
  if (workout) workout.exercises.push(createExercise())
}

function removeExercise(workoutId: string, exerciseId: string) {
  const workout = state.workouts.find((w: WorkoutBlock) => w.id === workoutId)
  if (!workout) return
  const idx = workout.exercises.findIndex((e: Exercise) => e.id === exerciseId)
  if (idx !== -1) workout.exercises.splice(idx, 1)
}

// ── Composable ───────────────────────────────────────────────────────────────

export function useWorkouts() {
  return {
    workouts: state.workouts,
    addWorkout,
    removeWorkout,
    addExercise,
    removeExercise,
  }
}
