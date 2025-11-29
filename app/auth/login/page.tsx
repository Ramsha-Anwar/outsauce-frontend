"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isEmail, isStrongPassword, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'
import { api, getErrorMessage } from '@/lib/api'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

type Fields = 'email' | 'password'

export default function LoginPage() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const validate = (): boolean => {
    const e: FieldErrors<Fields> = {}
    if (!isEmail(values.email)) e.email = 'Enter a valid email.'
    if (!isStrongPassword(values.password)) e.password = 'Min 8 chars incl. letter & number.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors and try again')
      return
    }
    const id = toast.loading('Signing you in...')
    try {
      await api.auth.login(values.email, values.password)
      toast.dismiss(id)
      setSubmitted(true)
      router.push('/dashboard')
    } catch (error) {
      toast.dismiss(id)
      toast.error(getErrorMessage(error))
    }
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
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 pr-10"
              value={values.password}
              onChange={(e) => setValues(v => ({ ...v, password: e.target.value }))}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
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
