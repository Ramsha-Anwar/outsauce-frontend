import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Outsauce — Auth',
  description: 'Login and register to Outsauce',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-300 to-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="relative h-14 w-14 mx-auto rounded-full overflow-hidden bg-white ring-2 ring-blue-300 shadow-md">
            <Image src="/assets/logo-v2.png"
                            alt="Outsauce logo"
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-900">Welcome to Outsauce</h1>
          <p className="text-sm text-white">Find. Engage. Close.</p>
        </div>
        {children}
      </div>
    </div>
  )
}