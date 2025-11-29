'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { User, Mail, Bell, Shield, CreditCard, Globe, Upload } from 'lucide-react'

export default function SettingsPage() {
    const [user, setUser] = React.useState({
        firstName: 'Alex',
        lastName: 'Freelancer',
        email: 'alex@example.com'
    })

    React.useEffect(() => {
        const session = localStorage.getItem('outsauce_session')
        if (session) {
            try {
                const userData = JSON.parse(session)
                if (userData.name) {
                    const names = userData.name.split(' ')
                    setUser({
                        firstName: names[0] || '',
                        lastName: names.slice(1).join(' ') || '',
                        email: userData.email || ''
                    })
                }
            } catch (e) {
                console.error('Failed to parse session', e)
            }
        }
    }, [])

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your profile, preferences, and account security.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Settings Navigation */}
                <div className="space-y-2">
                    {[
                        { name: 'Profile Information', icon: User, active: true },
                        { name: 'Notifications', icon: Bell, active: false },
                        { name: 'Security', icon: Shield, active: false },
                        { name: 'Billing & Payments', icon: CreditCard, active: false },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.active
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-primary-600' : 'text-gray-400'}`} />
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Settings Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Profile Photo */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Photo</h2>
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                                {user.firstName[0]}{user.lastName[0]}
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <Button size="sm" variant="outline">
                                        <Upload className="w-4 h-4 mr-2" />
                                        Change Photo
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                        Remove
                                    </Button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>
                    </Card>

                    {/* Personal Information */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user.firstName}
                                        key={user.firstName} // Force re-render when state changes
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user.lastName}
                                        key={user.lastName}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="email"
                                        defaultValue={user.email}
                                        key={user.email}
                                        className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                                <input
                                    type="text"
                                    defaultValue="Senior Full Stack Developer"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                <textarea
                                    rows={4}
                                    defaultValue="Passionate developer with 5+ years of experience in React, Node.js, and cloud technologies. I love building scalable applications and solving complex problems."
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio URL</label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="url"
                                        defaultValue="https://alexfreelancer.com"
                                        className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </form>
                    </Card>

                    {/* Notification Preferences */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Notifications</h2>
                        <div className="space-y-4">
                            {[
                                { label: 'New job recommendations', desc: 'Get notified when new jobs match your skills', checked: true },
                                { label: 'Message alerts', desc: 'Receive emails when you get a new message', checked: true },
                                { label: 'Marketing updates', desc: 'Receive news and updates about Outsauce', checked: false },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            defaultChecked={item.checked}
                                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium text-gray-700 text-sm block">{item.label}</label>
                                        <p className="text-gray-500 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
