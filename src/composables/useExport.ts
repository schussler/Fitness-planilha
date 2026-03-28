import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

export function useExport() {
  const isExporting = ref(false)

  async function exportToPDF(elementId: string, filename = 'planilha-fitness.pdf') {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error(`[useExport] Element #${elementId} not found.`)
      return
    }

    isExporting.value = true

    // Temporarily force light styles for pdf rendering (html2canvas doesn't handle dark bg well)
    element.classList.add('pdf-render-mode')

    try {
      await html2pdf()
        .from(element)
        .set({
          margin: [8, 8, 8, 8],
          filename,
          image: { type: 'jpeg', quality: 0.97 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        })
        .save()
    } catch (err) {
      console.error('[useExport] PDF export failed:', err)
    } finally {
      element.classList.remove('pdf-render-mode')
      isExporting.value = false
    }
  }

  return { isExporting, exportToPDF }
}
