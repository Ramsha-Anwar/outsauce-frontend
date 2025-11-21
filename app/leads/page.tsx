'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Table, { TableColumn } from '@/components/ui/Table'
import Modal from '@/components/ui/Modal'

// ✅ Define a Lead interface for TypeScript
interface Lead {
  id: number
  name: string
  email: string
  phone: string
  company: string
  status: 'Hot' | 'Warm' | 'Cold'
  value: number
  source: string
  createdAt: string
  lastContact: string
}

// ✅ Sample lead data
const sampleLeads: Lead[] = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    status: 'Hot',
    value: 12500,
    source: 'LinkedIn',
    createdAt: '2024-01-15',
    lastContact: '2024-01-20'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@digitalinn.com',
    phone: '+1 (555) 987-6543',
    company: 'Digital Innovations',
    status: 'Warm',
    value: 8900,
    source: 'Website',
    createdAt: '2024-01-14',
    lastContact: '2024-01-19'
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike@growthp.com',
    phone: '+1 (555) 456-7890',
    company: 'Growth Partners',
    status: 'Cold',
    value: 5200,
    source: 'Email Campaign',
    createdAt: '2024-01-13',
    lastContact: '2024-01-18'
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma@startupxyz.com',
    phone: '+1 (555) 321-9876',
    company: 'StartupXYZ',
    status: 'Hot',
    value: 15000,
    source: 'Referral',
    createdAt: '2024-01-12',
    lastContact: '2024-01-21'
  },
  {
    id: 5,
    name: 'Alex Thompson',
    email: 'alex@innovate.com',
    phone: '+1 (555) 654-3210',
    company: 'Innovate LLC',
    status: 'Warm',
    value: 7300,
    source: 'LinkedIn',
    createdAt: '2024-01-11',
    lastContact: '2024-01-17'
  }
]

const LeadsPage: React.FC = () => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<'All' | 'Hot' | 'Warm' | 'Cold'>('All')

  // ✅ Filter leads by status
  const filteredLeads =
    filter === 'All' ? sampleLeads : sampleLeads.filter((lead) => lead.status === filter)

  // ✅ Status badge component
  const StatusBadge: React.FC<{ status: Lead['status'] }> = ({ status }) => {
    const statusColors: Record<Lead['status'], string> = {
      Hot: 'bg-error-100 text-error-800',
      Warm: 'bg-warning-100 text-warning-800',
      Cold: 'bg-gray-100 text-gray-800'
    }

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          statusColors[status]
        }`}
      >
        {status}
      </span>
    )
  }

  // ✅ Define table columns
  const columns: TableColumn<Lead>[] = [
    {
      key: 'name',
      title: 'Name',
      render: (value, record) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{record.company}</div>
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
      key: 'value',
      title: 'Est. Value',
      render: (value) => <span className="font-medium">${value.toLocaleString()}</span>
    },
    {
      key: 'source',
      title: 'Source',
      render: (value) => <span className="text-sm text-gray-600">{value}</span>
    },
    {
      key: 'lastContact',
      title: 'Last Contact',
      render: (value) => (
        <span className="text-sm text-gray-600">
          {new Date(value).toLocaleDateString()}
        </span>
      )
    }
  ]

  // ✅ Row click handler
  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead)
    setIsModalOpen(true)
  }

  // ✅ Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedLead(null)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
            <p className="text-gray-600">Manage and track your sales leads</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Import Leads</Button>
            <Button>+ Add Lead</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{sampleLeads.length}</p>
              <p className="text-sm text-gray-600">Total Leads</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-error-600">
                {sampleLeads.filter((lead) => lead.status === 'Hot').length}
              </p>
              <p className="text-sm text-gray-600">Hot Leads</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-warning-600">
                {sampleLeads.filter((lead) => lead.status === 'Warm').length}
              </p>
              <p className="text-sm text-gray-600">Warm Leads</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">
                ${sampleLeads.reduce((sum, lead) => sum + lead.value, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Pipeline Value</p>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card padding="sm">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {['All', 'Hot', 'Warm', 'Cold'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as 'All' | 'Hot' | 'Warm' | 'Cold')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    filter === status
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search leads..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>
          </div>
        </Card>

        {/* Table */}
        <Table columns={columns} data={filteredLeads} onRowClick={handleRowClick} emptyText="No leads found" />

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Lead Details" size="lg">
          {selectedLead && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Name</label>
                      <p className="text-gray-900">{selectedLead.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-900">{selectedLead.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="text-gray-900">{selectedLead.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Company</label>
                      <p className="text-gray-900">{selectedLead.company}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Lead Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Status</label>
                      <div className="mt-1">
                        <StatusBadge status={selectedLead.status} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Estimated Value</label>
                      <p className="text-gray-900">${selectedLead.value.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Source</label>
                      <p className="text-gray-900">{selectedLead.source}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Created</label>
                      <p className="text-gray-900">
                        {new Date(selectedLead.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <Button variant="outline" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="secondary">Edit Lead</Button>
                <Button>Contact Lead</Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default LeadsPage
