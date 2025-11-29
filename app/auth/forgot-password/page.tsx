"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isEmail, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'

type Fields = 'email'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eMap: FieldErrors<Fields> = {}
    if (!isEmail(email)) eMap.email = 'Enter a valid email.'
    setErrors(eMap)
    if (Object.keys(eMap).length !== 0) {
      toast.error('Please enter a valid email')
      return
    }
    const id = toast.loading('Sending reset link...')
    setTimeout(() => {
      toast.dismiss(id)
      setSubmitted(true)
    }, 900)
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Forgot password</h2>
      <p className="text-sm text-gray-600 mt-1">We’ll email you a link to reset your password.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <Button type="submit">Send reset link</Button>
        {submitted && <p className="text-xs text-emerald-600">If this email exists, a reset link was sent.</p>}
      </form>
      <p className="mt-6 text-sm text-gray-600">
        Remembered it? <Link className="text-primary-700 hover:underline" href="/auth/login">Back to sign in</Link>
      </p>
    </Card>
  )
}
