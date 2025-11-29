'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Target, Users, Zap, Heart, Code, Globe } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Outsauce</h1>
                    <p className="text-xl text-blue-100">
                        AI-powered lead generation for the modern freelance economy
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Mission Section */}
                <section className="mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Outsauce is an AI-powered lead generation platform built to simplify how freelancers and clients connect.
                            Our system intelligently gathers profiles from major marketplaces and ranks them using modern AI matching algorithms.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With a clean UI, automated workflows, and secure communication features, Outsauce helps users save time,
                            improve accuracy, and make smarter decisions — all while staying fully open-source.
                        </p>
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code className="w-8 h-8" />,
                                title: 'Open Source First',
                                description: 'Built under MIT license, transparent and community-driven. No vendor lock-in, ever.'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'AI-Powered Efficiency',
                                description: 'Leverage cutting-edge AI to automate lead discovery, ranking, and matching.'
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'User-Centric Design',
                                description: 'Simple, intuitive interfaces that work for freelancers, agencies, and clients alike.'
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: 'Community Driven',
                                description: 'Built by freelancers, for freelancers. We listen to our community and evolve together.'
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: 'Quality Over Quantity',
                                description: 'Focus on meaningful connections and high-quality leads, not just numbers.'
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: 'Accessible to All',
                                description: 'Free and open-source, making professional lead generation accessible to everyone.'
                            }
                        ].map((value, idx) => (
                            <Card key={idx} hover>
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-50 text-primary-600 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* What We Do */}
                <section className="mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What We Do</h2>
                        <Card>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">For Freelancers</h3>
                                    <p className="text-gray-600">
                                        We help freelancers discover high-quality client leads automatically, generate compelling proposals with AI,
                                        track market rates, and manage all opportunities in one unified dashboard.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">For Clients</h3>
                                    <p className="text-gray-600">
                                        We provide clients with access to freelancers from multiple platforms, AI-ranked matches based on specific needs,
                                        secure messaging, and a centralized system to track all candidates.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">For Agencies</h3>
                                    <p className="text-gray-600">
                                        We enable agencies to manage multiple clients and freelancers efficiently, automate lead qualification,
                                        and scale their operations without expensive enterprise software.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Technology */}
                <section className="mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Outsauce is built with a modern, scalable tech stack designed for performance and reliability.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Next.js', 'Nest.js', 'Supabase', 'TypeScript', 'n8n', 'Apify'].map((tech) => (
                                <span key={tech} className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-6">
                            Join freelancers and agencies already using Outsauce to transform their lead generation.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/auth/register">
                                <Button>Get Started Free</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline">Contact Us</Button>
                            </Link>
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    )
}
