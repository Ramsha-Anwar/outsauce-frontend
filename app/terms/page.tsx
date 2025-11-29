'use client'

import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
                    <p className="text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Card>
                    <div className="prose prose-blue max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing or using Outsauce ("the Platform"), you agree to be bound by these Terms of Service ("Terms").
                                If you do not agree to these Terms, please do not use the Platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Outsauce is an AI-powered lead generation platform that connects freelancers and clients. The Platform provides
                                tools for profile discovery, AI-based ranking, proposal generation, and communication management.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Registration</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You must create an account to use certain features. You agree to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and update your information as needed</li>
                                <li>Keep your password secure and confidential</li>
                                <li>Notify us immediately of any unauthorized access</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Account Responsibility</h3>
                            <p className="text-gray-600 leading-relaxed">
                                You are responsible for all activities that occur under your account. We are not liable for any loss or damage
                                arising from unauthorized use of your account.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You agree NOT to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Upload malicious code or viruses</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Scrape or collect data without permission</li>
                                <li>Attempt to gain unauthorized access to the Platform</li>
                                <li>Use the Platform for fraudulent or deceptive purposes</li>
                                <li>Impersonate any person or entity</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Platform Content</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Platform and its original content, features, and functionality are owned by Outsauce and are protected by
                                international copyright, trademark, and other intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 User Content</h3>
                            <p className="text-gray-600 leading-relaxed">
                                You retain ownership of content you submit to the Platform. By submitting content, you grant us a worldwide,
                                non-exclusive, royalty-free license to use, reproduce, and display your content for the purpose of operating
                                and improving the Platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Open Source License</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Outsauce is released under the MIT License. The source code is available for inspection, modification, and
                                distribution in accordance with the MIT License terms. However, these Terms of Service govern your use of
                                the hosted Platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                                INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Merchantability or fitness for a particular purpose</li>
                                <li>Accuracy, reliability, or completeness of content</li>
                                <li>Uninterrupted or error-free operation</li>
                                <li>Security or freedom from viruses</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUTSAUCE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to suspend or terminate your account at any time, with or without notice, for violations
                                of these Terms or for any other reason. You may also terminate your account at any time by contacting us.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may modify these Terms at any time. We will notify you of significant changes via email or through the Platform.
                                Continued use after changes constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict
                                of law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For questions about these Terms, please contact us at:
                            </p>
                            <p className="text-gray-600 mt-4">
                                <strong>Email:</strong> <a href="mailto:legal@outsauce.ai" className="text-primary-600 hover:underline">legal@outsauce.ai</a>
                            </p>
                        </section>
                    </div>
                </Card>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-primary-600 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </main>
        </div>
    )
}
