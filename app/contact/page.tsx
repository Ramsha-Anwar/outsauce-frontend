'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-blue-100">
                        We'd love to hear from you. Reach out with questions, feedback, or just to say hello!
                    </p>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card hover>
                        <div className="flex items-start gap-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-3">
                                    For general inquiries, support, or feedback
                                </p>
                                <a href="mailto:hello@outsauce.ai" className="text-primary-600 hover:underline font-medium">
                                    hello@outsauce.ai
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card hover>
                        <div className="flex items-start gap-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex-shrink-0">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
                                <p className="text-gray-600 mb-3">
                                    Need help? Our support team is here for you
                                </p>
                                <a href="mailto:support@outsauce.ai" className="text-primary-600 hover:underline font-medium">
                                    support@outsauce.ai
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card hover>
                        <div className="flex items-start gap-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 text-white flex-shrink-0">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
                                <p className="text-gray-600 mb-3">
                                    Contribute, report issues, or explore the code
                                </p>
                                <a href="https://github.com/outsauce" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                                    github.com/outsauce
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card hover>
                        <div className="flex items-start gap-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
                                <p className="text-gray-600 mb-3">
                                    Connect with us professionally
                                </p>
                                <a href="https://linkedin.com/company/outsauce" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                                    linkedin.com/company/outsauce
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* FAQ Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <Card>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Outsauce really free?</h3>
                            <p className="text-gray-600">
                                Yes! Outsauce is 100% open-source under the MIT license. You can self-host it for free or use our hosted version.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started?</h3>
                            <p className="text-gray-600">
                                Simply create an account, set up your profile, and start discovering leads. Our AI will automatically match you with relevant opportunities.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I contribute to the project?</h3>
                            <p className="text-gray-600">
                                Absolutely! We welcome contributions. Check out our GitHub repository for contribution guidelines and open issues.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">What platforms do you integrate with?</h3>
                            <p className="text-gray-600">
                                We currently integrate with major freelance platforms including Upwork, Fiverr, and Freelancer.com, with more integrations coming soon.
                            </p>
                        </Card>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-6">
                            Join the community and start generating quality leads with AI
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/auth/register">
                                <Button>Create Free Account</Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="outline">Learn More</Button>
                            </Link>
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    )
}
