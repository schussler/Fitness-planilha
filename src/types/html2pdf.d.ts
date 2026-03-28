// Type declarations for html2pdf.js (no official @types package)
declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[]
    filename?: string
    image?: { type?: string; quality?: number }
    html2canvas?: Record<string, unknown>
    jsPDF?: { unit?: string; format?: string; orientation?: string }
    pagebreak?: { mode?: string[] }
  }

  interface Html2PdfChain {
    set(options: Html2PdfOptions): Html2PdfChain
    from(element: HTMLElement): Html2PdfChain
    save(): Promise<void>
    toPdf(): Html2PdfChain
  }

  function html2pdf(): Html2PdfChain
  function html2pdf(element: HTMLElement, options?: Html2PdfOptions): Html2PdfChain

  export = html2pdf
}
