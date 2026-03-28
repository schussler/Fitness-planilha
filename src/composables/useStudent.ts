import { reactive } from 'vue'
import type { StudentData } from '@/types/fitness'

// ── State ────────────────────────────────────────────────────────────────────

const state = reactive<{ data: StudentData }>({
  data: {
    name: '',
    age: '',
    weight: '',
    height: '',
    objective: '',
    notes: ''
  }
})

// ── Composable ───────────────────────────────────────────────────────────────

export function useStudent() {
  return {
    student: state.data
  }
}
