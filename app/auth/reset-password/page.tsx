"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isStrongPassword, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

type Fields = 'password' | 'confirm'

export default function ResetPasswordPage() {
  const [values, setValues] = useState({ password: '', confirm: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eMap: FieldErrors<Fields> = {}
    if (!isStrongPassword(values.password)) eMap.password = 'Min 8 chars incl. letter & number.'
    if (values.password !== values.confirm) eMap.confirm = 'Passwords do not match.'
    setErrors(eMap)
    if (Object.keys(eMap).length !== 0) {
      toast.error('Please fix the errors and try again')
      return
    }
    const id = toast.loading('Updating password...')
    setTimeout(() => {
      toast.update(id, { type: 'success', message: 'Password updated' })
      setSubmitted(true)
    }, 900)
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Reset password</h2>
      <p className="text-sm text-gray-600 mt-1">Enter a new password for your account.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">New password</label>
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
        <Button type="submit">Update password</Button>
        {submitted && <p className="text-xs text-emerald-600">Password updated. You can now <Link className="underline" href="/auth/login">sign in</Link>.</p>}
      </form>
    </Card>
  )
}
