'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import { TrendingUp, DollarSign, Users, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function InsightsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Market Insights</h1>
                <p className="text-gray-600 mt-1">Stay ahead with real-time data on skills, rates, and industry trends.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Avg. Hourly Rate</h3>
                        <DollarSign className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">$65</span>
                        <span className="text-sm text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            +5%
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">For your top skills</p>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Skill Demand</h3>
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">High</span>
                        <span className="text-sm text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            +12%
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">React & Next.js</p>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Competition</h3>
                        <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">Medium</span>
                        <span className="text-sm text-gray-500 flex items-center">
                            Stable
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">15 applicants / job</p>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Top Region</h3>
                        <Globe className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">North America</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Highest paying clients</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Salary Trends Chart Placeholder */}
                <Card>
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Salary Trends by Skill</h2>
                    <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-gray-200">
                        {[
                            { label: 'React', height: '80%', value: '$75/hr' },
                            { label: 'Node', height: '70%', value: '$65/hr' },
                            { label: 'UI/UX', height: '60%', value: '$55/hr' },
                            { label: 'Python', height: '85%', value: '$80/hr' },
                            { label: 'PHP', height: '40%', value: '$40/hr' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group w-full">
                                <div
                                    className="w-full bg-primary-100 rounded-t-lg group-hover:bg-primary-200 transition-colors relative"
                                    style={{ height: item.height }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {item.value}
                                    </div>
                                </div>
                                <span className="text-xs font-medium text-gray-600">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Trending Skills */}
                <Card>
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Trending Skills</h2>
                    <div className="space-y-6">
                        {[
                            { skill: 'AI Integration', growth: '+145%', volume: 'Very High' },
                            { skill: 'Next.js 14', growth: '+85%', volume: 'High' },
                            { skill: 'Tailwind CSS', growth: '+60%', volume: 'High' },
                            { skill: 'TypeScript', growth: '+45%', volume: 'High' },
                            { skill: 'Rust', growth: '+30%', volume: 'Medium' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">{item.skill}</h3>
                                    <p className="text-xs text-gray-500">Volume: {item.volume}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-emerald-600">{item.growth}</span>
                                    <p className="text-xs text-gray-400">YoY Growth</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Regional Comparison */}
            <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Regional Demand & Rates</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Region</th>
                                <th className="px-6 py-3">Avg. Rate</th>
                                <th className="px-6 py-3">Demand Level</th>
                                <th className="px-6 py-3">Top Skill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { region: 'North America', rate: '$80 - $150', demand: 'High', skill: 'Full Stack Dev' },
                                { region: 'Western Europe', rate: '$60 - $100', demand: 'High', skill: 'Frontend Dev' },
                                { region: 'Asia Pacific', rate: '$30 - $60', demand: 'Very High', skill: 'Mobile Apps' },
                                { region: 'Latin America', rate: '$35 - $70', demand: 'Medium', skill: 'UI/UX Design' },
                            ].map((row, idx) => (
                                <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{row.region}</td>
                                    <td className="px-6 py-4">{row.rate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.demand === 'Very High' ? 'bg-purple-100 text-purple-800' :
                                                row.demand === 'High' ? 'bg-green-100 text-green-800' :
                                                    'bg-blue-100 text-blue-800'
                                            }`}>
                                            {row.demand}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{row.skill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
