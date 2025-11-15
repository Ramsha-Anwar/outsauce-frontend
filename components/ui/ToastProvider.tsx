"use client"
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

type ToastType = 'info' | 'success' | 'error' | 'loading'
type Toast = { id: string; type: ToastType; message: string }

type ToastContextValue = {
  show: (message: string) => string
  success: (message: string) => string
  error: (message: string) => string
  loading: (message: string) => string
  update: (id: string, patch: Partial<Pick<Toast, 'type' | 'message'>>) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

function useToastInternal() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeouts = useRef<Record<string, any>>({})

  const enqueue = useCallback((t: Toast) => {
    setToasts((prev) => [t, ...prev].slice(0, 6))
  }, [])

  const scheduleAutoClose = useCallback((id: string) => {
    clearTimeout(timeouts.current[id])
    timeouts.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id))
      delete timeouts.current[id]
    }, 2600)
  }, [])

  const dismiss = useCallback((id: string) => {
    clearTimeout(timeouts.current[id])
    setToasts((prev) => prev.filter((x) => x.id !== id))
    delete timeouts.current[id]
  }, [])

  const make = useCallback((type: ToastType, message: string) => {
    const id = Math.random().toString(36).slice(2)
    enqueue({ id, type, message })
    if (type !== 'loading') scheduleAutoClose(id)
    return id
  }, [enqueue, scheduleAutoClose])

  const update = useCallback((id: string, patch: Partial<Pick<Toast, 'type' | 'message'>>) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)))
    if (patch.type && patch.type !== 'loading') scheduleAutoClose(id)
  }, [scheduleAutoClose])

  const api: ToastContextValue = useMemo(() => ({
    show: (m) => make('info', m),
    success: (m) => make('success', m),
    error: (m) => make('error', m),
    loading: (m) => make('loading', m),
    update,
    dismiss,
  }), [dismiss, make, update])

  const Viewport = (
    <div className="pointer-events-none fixed right-4 top-4 z-[1000] flex w-auto max-w-sm flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={
            'pointer-events-auto rounded-md border px-3 py-2 shadow-sm backdrop-blur-sm text-sm flex items-start gap-2 ' +
            (t.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : t.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : t.type === 'loading'
              ? 'bg-blue-50 border-blue-200 text-blue-800'
              : 'bg-gray-50 border-gray-200 text-gray-800')
          }
        >
          <span className="mt-0.5 inline-block h-2 w-2 rounded-full "
            style={{
              backgroundColor:
                t.type === 'success' ? '#059669' : t.type === 'error' ? '#dc2626' : t.type === 'loading' ? '#2563eb' : '#6b7280',
            }}
          />
          <div className="flex-1">{t.message}</div>
          <button onClick={() => dismiss(t.id)} className="ml-1 text-xs text-gray-500 hover:text-gray-700">✕</button>
        </div>
      ))}
    </div>
  )

  return { api, Viewport }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { api, Viewport } = useToastInternal()
  return (
    <ToastContext.Provider value={api}>
      {Viewport}
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>')
  return ctx
}
