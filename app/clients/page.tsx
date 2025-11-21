'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Table, { TableColumn } from '@/components/ui/Table'

// Sample clients data
const sampleClients = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
    industry: 'Technology',
    status: 'Active',
    joinDate: '2023-12-15',
    projects: 3,
    revenue: 45000
  },
  {
    id: 2,
    name: 'Digital Innovations',
    email: 'hello@digitalinn.com',
    phone: '+1 (555) 987-6543',
    industry: 'Marketing',
    status: 'Active',
    joinDate: '2023-11-20',
    projects: 2,
    revenue: 28000
  },
  {
    id: 3,
    name: 'Growth Partners',
    email: 'info@growthp.com',
    phone: '+1 (555) 456-7890',
    industry: 'Consulting',
    status: 'Inactive',
    joinDate: '2023-10-05',
    projects: 1,
    revenue: 12000
  }
]

const ClientsPage = () => {
  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const statusColors = {
      Active: 'bg-success-100 text-success-800',
      Inactive: 'bg-gray-100 text-gray-800',
      Pending: 'bg-warning-100 text-warning-800'
    }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status as keyof typeof statusColors]}`}>
        {status}
      </span>
    )
  }

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'name',
      title: 'Client',
      render: (value, record) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{record.industry}</div>
        </div>
      )
    },
    {
      key: 'email',
      title: 'Contact',
      render: (value, record) => (
        <div>
          <div className="text-sm text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{record.phone}</div>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    {
      key: 'projects',
      title: 'Projects',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'revenue',
      title: 'Revenue',
      render: (value) => <span className="font-medium text-success-600">${value.toLocaleString()}</span>
    },
    {
      key: 'joinDate',
      title: 'Join Date',
      render: (value) => <span className="text-sm text-gray-600">{new Date(value).toLocaleDateString()}</span>
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-600">Manage your client relationships</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Import Clients</Button>
            <Button>+ Add Client</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{sampleClients.length}</p>
              <p className="text-sm text-gray-600">Total Clients</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">
                {sampleClients.filter(client => client.status === 'Active').length}
              </p>
              <p className="text-sm text-gray-600">Active Clients</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">
                {sampleClients.reduce((sum, client) => sum + client.projects, 0)}
              </p>
              <p className="text-sm text-gray-600">Total Projects</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">
                ${sampleClients.reduce((sum, client) => sum + client.revenue, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total Revenue</p>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card padding="sm">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="ghost" size="sm">Active</Button>
              <Button variant="ghost" size="sm">Inactive</Button>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search clients..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </Card>

        {/* Clients Table */}
        <Table
          columns={columns}
          data={sampleClients}
          emptyText="No clients found"
        />
      </div>
    </DashboardLayout>
  )
}

export default ClientsPage