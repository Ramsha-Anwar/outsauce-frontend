// Complete Landing Page with all necessary sections based on SRS
import LandingNavbar from '../../components/layout/LandingNavbar'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Image from 'next/image'
import { Zap, Users, Target, Shield, TrendingUp, MessageSquare, BarChart3, Award, Check } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Outsauce — AI Lead Generation (Open Source)',
  description: 'Outsauce is a free, open-source AI lead generation platform for freelancers, agencies and small businesses.'
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <LandingNavbar className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 shadow-sm" />

      <main className="relative overflow-hidden">
        {/* Decorative gradient background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary-200 to-indigo-300 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-300 to-primary-200 blur-3xl opacity-60" />
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <section id = "hero" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 ring-1 ring-primary-200">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600" />
                Open Source • MIT
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">Outsauce — AI Lead Generation</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Generate, qualify, and manage leads with AI — built for freelancers, agencies, and small businesses. Self-host or run locally. No vendor lock-in.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/auth/register"><Button>Get Started</Button></a>
                <a href="/auth/login"><Button variant="outline">Login</Button></a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5 sm:max-w-md">
                <div className="rounded-xl border border-blue-100 bg-white/90 backdrop-blur px-4 py-4 shadow-sm ring-1 ring-blue-50">
                  <p className="text-xs text-gray-500">Qualified Leads</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">+324</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/90 backdrop-blur px-4 py-4 shadow-sm ring-1 ring-blue-50">
                  <p className="text-xs text-gray-500">Reply Rate</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">42%</p>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="lg:pl-6">
              <div className="relative w-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur shadow-lg">
                <div className="flex items-center gap-1 border-b border-gray-200 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-4">
                      <Card>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500">This Week</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">Leads Pipeline</p>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">+18%</span>
                        </div>
                        <div className="mt-3 h-24 w-full rounded-md bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 ring-1 ring-blue-100" />
                      </Card>

                      <Card>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">Top Sources</p>
                          <span className="text-xs text-gray-500">Last 7 days</span>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                          {['LinkedIn', 'Web', 'Referrals'].map((s) => (
                            <div key={s} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-gray-700">{s}</div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <Card>
                        <p className="text-xs text-gray-500">Today</p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">36</p>
                        <p className="text-xs text-gray-500">new leads</p>
                      </Card>

                      <Card>
                        <p className="text-xs text-gray-500">Meetings</p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">9</p>
                        <p className="text-xs text-gray-500">scheduled</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* About Us (NEW — replacing comparison section) */}
