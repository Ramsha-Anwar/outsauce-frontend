'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Table, { TableColumn } from '@/components/ui/Table'

// Sample projects data
const sampleProjects = [
  {
    id: 1,
    name: 'E-commerce Platform Redesign',
    client: 'TechCorp Solutions',
    status: 'In Progress',
    priority: 'High',
    startDate: '2024-01-10',
    endDate: '2024-03-15',
    budget: 25000,
    progress: 65
  },
  {
    id: 2,
    name: 'Marketing Automation Setup',
    client: 'Digital Innovations',
    status: 'Planning',
    priority: 'Medium',
    startDate: '2024-02-01',
    endDate: '2024-04-30',
    budget: 15000,
    progress: 15
  },
  {
    id: 3,
    name: 'Data Analytics Dashboard',
    client: 'Growth Partners',
    status: 'Completed',
    priority: 'High',
    startDate: '2023-11-15',
    endDate: '2024-01-20',
    budget: 18000,
    progress: 100
  },
  {
    id: 4,
    name: 'Mobile App Development',
    client: 'StartupXYZ',
    status: 'In Progress',
    priority: 'High',
    startDate: '2024-01-20',
    endDate: '2024-05-15',
    budget: 35000,
    progress: 40
  }
]

const ProjectsPage = () => {
  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const statusColors = {
      'In Progress': 'bg-primary-100 text-primary-800',
      'Planning': 'bg-warning-100 text-warning-800',
      'Completed': 'bg-success-100 text-success-800',
      'On Hold': 'bg-gray-100 text-gray-800'
    }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status as keyof typeof statusColors]}`}>
        {status}
      </span>
    )
  }

  // Priority badge component
  const PriorityBadge = ({ priority }: { priority: string }) => {
    const priorityColors = {
      High: 'bg-error-100 text-error-800',
      Medium: 'bg-warning-100 text-warning-800',
      Low: 'bg-success-100 text-success-800'
    }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[priority as keyof typeof priorityColors]}`}>
        {priority}
      </span>
    )
  }

  // Progress bar component
  const ProgressBar = ({ progress }: { progress: number }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )
  }

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'name',
      title: 'Project',
      render: (value, record) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{record.client}</div>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    {
      key: 'priority',
      title: 'Priority',
      render: (value) => <PriorityBadge priority={value} />
    },
    {
      key: 'progress',
      title: 'Progress',
      render: (value) => (
        <div className="w-20">
          <div className="flex items-center space-x-2">
            <ProgressBar progress={value} />
            <span className="text-xs text-gray-600 w-8">{value}%</span>
          </div>
        </div>
      )
    },
    {
      key: 'budget',
      title: 'Budget',
      render: (value) => <span className="font-medium">${value.toLocaleString()}</span>
    },
    {
      key: 'endDate',
      title: 'Due Date',
      render: (value) => <span className="text-sm text-gray-600">{new Date(value).toLocaleDateString()}</span>
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Track and manage your project portfolio</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Import Projects</Button>
            <Button>+ New Project</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{sampleProjects.length}</p>
              <p className="text-sm text-gray-600">Total Projects</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">
                {sampleProjects.filter(project => project.status === 'In Progress').length}
              </p>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">
                {sampleProjects.filter(project => project.status === 'Completed').length}
              </p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">
                ${sampleProjects.reduce((sum, project) => sum + project.budget, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total Budget</p>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card padding="sm">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="ghost" size="sm">In Progress</Button>
              <Button variant="ghost" size="sm">Planning</Button>
              <Button variant="ghost" size="sm">Completed</Button>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search projects..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </Card>

        {/* Projects Table */}
        <Table
          columns={columns}
          data={sampleProjects}
          emptyText="No projects found"
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">Create Project Template</Button>
              <Button variant="outline" className="w-full justify-start">Bulk Update Status</Button>
              <Button variant="outline" className="w-full justify-start">Generate Report</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Project milestone completed</p>
                <p className="text-gray-500">E-commerce Platform • 2 hours ago</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">New project created</p>
                <p className="text-gray-500">Mobile App Development • 1 day ago</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Status updated</p>
                <p className="text-gray-500">Data Analytics Dashboard • 2 days ago</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">E-commerce Platform</p>
                <p className="text-error-600">Due in 5 days</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Marketing Automation</p>
                <p className="text-warning-600">Due in 2 weeks</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Mobile App Development</p>
                <p className="text-success-600">Due in 1 month</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProjectsPage