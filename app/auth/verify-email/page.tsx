"use client"
import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/ui/ToastProvider'

export default function VerifyEmailPage() {
  const toast = useToast()
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Check your email</h2>
      <p className="text-sm text-gray-600 mt-1">We sent a verification link to your inbox. Click it to verify your account.</p>
      <div className="mt-6 flex items-center gap-3">
        <Link href="/auth/verify"><Button>Enter code</Button></Link>
        <Button variant="outline" onClick={() => {
          const id = toast.loading('Resending verification email...')
          setTimeout(() => toast.update(id, { type: 'success', message: 'Verification email sent' }), 900)
        }}>Resend link</Button>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Already verified? <Link className="text-primary-700 hover:underline" href="/auth/login">Sign in</Link>
      </p>
    </Card>
  )
}