<section id="about" className="mt-20 bg-gradient-to-b from-gray-50 to-white py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
About Outsauce
</h2>
<p className="mt-6 text-lg text-gray-600 leading-relaxed">
Outsauce is an AI-powered lead generation platform built to simplify how freelancers and clients connect. Our system intelligently gathers profiles from major marketplaces and ranks them using modern AI matching algorithms.
</p>
<p className="mt-4 text-lg text-gray-600 leading-relaxed">
With a clean UI, automated workflows, and secure communication features, Outsauce helps users save time, improve accuracy, and make smarter decisions — all while staying fully open-source.
</p>
</div>
</section>        
{/* Why Choose Outsauce Section */}
<section id="why-outsauce" className="mt-20 bg-gradient-to-b from-white to-blue-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
        Why Choose Outsauce?
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Outsauce helps you discover, filter, and manage high-quality leads with powerful AI automation —
        fast, accurate, and fully open-source.
      </p>
    </div>

    {/* Value Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">⚡ Faster Lead Discovery</h3>
        <p className="mt-2 text-gray-600">
          Quickly find top freelancers from multiple platforms with automated profile sourcing.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">🎯 Higher Match Accuracy</h3>
        <p className="mt-2 text-gray-600">
          AI ranking ensures only the most relevant profiles rise to the top — no manual sorting.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">🔓 No Vendor Lock-In</h3>
        <p className="mt-2 text-gray-600">
          Self-host or run locally. You control your data, settings, and workflow without restrictions.
        </p>
      </div>

      {/* Card 4 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">💙 100% Open-Source</h3>
        <p className="mt-2 text-gray-600">
          Built under MIT license — transparent, flexible, and community-driven.
        </p>
      </div>

      {/* Card 5 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">🤖 AI-Powered Ranking</h3>
        <p className="mt-2 text-gray-600">
          Intelligent scoring evaluates skills, reviews, rates, and experience to surface the best talent.
        </p>
      </div>

      {/* Card 6 */}
      <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold text-gray-900">👥 Made for Everyone</h3>
        <p className="mt-2 text-gray-600">
          Built for freelancers, agencies, startups, and small businesses — simple and effective.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Key Features */}
        <section id="features" className="mt-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Generate Quality Leads</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Powerful AI-driven features designed specifically for freelancers and agencies</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'AI-Based Lead Generation & Ranking',
                  desc: 'Automatically discover and rank leads based on relevance, skills match, and conversion potential.'
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Smart Portfolio Builder',
                  desc: 'AI-assisted portfolio creation that highlights your best work and attracts ideal clients.'
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: 'Salary & Market Trend Predictor',
                  desc: 'Get real-time insights on market rates and pricing trends to stay competitive.'
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: 'AI Gig & Proposal Generator',
                  desc: 'Generate compelling proposals and gig descriptions tailored to each opportunity.'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Secure In-App Messaging',
                  desc: 'Communicate with clients securely through encrypted messaging system.'
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Centralized Freelancer Discovery',
                  desc: 'Access freelancers from multiple platforms in one unified interface.'
                }
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-20 bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="text-gray-600 mt-2">Get started in minutes, not hours</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Create Your Profile', desc: 'Set up your freelancer or client profile with skills and preferences' },
                { step: '2', title: 'AI Analyzes & Generates', desc: 'Our AI scans platforms and generates relevant lead matches' },
                { step: '3', title: 'Review & Connect', desc: 'Browse ranked leads and connect with top prospects' },
                { step: '4', title: 'Track & Manage', desc: 'Monitor everything from one unified dashboard' }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary-300 to-primary-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Freelancers vs For Clients */}
        <section id="use-cases" className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Built for Both Sides</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Freelancers</h3>
                <ul className="space-y-3">
                  {[
                    'Find high-quality client leads automatically',
                    'AI-powered proposal generation',
                    'Track market rates and stay competitive',
                    'Manage all opportunities in one place',
                    'Get ranked by your skills and experience'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Clients</h3>
                <ul className="space-y-3">
                  {[
                    'Access freelancers from multiple platforms',
                    'AI-ranked matches based on your needs',
                    'Post projects and get quality proposals',
                    'Secure messaging and communication',
                    'Track all candidates in one dashboard'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section  className="mt-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">Who It's Built For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { role: 'Freelancers', desc: 'Solo professionals looking to find clients and manage their business efficiently.' },
                { role: 'Agencies', desc: 'Teams managing multiple clients and freelancers across various projects.' },
                { role: 'Small Businesses', desc: 'Companies seeking quality freelance talent without expensive platforms.' }
              ].map(({ role, desc }) => (
                <Card key={role}>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600 mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{role}</h3>
                  <p className="text-sm text-gray-600 mt-2">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mt-20 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Enterprise-Grade Security</h2>
              <p className="mt-4 text-lg text-gray-600">
                Your data is protected with military-grade encryption and security best practices
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  { title: 'Encrypted Storage', desc: 'All credentials encrypted with secure hashing' },
                  { title: 'HTTPS/SSL', desc: 'Secure data transmission with TLS encryption' },
                  { title: 'Role-Based Access', desc: 'Granular permissions and access control' }
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        {/* Tech Stack / Open Source */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Source & Modern Tech Stack</h3>
                <p className="text-gray-600 mb-6">Built with Next.js, Nest.js, and Supabase</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {['Next.js', 'Nest.js', 'Supabase', 'TypeScript', 'n8n', 'Apify'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-500">MIT Licensed • Self-host or run locally • No vendor lock-in</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join freelancers and agencies already using Outsauce to discover quality leads with AI
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/auth/register">
                  <Button className="bg-blue text-primary-600 border-2 border-white hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Get Started Free
                  </Button>
                </a>
                <a href="/auth/login">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                    Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Questions or Feedback?</h3>
                  <p className="text-sm text-gray-600 mt-1">We'd love to hear from you. Reach out anytime.</p>
                </div>
                <div className="flex gap-3">
                  <a href="mailto:hello@outsauce.ai" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Contact us</Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-sm text-gray-600 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-300 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white ring-2 ring-blue-300 shadow-md">
                <Image
                  src="/assets/logo-v2.png"
                  alt="Outsauce logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <p className="font-semibold">Outsauce</p>
                <p className="text-xs text-blue-100">AI Lead Generation Platform</p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex items-center gap-6 text-xs text-white">
              <a className="hover:text-white transition-colors" href="#features">Features</a>
              <a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
              <a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
              <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            </div>

            <div className="mt-6 md:mt-0 text-xs text-blue-100">
              <p>© 2024 Outsauce. MIT Licensed.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}