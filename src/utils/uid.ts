/**
 * Generates a short unique ID using crypto.randomUUID (modern browsers).
 * Falls back to Math.random for environments without crypto support.
 */
export function uid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID().slice(0, 8)
  }
  return Math.random().toString(36).slice(2, 10)
}
