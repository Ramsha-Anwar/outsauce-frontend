"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isCode, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'

type Fields = 'code'

export default function VerifyPage() {
  const [code, setCode] = useState('')
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [ok, setOk] = useState(false)
  const toast = useToast()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eMap: FieldErrors<Fields> = {}
    if (!isCode(code, 6)) eMap.code = 'Enter the 6-digit code.'
    setErrors(eMap)
    if (Object.keys(eMap).length !== 0) {
      toast.error('Invalid code. Please try again.')
      return
    }
    const id = toast.loading('Verifying code...')
    setTimeout(() => {
      toast.update(id, { type: 'success', message: 'Email verified' })
      setOk(true)
    }, 900)
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Enter verification code</h2>
      <p className="text-sm text-gray-600 mt-1">Paste the 6-digit code from your email.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Code</label>
          <input
            inputMode="numeric"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 tracking-widest text-center text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0,6))}
          />
          {errors.code && <p className="mt-1 text-xs text-red-600">{errors.code}</p>}
        </div>
        <Button type="submit">Verify</Button>
        {ok && <p className="text-xs text-emerald-600">Verified! You can now <Link className="underline" href="/auth/login">sign in</Link>.</p>}
      </form>
    </Card>
  )
}
