'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'account', label: 'Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'billing', label: 'Billing' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="flex space-x-8">
          {/* Sidebar Navigation */}
          <div className="w-64 shrink-0">
            <Card padding="none">
              <nav className="space-y-1 p-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {activeTab === 'profile' && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-xl">JD</span>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">Change Photo</Button>
                      <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john@outsauce.ai"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue="Lead generation specialist with 5+ years of experience helping businesses grow their customer base through AI-powered solutions."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'account' && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        <p className="text-xs text-gray-500 mt-1">Currently disabled</p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  <div>
                    <h3 className="text-sm font-medium text-error-700 mb-3">Danger Zone</h3>
                    <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-error-800">Delete Account</p>
                          <p className="text-sm text-error-600">Permanently delete your account and all data</p>
                        </div>
                        <Button variant="danger">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'notifications' && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">New Leads</p>
                          <p className="text-sm text-gray-500">Get notified when new leads are generated</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Lead Status Updates</p>
                          <p className="text-sm text-gray-500">Get notified when lead status changes</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Project Updates</p>
                          <p className="text-sm text-gray-500">Get notified about project milestones</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Push Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Urgent Alerts</p>
                          <p className="text-sm text-gray-500">Critical notifications that require immediate attention</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Daily Summary</p>
                          <p className="text-sm text-gray-500">Daily digest of your lead generation activity</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'integrations' && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Integrations</h2>
                <div className="space-y-6">
                  <p className="text-gray-600">Connect Outsauce with your favorite tools and platforms.</p>
                  
                  <div className="grid gap-4">
                    {[
                      { name: 'LinkedIn', description: 'Import leads from LinkedIn Sales Navigator', connected: true },
                      { name: 'Salesforce', description: 'Sync leads with your Salesforce CRM', connected: false },
                      { name: 'HubSpot', description: 'Integrate with HubSpot marketing tools', connected: true },
                      { name: 'Zapier', description: 'Connect with 3000+ apps via Zapier', connected: false },
                      { name: 'Slack', description: 'Get lead notifications in Slack', connected: false }
                    ].map((integration) => (
                      <div key={integration.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{integration.name}</h3>
                          <p className="text-sm text-gray-500">{integration.description}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          {integration.connected && (
                            <span className="px-2 py-1 text-xs font-medium text-success-800 bg-success-100 rounded-full">
                              Connected
                            </span>
                          )}
                          <Button variant={integration.connected ? 'outline' : 'primary'} size="sm">
                            {integration.connected ? 'Disconnect' : 'Connect'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'billing' && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing & Subscription</h2>
                <div className="space-y-6">
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-primary-900">Pro Plan</h3>
                        <p className="text-sm text-primary-700">$99/month • Billed monthly</p>
                      </div>
                      <Button variant="outline">Change Plan</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Payment Method</h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-5 bg-gray-300 rounded"></div>
                          <span className="text-sm text-gray-900">•••• •••• •••• 4242</span>
                          <span className="text-sm text-gray-500">Expires 12/25</span>
                        </div>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Billing History</h3>
                    <div className="border border-gray-200 rounded-lg">
                      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                          <span>Date</span>
                          <span>Amount</span>
                          <span>Status</span>
                          <span></span>
                        </div>
                      </div>
                      {[
                        { date: 'Jan 15, 2024', amount: '$99.00', status: 'Paid' },
                        { date: 'Dec 15, 2023', amount: '$99.00', status: 'Paid' },
                        { date: 'Nov 15, 2023', amount: '$99.00', status: 'Paid' }
                      ].map((invoice, index) => (
                        <div key={index} className="px-4 py-3 border-b border-gray-200 last:border-b-0">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-900">{invoice.date}</span>
                            <span className="text-gray-900">{invoice.amount}</span>
                            <span className="px-2 py-1 text-xs font-medium text-success-800 bg-success-100 rounded-full">
                              {invoice.status}
                            </span>
                            <Button variant="ghost" size="sm">Download</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage