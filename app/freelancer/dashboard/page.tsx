'use client'

import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import {
    CheckCircle,
    Eye,
    Bookmark,
    TrendingUp,
    Clock,
    Briefcase,
    ArrowRight,
    MessageSquare,
    FileText,
    Globe
} from 'lucide-react'
import { api } from '@/lib/api'

export default function FreelancerDashboard() {
    const [stats, setStats] = React.useState<any>(null)
    const [activity, setActivity] = React.useState<any[]>([])
    const [jobs, setJobs] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(true)
    const [userName, setUserName] = React.useState('Alex')

    React.useEffect(() => {
        const session = localStorage.getItem('outsauce_session')
        if (session) {
            try {
                const user = JSON.parse(session)
                if (user.name) setUserName(user.name.split(' ')[0]) // First name only
            } catch (e) {
                console.error('Failed to parse session', e)
            }
        }

        const loadData = async () => {
            try {
                const [statsData, activityData, jobsData] = await Promise.all([
                    api.freelancer.getStats(),
                    api.freelancer.getRecentActivity(),
                    api.freelancer.getRecommendedJobs()
                ])
                setStats(statsData)
                setActivity(activityData)
                setJobs(jobsData)
            } catch (error) {
                console.error('Failed to load dashboard data', error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Eye': return Eye
            case 'MessageSquare': return MessageSquare
            case 'Bookmark': return Bookmark
            case 'CheckCircle': return CheckCircle
            default: return CheckCircle
        }
    }

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Freelancer Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back, {userName}! Here's an overview of your activity.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Profile Completeness</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{stats?.profileCompleteness}%</p>
                        </div>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${stats?.profileCompleteness}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Add a portfolio item to reach 100%</p>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Portfolio Views</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{stats?.portfolioViews.toLocaleString()}</p>
                        </div>
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                            <Eye className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-xs text-emerald-600 mt-4 flex items-center font-medium">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +12% from last week
                    </p>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Saved Proposals</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{stats?.savedProposals}</p>
                        </div>
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                            <Bookmark className="w-5 h-5" />
                        </div>
                    </div>
                    <Link href="/freelancer/gigs" className="text-xs text-primary-600 mt-4 hover:underline block">
                        View all saved drafts
                    </Link>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Applications</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{stats?.activeApplications}</p>
                        </div>
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                            <Briefcase className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">2 waiting for client response</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="space-y-6">
                            {activity.map((item, idx) => {
                                const Icon = getIcon(item.icon)
                                return (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className={`p-2 rounded-full ${item.color} flex-shrink-0`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900">{item.action}</p>
                                            <p className="text-xs text-gray-500 truncate">{item.target}</p>
                                        </div>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </Card>

                    {/* Recommended Jobs */}
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
                            <Link href="/freelancer/marketplace">
                                <Button variant="ghost" size="sm">Browse Marketplace</Button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {jobs.map((job) => (
                                <div key={job.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-gray-900">{job.title}</h3>
                                            <p className="text-sm text-gray-500">{job.client}</p>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                            {job.match} Match
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">{job.budget}</span>
                                        <Button size="sm" variant="outline" className="text-xs">View Job</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Link href="/freelancer/portfolio" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    Update Portfolio
                                </Button>
                            </Link>
                            <Link href="/freelancer/gigs" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <FileText className="w-4 h-4 mr-2" />
                                    Create New Gig
                                </Button>
                            </Link>
                            <Link href="/freelancer/marketplace" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Find Work
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    {/* Profile Status */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Visibility</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Profile Status</span>
                                <span className="text-emerald-600 font-medium flex items-center">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                    Visible
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Response Rate</span>
                                <span className="text-gray-900 font-medium">94%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Avg. Response Time</span>
                                <span className="text-gray-900 font-medium">2 hrs</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <Link href="/freelancer/settings" className="flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium">
                                Manage Profile Settings
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
