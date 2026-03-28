<script setup lang="ts">
import { useStudent } from '@/composables/useStudent'

const { student } = useStudent()
</script>

<template>
  <section id="aluno-section" class="animate-fade-in">
    <!-- Section header -->
    <div class="section-header">
      <div class="section-icon bg-gradient-to-br from-emerald-600 to-emerald-400 glow-cyan">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div>
        <h2 class="section-title">Dados do Aluno</h2>
        <p class="text-slate-500 text-xs mt-0.5">Informações gerais e objetivos</p>
      </div>
      <div class="ml-auto">
        <span class="badge bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
          Cadastro
        </span>
      </div>
    </div>

    <!-- Student Form -->
    <article class="card p-6 animate-slide-up">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <!-- Name -->
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Nome Completo</label>
          <input
            v-model="student.name"
            type="text"
            placeholder="Ex: João da Silva"
            class="input-base"
          />
        </div>

        <!-- Age -->
        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Idade</label>
          <input
            v-model="student.age"
            type="text"
            placeholder="Ex: 28 anos"
            class="input-base"
          />
        </div>

        <!-- Weight -->
        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Peso Atual</label>
          <input
            v-model="student.weight"
            type="text"
            placeholder="Ex: 75 kg"
            class="input-base"
          />
        </div>

        <!-- Height -->
        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Altura</label>
          <input
            v-model="student.height"
            type="text"
            placeholder="Ex: 175 cm"
            class="input-base"
          />
        </div>

        <!-- Objective -->
        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Objetivo</label>
          <input
            v-model="student.objective"
            type="text"
            placeholder="Ex: Hipertrofia / Emagrecimento"
            class="input-base"
          />
        </div>

        <!-- Notes -->
        <div class="sm:col-span-2 mt-2">
          <label class="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Observações Médicas / Restrições</label>
          <textarea
            v-model="student.notes"
            rows="3"
            placeholder="Ex: Dor no ombro esquerdo, evitar carga alta no desenvolvimento."
            class="input-base resize-y"
          ></textarea>
        </div>

      </div>
    </article>
  </section>
</template>
