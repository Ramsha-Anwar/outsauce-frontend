import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Outsauce — Auth',
  description: 'Login and register to Outsauce',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left visual column (placeholder for image) */}
      <div className="relative hidden lg:block bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="w-full max-w-xl">
            <h1 className="text-4xl font-bold text-white text-center">OutSauce</h1>
            <p className="mt-4 text-base text-blue-100 text-center">
              The modern platform connecting talented freelancers with innovative clients
            </p>
            {/* Left illustration */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/10 backdrop-blur-sm h-80 relative">
              <Image
                src="/assets/auth.png"
                alt="OutSauce landing visual"
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right column with auth content */}
      <div className="bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="relative h-14 w-14 mx-auto rounded-full overflow-hidden bg-white ring-2 ring-blue-300 shadow-md">
              <Image
                src="/assets/logo-v2.png"
                alt="OutSauce logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-600">Sign in to your OutSauce account</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}