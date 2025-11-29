'use client'

import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Wand2, Copy, Check, RefreshCw } from 'lucide-react'

export default function GigsPage() {
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedContent, setGeneratedContent] = useState('')

    const handleGenerate = () => {
        setIsGenerating(true)
        // Simulate AI generation
        setTimeout(() => {
            setGeneratedContent(`
**Title:** Professional React & Next.js Development for Modern Web Apps

**Description:**
I will build a high-performance, SEO-friendly web application using Next.js and React. With over 5 years of experience, I specialize in creating responsive, scalable, and user-centric interfaces.

**What you get:**
- Custom React components
- Server-side rendering for speed
- Responsive design (Mobile/Tablet/Desktop)
- Clean, maintainable code
- API integration

**Tech Stack:**
- React, Next.js
- Tailwind CSS
- TypeScript
- Node.js

Let's bring your vision to life! Contact me to discuss your project.
      `.trim())
            setIsGenerating(false)
        }, 1500)
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Gig Builder</h1>
                <p className="text-gray-600 mt-1">Create compelling gig descriptions optimized for freelance platforms.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <div className="space-y-6">
                    <Card>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Gig Details</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service Category</label>
                                <select className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300">
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Content Writing</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Main Skill / Technology</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    placeholder="e.g. React, Logo Design, SEO"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    placeholder="e.g. Startups, E-commerce brands"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Key Features (Optional)</label>
                                <textarea
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 h-24"
                                    placeholder="List specific deliverables or features..."
                                ></textarea>
                            </div>

                            <Button
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
                                onClick={handleGenerate}
                                disabled={isGenerating}
                            >
                                {isGenerating ? (
                                    <>
                                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                        Generating Magic...
                                    </>
                                ) : (
                                    <>
                                        <Wand2 className="w-4 h-4 mr-2" />
                                        Generate with AI
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>

                {/* Output Preview */}
                <div className="space-y-6">
                    <Card className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Generated Description</h2>
                            {generatedContent && (
                                <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(generatedContent)}>
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy
                                </Button>
                            )}
                        </div>

                        <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200 overflow-y-auto min-h-[400px]">
                            {generatedContent ? (
                                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-700">
                                    {generatedContent}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                    <Wand2 className="w-12 h-12 mb-4 opacity-20" />
                                    <p>Fill in the details and click Generate</p>
                                    <p className="text-sm mt-2">AI will craft a professional gig description for you</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
