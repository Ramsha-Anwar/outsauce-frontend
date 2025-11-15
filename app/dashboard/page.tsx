'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { TrendingUp, TrendingDown, Minus, DollarSign, Users, Target, Activity } from 'lucide-react'

// Stats Card Component
const StatsCard = ({ title, value, change, trend, icon }: {
  title: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
  icon: React.ReactNode
}) => {
  const trendColors = {
    up: 'text-emerald-600 bg-emerald-50',
    down: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  }

  const TrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />
    return <Minus className="w-4 h-4" />
  }

  return (
    <Card hover>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${trendColors[trend]}`}>
            <TrendIcon />
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Recent Activity Item Component
const ActivityItem = ({ action, user, time, type }: {
  action: string
  user: string
  time: string
  type: 'lead' | 'client' | 'project'
}) => {
  const typeColors = {
    lead: 'bg-primary-100 text-primary-800',
    client: 'bg-success-100 text-success-800',
    project: 'bg-warning-100 text-warning-800'
  }

  return (
    <div className="flex items-center space-x-4 py-3">
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">{action}</p>
        <p className="text-xs text-gray-500">{user} • {time}</p>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const statsData = [
    { title: 'Total Leads', value: '2,847', change: '+12%', trend: 'up' as const, icon: <Target className="w-5 h-5" /> },
    { title: 'Active Clients', value: '186', change: '+8%', trend: 'up' as const, icon: <Users className="w-5 h-5" /> },
    { title: 'Conversion Rate', value: '24.5%', change: '+2.1%', trend: 'up' as const, icon: <Activity className="w-5 h-5" /> },
    { title: 'Revenue', value: '$84,290', change: '-3%', trend: 'down' as const, icon: <DollarSign className="w-5 h-5" /> },
  ]

  const recentActivity = [
    { action: 'New lead generated from LinkedIn', user: 'John Doe', time: '2 minutes ago', type: 'lead' as const },
    { action: 'Client onboarding completed', user: 'Sarah Smith', time: '15 minutes ago', type: 'client' as const },
    { action: 'Project milestone reached', user: 'Mike Johnson', time: '1 hour ago', type: 'project' as const },
    { action: 'Lead qualified and assigned', user: 'Emily Davis', time: '2 hours ago', type: 'lead' as const },
    { action: 'New client contract signed', user: 'David Wilson', time: '3 hours ago', type: 'client' as const },
  ]

  const topLeads = [
    { name: 'TechCorp Solutions', email: 'contact@techcorp.com', status: 'Hot', value: '$12,500' },
    { name: 'Digital Innovations', email: 'hello@digitalinn.com', status: 'Warm', value: '$8,900' },
    { name: 'Growth Partners', email: 'info@growthp.com', status: 'Cold', value: '$5,200' },
    { name: 'StartupXYZ', email: 'team@startupxyz.com', status: 'Hot', value: '$15,000' },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening with your leads.</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button variant="outline" className="flex-1 sm:flex-none">Export Report</Button>
          <Button className="flex-1 sm:flex-none">Generate Leads</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Top Leads */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Top Leads</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-3 md:space-y-4">
              {topLeads.map((lead, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{lead.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{lead.email}</p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      lead.status === 'Hot' ? 'bg-red-100 text-red-800' :
                      lead.status === 'Warm' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {lead.status}
                    </span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap">{lead.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">View All</Button>
            </div>
            <div className="space-y-1">
              {recentActivity.map((activity, index) => (
                <ActivityItem
                  key={index}
                  action={activity.action}
                  user={activity.user}
                  time={activity.time}
                  type={activity.type}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Lead Generation Trends</h2>
          <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center border border-blue-100">
            <p className="text-sm sm:text-base text-gray-500 text-center px-4">Chart placeholder - Integration with charts library needed</p>
          </div>
        </Card>
        
        <Card>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Conversion Funnel</h2>
          <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center border border-purple-100">
            <p className="text-sm sm:text-base text-gray-500 text-center px-4">Chart placeholder - Integration with charts library needed</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard