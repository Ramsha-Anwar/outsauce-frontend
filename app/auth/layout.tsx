import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Outsauce — Auth',
  description: 'Login and register to Outsauce',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left panel */}
      <div className="relative hidden lg:flex bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 text-white">
        <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-xl px-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight">OutSauce</h1>
          <p className="mt-4 text-lg text-blue-100">
            The modern platform connecting talented freelancers with innovative clients
          </p>
          <div className="mt-8">
            <div className="relative w-[28rem] max-w-full aspect-[16/10] rounded-2xl overflow-hidden ring-2 ring-white/30 shadow-2xl bg-white/10 backdrop-blur">
              <Image
                src="/assets/auth-illustration-office.svg"
                alt="Laptop on desk in a modern office"
                fill
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right panel (forms) */}
      <div className="flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-10 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}