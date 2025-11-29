'use client'

import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus, Trash2, Upload, Wand2, Image as ImageIcon, Link as LinkIcon } from 'lucide-react'

export default function PortfolioPage() {
    const [skills, setSkills] = useState(['React', 'TypeScript', 'Tailwind CSS', 'Node.js'])
    const [newSkill, setNewSkill] = useState('')

    const addSkill = () => {
        if (newSkill && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill])
            setNewSkill('')
        }
    }

    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter(skill => skill !== skillToRemove))
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Smart Portfolio</h1>
                    <p className="text-gray-600 mt-1">Showcase your best work and let AI help you stand out.</p>
                </div>
                <Button>
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Preview Portfolio
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Projects Section */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Featured Projects</h2>
                            <Button size="sm" variant="outline">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Project
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Project Card 1 */}
                            <Card className="group cursor-pointer hover:border-primary-300 transition-colors">
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    <ImageIcon className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900">E-commerce Dashboard</h3>
                                <p className="text-sm text-gray-500 mt-1">React, Redux, Tailwind</p>
                            </Card>

                            {/* Project Card 2 */}
                            <Card className="group cursor-pointer hover:border-primary-300 transition-colors">
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    <ImageIcon className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900">Finance App UI</h3>
                                <p className="text-sm text-gray-500 mt-1">Figma, Mobile Design</p>
                            </Card>

                            {/* Add New Placeholder */}
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary-400 hover:bg-primary-50 transition-all cursor-pointer h-full min-h-[200px]">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-500">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <h3 className="font-medium text-gray-900">Add New Project</h3>
                                <p className="text-sm text-gray-500 mt-1">Upload images or add a link</p>
                            </div>
                        </div>
                    </section>

                    {/* Work Experience */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
                            <Button size="sm" variant="outline">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Experience
                            </Button>
                        </div>
                        <Card>
                            <div className="space-y-6">
                                <div className="border-l-2 border-gray-200 pl-4 pb-6 last:pb-0">
                                    <h3 className="font-semibold text-gray-900">Senior Frontend Developer</h3>
                                    <p className="text-sm text-gray-600">TechCorp Inc. • 2021 - Present</p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Led the frontend team in rebuilding the core product using Next.js and TypeScript. Improved performance by 40%.
                                    </p>
                                </div>
                                <div className="border-l-2 border-gray-200 pl-4 pb-6 last:pb-0">
                                    <h3 className="font-semibold text-gray-900">UI Developer</h3>
                                    <p className="text-sm text-gray-600">Creative Agency • 2019 - 2021</p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Developed responsive websites for various clients using React and SCSS.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* AI Suggestions */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                        <div className="flex items-center gap-2 mb-4 text-indigo-700">
                            <Wand2 className="w-5 h-5" />
                            <h2 className="font-semibold">AI Suggestions</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                                <p className="text-gray-700">
                                    Adding <span className="font-medium text-indigo-600">"Next.js"</span> to your skills could increase your visibility by 15%.
                                </p>
                                <button className="text-xs text-indigo-600 font-medium mt-2 hover:underline">Add Skill</button>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                                <p className="text-gray-700">
                                    Your bio is a bit short. Let AI expand it to highlight your leadership experience.
                                </p>
                                <button className="text-xs text-indigo-600 font-medium mt-2 hover:underline">Enhance Bio</button>
                            </div>
                        </div>
                    </div>

                    {/* Skills Editor */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {skills.map(skill => (
                                <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                                    {skill}
                                    <button onClick={() => removeSkill(skill)} className="ml-2 text-gray-400 hover:text-red-500">
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                placeholder="Add a skill..."
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                            />
                            <Button size="sm" onClick={addSkill} disabled={!newSkill}>Add</Button>
                        </div>
                    </Card>

                    {/* Resume Upload */}
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resume / CV</h2>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Drop your resume here or click to upload</p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 5MB</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function EyeIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    )
}
