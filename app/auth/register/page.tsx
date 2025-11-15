"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isEmail, isStrongPassword, isNonEmpty, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'

type Fields = 'name' | 'email' | 'password' | 'confirm'

export default function RegisterPage() {
  const [values, setValues] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const validate = (): boolean => {
    const e: FieldErrors<Fields> = {}
    if (!isNonEmpty(values.name, 2)) e.name = 'Name must be at least 2 characters.'
    if (!isEmail(values.email)) e.email = 'Enter a valid email.'
    if (!isStrongPassword(values.password)) e.password = 'Min 8 chars incl. letter & number.'
    if (values.password !== values.confirm) e.confirm = 'Passwords do not match.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors and try again')
      return
    }
    const id = toast.loading('Creating your account...')
    setTimeout(() => {
      toast.update(id, { type: 'success', message: 'Account created. Please verify your email.' })
      setSubmitted(true)
    }, 1000)
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Create account</h2>
      <p className="text-sm text-gray-600 mt-1">Get started with Outsauce — it’s free and open source.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={values.name}
            onChange={(e) => setValues(v => ({ ...v, name: e.target.value }))}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={values.confirm}
            onChange={(e) => setValues(v => ({ ...v, confirm: e.target.value }))}
          />
          {errors.confirm && <p className="mt-1 text-xs text-red-600">{errors.confirm}</p>}
        </div>
        <Button type="submit">Create account</Button>
        {submitted && <p className="text-xs text-emerald-600">Validation passed. Proceed to verify email.</p>}
      </form>
      <p className="mt-6 text-sm text-gray-600">
        Already have an account? <Link className="text-primary-700 hover:underline" href="/auth/login">Sign in</Link>
      </p>
    </Card>
  )
}
