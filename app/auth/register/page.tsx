"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { isEmail, isStrongPassword, isNonEmpty, FieldErrors } from '@/lib/validators'
import { useToast } from '@/components/ui/ToastProvider'
import { api, getErrorMessage } from '@/lib/api'

import {
  UserCircleIcon,
  BriefcaseIcon,
  RectangleStackIcon
} from '@heroicons/react/24/solid'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

type Fields = 'name' | 'email' | 'password' | 'confirm' | 'role'

export default function RegisterPage() {
  const [values, setValues] = useState({ name: '', email: '', password: '', confirm: '', role: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FieldErrors<Fields>>({})
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const validate = (): boolean => {
    const e: FieldErrors<Fields> = {}
    if (!isNonEmpty(values.name, 2)) e.name = 'Name must be at least 2 characters.'
    if (!isEmail(values.email)) e.email = 'Enter a valid email.'
    if (!isStrongPassword(values.password)) e.password = 'Min 8 chars incl. letter & number.'
    if (values.password !== values.confirm) e.confirm = 'Passwords do not match.'
    if (!isNonEmpty(values.role)) e.role = 'Please select a role.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors and try again')
      return
    }
    const id = toast.loading('Creating your account...')
    try {
      await api.auth.register(values)
      toast.dismiss(id)
      setSubmitted(true)
      router.push('/auth/login')
    } catch (error) {
      toast.dismiss(id)
      toast.error(getErrorMessage(error))
    }
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900">Create account</h2>
      <p className="text-sm text-gray-600 mt-1">Get started with Outsauce — it’s free and open source.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">

        {/* Role selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Choose your role</label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">

            {/* Client card */}
            <label
              className={`group relative cursor-pointer rounded-lg border px-4 py-5 shadow-sm transition flex flex-col items-center gap-3 ${values.role === 'client'
                ? 'border-primary-500 ring-2 ring-primary-300 bg-primary-50'
                : 'border-gray-300 hover:border-primary-300'
                }`}
            >
              <input
                type="radio"
                name="role"
                value="client"
                checked={values.role === 'client'}
                onChange={(e) => setValues(v => ({ ...v, role: e.target.value }))}
                className="sr-only"
              />

              <UserCircleIcon
                className={`w-10 h-10 flex-shrink-0 transition ${values.role === 'client' ? 'text-blue-600' : 'text-gray-500'
                  }`}
              />

              <p className="text-sm font-medium text-gray-900">Client</p>
            </label>

            {/* Freelancer card */}
            <label
              className={`group relative cursor-pointer rounded-lg border px-4 py-5 shadow-sm transition flex flex-col items-center gap-3 ${values.role === 'freelancer'
                ? 'border-primary-500 ring-2 ring-primary-300 bg-primary-50'
                : 'border-gray-300 hover:border-primary-300'
                }`}
            >
              <input
                type="radio"
                name="role"
                value="freelancer"
                checked={values.role === 'freelancer'}
                onChange={(e) => setValues(v => ({ ...v, role: e.target.value }))}
                className="sr-only"
              />

              <BriefcaseIcon
                className={`w-10 h-10 flex-shrink-0 transition ${values.role === 'freelancer' ? 'text-emerald-600' : 'text-gray-500'
                  }`}
              />

              <p className="text-sm font-medium text-gray-900">Freelancer</p>
            </label>

            {/* Admin card */}
            <label
              className={`group relative cursor-pointer rounded-lg border px-4 py-5 shadow-sm transition flex flex-col items-center gap-3 ${values.role === 'admin'
                ? 'border-primary-500 ring-2 ring-primary-300 bg-primary-50'
                : 'border-gray-300 hover:border-primary-300'
                }`}
            >
              <input
                type="radio"
                name="role"
                value="admin"
                checked={values.role === 'admin'}
                onChange={(e) => setValues(v => ({ ...v, role: e.target.value }))}
                className="sr-only"
              />

              <RectangleStackIcon
                className={`w-10 h-10 flex-shrink-0 transition ${values.role === 'admin' ? 'text-violet-600' : 'text-gray-500'
                  }`}
              />

              <p className="text-sm font-medium text-gray-900">Admin</p>
            </label>

          </div>
          {errors.role && <p className="mt-2 text-xs text-red-600">{errors.role}</p>}
        </div>

        {/* (Rest of form unchanged) */}
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

        <Button type="submit">Create account</Button>
        {submitted && <p className="text-xs text-emerald-600">Validation passed. Proceed to verify email.</p>}
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Already have an account? <Link className="text-primary-700 hover:underline" href="/auth/login">Sign in</Link>
      </p>
    </Card>
  )
}
