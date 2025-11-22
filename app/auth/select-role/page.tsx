"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Briefcase, Users } from 'lucide-react'

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<'client' | 'freelancer' | ''>('')
  const router = useRouter()

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/auth/register?role=${selectedRole}`)
    }
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-900 text-center">Welcome to OutSauce</h2>
      <p className="text-sm text-gray-600 mt-1 text-center">Tell us who you are to get started</p>
      
      <div className="mt-8 space-y-4">
        {/* Freelancer Option */}
        <label
          className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
            selectedRole === 'freelancer'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <input
            type="radio"
            name="role"
            value="freelancer"
            checked={selectedRole === 'freelancer'}
            onChange={(e) => setSelectedRole(e.target.value as 'freelancer')}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">I'm a Freelancer</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              I want to find clients and showcase my skills
            </p>
          </div>
        </label>

        {/* Client Option */}
        <label
          className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
            selectedRole === 'client'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <input
            type="radio"
            name="role"
            value="client"
            checked={selectedRole === 'client'}
            onChange={(e) => setSelectedRole(e.target.value as 'client')}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">I'm a Client</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              I want to hire talented freelancers for my projects
            </p>
          </div>
        </label>
      </div>

      <div className="mt-6">
        <Button 
          onClick={handleContinue} 
          disabled={!selectedRole}
          className="w-full"
        >
          Continue
        </Button>
      </div>

      <p className="mt-6 text-sm text-gray-600 text-center">
        Already have an account?{' '}
        <a href="/auth/login" className="text-blue-600 hover:underline">
          Sign in
        </a>
      </p>
    </Card>
  )
}
