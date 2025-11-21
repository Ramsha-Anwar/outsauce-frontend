import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'md' 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-soft border border-gray-200'
  const hoverClasses = hover ? 'card-hover cursor-pointer' : ''
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card