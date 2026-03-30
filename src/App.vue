<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import StudentSection from './components/StudentSection.vue'
import WorkoutSection from './components/WorkoutSection.vue'
import DietSection from './components/DietSection.vue'
import PdfPreview from './components/PdfPreview.vue'
import { useExport } from './composables/useExport'
import { useWorkouts } from './composables/useWorkouts'
import { useMeals } from './composables/useMeals'
import { useStudent } from './composables/useStudent'

const planTitle = ref('Minha Planilha Fitness')
const { isExporting, exportToPDF } = useExport()
const { workouts } = useWorkouts()
const { meals } = useMeals()
const { student } = useStudent()

const activeTab = ref<'aluno' | 'treino' | 'dieta'>('aluno')

function handleExport() {
  const dateStr = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')
  const studentName = student.name ? student.name.trim() : 'sem-nome'
  const fileName = `Planilha - ${studentName} - ${dateStr}.pdf`
  exportToPDF('pdf-content', fileName)
}
</script>

<template>
  <div class="min-h-screen">

    <!-- ── HEADER ────────────────────────────── -->
    <AppHeader
      :title="planTitle"
      @update:title="planTitle = $event"
    />

    <!-- ── MAIN LAYOUT ───────────────────────── -->
    <main class="max-w-3xl mx-auto px-4 pb-32 md:pb-24">

      <!-- Tab navigation -->
      <nav class="flex gap-1 p-1 bg-dark-800 rounded-xl border border-dark-500 mb-8 sticky top-4 z-20 backdrop-blur-md">
        <button
          v-for="tab in (['aluno', 'treino', 'dieta'] as const)"
          :key="tab"
          :id="`tab-${tab}`"
          :class="[
            'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 capitalize',
            activeTab === tab
              ? 'bg-dark-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          ]"
          @click="activeTab = tab"
        >
          <span class="mr-1.5" v-if="tab === 'aluno'">👤</span>
          <span class="mr-1.5" v-else-if="tab === 'treino'">🏋️</span>
          <span class="mr-1.5" v-else>🥗</span>
          {{ tab === 'aluno' ? 'Aluno' : tab === 'treino' ? 'Treino' : 'Dieta' }}
        </button>
      </nav>

      <!-- Tab panels -->
      <transition name="tab-fade" mode="out-in">
        <StudentSection v-if="activeTab === 'aluno'" key="aluno" />
        <WorkoutSection v-else-if="activeTab === 'treino'" key="treino" />
        <DietSection v-else key="dieta" />
      </transition>

    </main>

    <!-- ── EXPORT FOOTER ─────────────────────── -->
    <footer class="fixed bottom-0 inset-x-0 z-30">
      <div class="max-w-3xl mx-auto px-4 pb-6">
        <div class="card p-3 flex items-center gap-3">
          <!-- Stats pill -->
          <div class="hidden sm:flex items-center gap-3 text-xs text-slate-500 flex-1">
            <span>
              <span class="text-slate-300 font-semibold">Treinos: </span>
              <span class="text-violet-400 font-bold" id="stat-workouts">
                {{ workouts.length }}
              </span>
            </span>
            <span class="text-dark-400">·</span>
            <span>
              <span class="text-slate-300 font-semibold">Refeições: </span>
              <span class="text-cyan-400 font-bold" id="stat-meals">{{ meals.length }}</span>
            </span>
          </div>

          <!-- Export button -->
          <button
            id="btn-export-pdf"
            class="btn-export w-full sm:w-auto"
            :disabled="isExporting"
            @click="handleExport"
          >
            <svg v-if="isExporting" class="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ isExporting ? 'Gerando PDF...' : 'Exportar PDF' }}
          </button>
        </div>
        <div class="mt-3 text-center text-xs text-slate-500">
          Desenvolvido por <a href="https://kodarya.com.br" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:text-violet-300 hover:underline transition-colors font-medium">Kodarya Engenharia de Software</a>
        </div>
      </div>
    </footer>

    <!-- ── HIDDEN PDF CONTENT ─────────────────── -->
    <!-- Rendered off-screen, captured by html2pdf -->
    <div class="absolute -left-[9999px] top-0 w-[794px]" aria-hidden="true">
      <PdfPreview />
    </div>

  </div>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.2s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateX(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>
