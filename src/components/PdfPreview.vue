<script setup lang="ts">
/**
 * PdfPreview – renders a light-mode document clone used for PDF export.
 * It mirrors the reactive data but with print-friendly styles.
 */

import { useWorkouts } from '../composables/useWorkouts'
import { useMeals } from '../composables/useMeals'
import { useStudent } from '../composables/useStudent'
const { workouts } = useWorkouts()
const { meals } = useMeals()
const { student } = useStudent()


</script>

<template>
  <!-- This element is targeted by html2pdf -->
  <div id="pdf-content" class="pdf-content bg-white text-gray-900 font-sans p-6" style="font-family: Inter, sans-serif;">


    <!-- ── ALUNO ──────────────────────────────── -->
    <div v-if="student.name || student.objective" style="margin-bottom: 24px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fafafa;">
      <h2 style="font-size: 14px; font-weight: 700; color: #059669; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 10px;">
        👤 Dados do Aluno
      </h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-size: 12px; color: #334155;">
        <div><strong>Nome:</strong> {{ student.name || '—' }}</div>
        <div><strong>Idade:</strong> {{ student.age || '—' }}</div>
        <div><strong>Peso:</strong> {{ student.weight || '—' }}</div>
        <div><strong>Altura:</strong> {{ student.height || '—' }}</div>
        <div style="grid-column: span 2;"><strong>Objetivo:</strong> {{ student.objective || '—' }}</div>
      </div>
      <div v-if="student.notes" style="margin-top: 8px; font-size: 11px; color: #475569; padding-top: 8px; border-top: 1px dashed #cbd5e1;">
        <strong>Notas/Restrições:</strong> {{ student.notes }}
      </div>
    </div>

    <!-- ── TREINO ─────────────────────────────── -->
    <h2 style="font-size: 15px; font-weight: 700; color: #3730a3; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 12px;">
      🏋️ Treino
    </h2>

    <div v-for="workout in workouts" :key="workout.id"
         style="margin-bottom: 16px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; page-break-inside: avoid;">
      <!-- Workout header -->
      <div style="background: #f8f7ff; padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">
        <span style="font-weight: 700; font-size: 13px; color: #4c1d95;">
          {{ workout.name || 'Treino sem nome' }}
        </span>
        <span v-if="workout.day" style="margin-left: 8px; font-size: 11px; color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 9999px;">
          {{ workout.day }}
        </span>
      </div>
      <!-- Exercise table -->
      <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
        <thead>
          <tr style="background: #f1f5f9;">
            <th style="text-align: left; padding: 6px 12px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Exercício</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">Séries</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">Reps</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">Carga</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ex, i) in workout.exercises" :key="ex.id"
              :style="{ background: i % 2 === 0 ? '#ffffff' : '#fafaff' }">
            <td style="padding: 7px 12px; border-top: 1px solid #f1f5f9; color: #1e293b;">
              {{ ex.name || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ ex.sets || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ ex.reps || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ ex.weight || '—' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ── DIETA ──────────────────────────────── -->
    <h2 style="font-size: 15px; font-weight: 700; color: #0e7490; letter-spacing: 0.05em; text-transform: uppercase; margin: 24px 0 12px;">
      🥗 Dieta
    </h2>

    <div v-for="meal in meals" :key="meal.id"
         style="margin-bottom: 16px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; page-break-inside: avoid;">
      <!-- Meal header -->
      <div style="background: #f0fdfa; padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">
        <span style="font-weight: 700; font-size: 13px; color: #0f766e;">
          {{ meal.name || 'Refeição sem nome' }}
        </span>
        <span v-if="meal.time" style="margin-left: 8px; font-size: 11px; color: #0e7490; background: #cffafe; padding: 2px 8px; border-radius: 9999px;">
          {{ meal.time }}
        </span>
      </div>
      <!-- Food table -->
      <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
        <thead>
          <tr style="background: #f8fafc;">
            <th style="text-align: left; padding: 6px 12px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Alimento</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">Quantidade</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">kcal</th>
            <th style="text-align: center; padding: 6px 8px; font-weight: 600; color: #475569; font-size: 10px; text-transform: uppercase;">Proteína</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(food, i) in meal.foods" :key="food.id"
              :style="{ background: i % 2 === 0 ? '#ffffff' : '#f0fdfa' }">
            <td style="padding: 7px 12px; border-top: 1px solid #f1f5f9; color: #1e293b;">
              {{ food.name || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ food.quantity || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ food.calories || '—' }}
            </td>
            <td style="padding: 7px 8px; border-top: 1px solid #f1f5f9; text-align: center; color: #334155;">
              {{ food.protein || '—' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #e2e8f0; text-align: center;">
      <p style="font-size: 10px; color: #94a3b8;">
        Desenvolvido por <a href="https://kodarya.com.br" target="_blank" style="color: #7c3aed; text-decoration: none; font-weight: 600;">Kodarya Engenharia de Software</a>
      </p>
    </div>
  </div>
</template>
