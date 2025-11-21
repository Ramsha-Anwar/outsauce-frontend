"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isEmail, isStrongPassword, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'

type Fields = 'email' | 'password'

export default function LoginPage() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const validate = (): boolean => {
    const e: FieldErrors<Fields> = {}
    if (!isEmail(values.email)) e.email = 'Enter a valid email.'
    if (!isStrongPassword(values.password)) e.password = 'Min 8 chars incl. letter & number.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors and try again')
      return
    }
    const id = toast.loading('Signing you in...')
    setTimeout(() => {
      toast.update(id, { type: 'success', message: 'Signed in successfully' })
      setSubmitted(true)
    }, 900)
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Sign in</h2>
      <p className="text-sm text-gray-600 mt-1">Welcome back. Use your credentials.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={values.email}
            onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={values.password}
            onChange={(e) => setValues(v => ({ ...v, password: e.target.value }))}
          />
          {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
        </div>
        <div className="flex items-center justify-between text-sm">
          <Link href="/auth/forgot-password" className="text-primary-700 hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit">Sign in</Button>
        {submitted && (
          <p className="text-xs text-emerald-600">Validation passed. Hook up your API next.</p>
        )}
      </form>
      <p className="mt-6 text-sm text-gray-600">
        New here? <Link className="text-primary-700 hover:underline" href="/auth/register">Create an account</Link>
      </p>
    </Card>
  )
}
