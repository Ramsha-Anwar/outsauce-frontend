"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#contact', label: 'Contact' }
]

const navRoutes = [
  { href: '/auth/login', label: 'Login' }
]

export default function LandingNavbar({ className = "" }: { className?: string }) {

  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    if (drawerOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [drawerOpen])

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-300 backdrop-blur shadow-sm border-b
          ${scrolled
            ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 border-blue-400'
            : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 border-blue-400'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Outsauce home">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map(l => {
              const id = l.href.replace('#', '')
              return (
                <button
                  key={l.href}
                  onClick={handleScroll(id)}
                  className="text-white hover:text-white/90 transition-colors relative 
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 
                  after:bg-white after:transition-all hover:after:w-full focus:outline-none"
                >
                  {l.label}
                </button>
              )
            })}
            {navRoutes.map(r => (
              <Link
                key={r.href}
                href={r.href}
                className="text-white hover:text-white/90 transition-colors relative 
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 
                after:bg-white after:transition-all hover:after:w-full focus:outline-none"
              >
                {r.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/auth/register"
              className="rounded-md bg-gradient-to-r from-primary-700 to-indigo-700 px-5 py-2 
              text-white text-sm font-medium shadow hover:shadow-md hover:from-primary-800 
              hover:to-indigo-800 transition-all focus:outline-none focus:ring-2 
              focus:ring-primary-400"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden bg-white ring-2 ring-blue-300 shadow-md">
              <Image
                src="/assets/logo-v2.png"
                alt="Outsauce logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-gray-900">Outsauce</span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col p-4 space-y-1">
          {links.map(l => {
            const id = l.href.replace('#', '')
            return (
              <button
                key={l.href}
                onClick={handleScroll(id)}
                className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors font-medium"
              >
                {l.label}
              </button>
            )
          })}
          {navRoutes.map(r => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setDrawerOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors font-medium"
            >
              {r.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/auth/register"
            onClick={() => setDrawerOpen(false)}
            className="mt-4 rounded-md bg-gradient-to-r from-primary-700 to-indigo-700 px-5 py-3 text-center
            text-white text-sm font-medium shadow hover:shadow-md hover:from-primary-800 
            hover:to-indigo-800 transition-all"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  )
}
