'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Briefcase,
    FileText,
    Globe,
    MessageSquare,
    BarChart3,
    Settings,
    LogOut,
    UserCircle,
    X
} from 'lucide-react'

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname()
    const [userName, setUserName] = React.useState('Alex Freelancer')

    React.useEffect(() => {
        const session = localStorage.getItem('outsauce_session')
        if (session) {
            try {
                const user = JSON.parse(session)
                if (user.name) setUserName(user.name)
            } catch (e) {
                console.error('Failed to parse session', e)
            }
        }
    }, [])

    const navigation = [
        { name: 'Dashboard', href: '/freelancer/dashboard', icon: LayoutDashboard },
        { name: 'Portfolio', href: '/freelancer/portfolio', icon: Briefcase },
        { name: 'My Gigs', href: '/freelancer/gigs', icon: FileText },
        { name: 'Marketplace', href: '/freelancer/marketplace', icon: Globe },
        { name: 'Messages', href: '/freelancer/messages', icon: MessageSquare },
        { name: 'Insights', href: '/freelancer/insights', icon: BarChart3 },
        { name: 'Settings', href: '/freelancer/settings', icon: Settings },
    ]

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-white border-r border-gray-200">
            {/* Logo */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                        O
                    </div>
                    <span className="text-xl font-bold text-gray-900">Outsauce</span>
                </Link>
                <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                <div className="mb-6 px-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Freelancer Workspace</p>
                </div>
                {navigation.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            {/* User Profile & Logout */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <UserCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
                    </div>
                </div>
                <Link
                    href="/auth/login"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </Link>
            </div>
        </div>
    )

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 flex-col z-30">
                <SidebarContent />
            </aside>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <div className="fixed inset-y-0 left-0 flex flex-col w-72 bg-white shadow-xl transform transition-transform">
                        <SidebarContent />
                    </div>
                </div>
            )}
        </>
    )
}
