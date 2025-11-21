export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isStrongPassword(value: string): boolean {
  // at least 8 chars, one letter, one number
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]{8,}$/.test(value)
}

export function isNonEmpty(value: string, min = 1): boolean {
  return value.trim().length >= min
}

export function isCode(value: string, length = 6): boolean {
  return new RegExp(`^\\d{${length}}$`).test(value)
}

export type FieldErrors<T extends string> = Partial<Record<T, string>>
