'use client'

import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Search, MapPin, Clock, DollarSign, Filter, Star, Bookmark } from 'lucide-react'

export default function MarketplacePage() {
    const [searchTerm, setSearchTerm] = useState('')

    const jobs = [
        {
            id: 1,
            title: 'Senior React Developer for SaaS Dashboard',
            client: 'TechFlow Systems',
            rating: 4.9,
            reviews: 12,
            location: 'Remote (US)',
            type: 'Contract',
            budget: '$60 - $80 / hr',
            posted: '2 hours ago',
            description: 'We are looking for an experienced React developer to help us build a new analytics dashboard. Must have experience with Next.js, Tailwind CSS, and Recharts.',
            skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            isHot: true
        },
        {
            id: 2,
            title: 'UI/UX Designer for Mobile App',
            client: 'GreenLeaf Startup',
            rating: 4.5,
            reviews: 4,
            location: 'Remote (Anywhere)',
            type: 'Fixed Price',
            budget: '$3,000',
            posted: '5 hours ago',
            description: 'Need a modern, clean design for a sustainable lifestyle mobile app. Deliverables include Figma files and a clickable prototype.',
            skills: ['Figma', 'Mobile Design', 'Prototyping'],
            isHot: false
        },
        {
            id: 3,
            title: 'Full Stack Developer (MERN)',
            client: 'E-Shop Solutions',
            rating: 5.0,
            reviews: 28,
            location: 'Remote (EU)',
            type: 'Part-time',
            budget: '$40 - $55 / hr',
            posted: '1 day ago',
            description: 'Ongoing maintenance and feature development for an existing e-commerce platform built with MERN stack.',
            skills: ['MongoDB', 'Express', 'React', 'Node.js'],
            isHot: false
        },
        {
            id: 4,
            title: 'WordPress Expert for Custom Theme',
            client: 'Creative Agency',
            rating: 4.8,
            reviews: 156,
            location: 'Remote',
            type: 'One-time',
            budget: '$800',
            posted: '1 day ago',
            description: 'Convert a provided PSD design into a fully functional, responsive WordPress theme. Must follow best practices.',
            skills: ['WordPress', 'PHP', 'CSS', 'HTML'],
            isHot: false
        }
    ]

    return (
        <div className="space-y-8">
            {/* Header & Search */}
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Job Marketplace</h1>
                    <p className="text-gray-600 mt-1">Discover opportunities tailored to your skills.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for jobs, skills, or clients..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Filters
                    </Button>
                    <Button className="flex items-center gap-2">
                        Search Jobs
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="hidden lg:block space-y-6">
                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
                        <div className="space-y-2">
                            {['Web Development', 'Mobile Apps', 'Design', 'Writing', 'Marketing', 'Data Science'].map(cat => (
                                <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4">Job Type</h3>
                        <div className="space-y-2">
                            {['Fixed Price', 'Hourly', 'Contract', 'Full-time'].map(type => (
                                <label key={type} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4">Budget Range</h3>
                        <div className="space-y-2">
                            {['Under $100', '$100 - $500', '$500 - $1k', '$1k - $5k', '$5k+'].map(range => (
                                <label key={range} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                    {range}
                                </label>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Job List */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Showing {jobs.length} results</span>
                        <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium text-gray-700">
                            <option>Newest First</option>
                            <option>Highest Budget</option>
                            <option>Best Match</option>
                        </select>
                    </div>

                    {jobs.map(job => (
                        <Card key={job.id} hover className="border border-gray-200">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors">
                                                {job.title}
                                            </h2>
                                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                                                <span className="font-medium text-gray-900">{job.client}</span>
                                                <div className="flex items-center text-amber-500">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <span className="ml-1 text-gray-700">{job.rating}</span>
                                                    <span className="ml-1 text-gray-400">({job.reviews})</span>
                                                </div>
                                                <span>•</span>
                                                <div className="flex items-center">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {job.isHot && (
                                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                                    Hot Lead
                                                </span>
                                            )}
                                            <button className="p-2 text-gray-400 hover:text-primary-600 rounded-full hover:bg-gray-100 transition-colors">
                                                <Bookmark className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {job.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:min-w-[140px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                                    <div className="text-left md:text-right">
                                        <div className="font-bold text-gray-900 text-lg">{job.budget}</div>
                                        <div className="text-xs text-gray-500">{job.type}</div>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <div className="flex items-center text-xs text-gray-500 mb-2 md:justify-end">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {job.posted}
                                        </div>
                                        <Button size="sm" className="w-full">Apply Now</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}

                    <div className="flex justify-center mt-8">
                        <Button variant="outline">Load More Jobs</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
