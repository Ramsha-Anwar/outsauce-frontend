'use client'

import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Card>
                    <div className="prose prose-blue max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Outsauce ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you use our AI-powered lead generation platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Account credentials (username, password)</li>
                                <li>Profile information (skills, experience, portfolio)</li>
                                <li>Payment information (processed securely through third-party providers)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When you use our platform, we automatically collect:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Usage data (pages visited, features used, time spent)</li>
                                <li>Device information (browser type, operating system, IP address)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the collected information for:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Providing and maintaining our services</li>
                                <li>Personalizing your experience and improving our platform</li>
                                <li>Processing transactions and sending related information</li>
                                <li>Communicating with you about updates, security alerts, and support</li>
                                <li>Analyzing usage patterns to enhance our AI algorithms</li>
                                <li>Preventing fraud and ensuring platform security</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement industry-standard security measures to protect your information, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Secure password hashing</li>
                                <li>Regular security audits and updates</li>
                                <li>Access controls and authentication mechanisms</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Correct inaccurate or incomplete information</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to or restrict certain processing activities</li>
                                <li>Data portability (receive your data in a structured format)</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your
                                browser settings, though some features may not function properly if cookies are disabled.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform is not intended for users under 18 years of age. We do not knowingly collect information from children.
                                If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy periodically. We will notify you of significant changes via email or through a
                                prominent notice on our platform. Continued use after changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p className="text-gray-600 mt-4">
                                <strong>Email:</strong> <a href="mailto:privacy@outsauce.ai" className="text-primary-600 hover:underline">privacy@outsauce.ai</a>
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
