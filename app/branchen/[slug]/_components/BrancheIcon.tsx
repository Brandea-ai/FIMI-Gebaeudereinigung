'use client'

import { Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'

interface BrancheIconProps {
  iconName: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function BrancheIcon({ iconName, size = 24, strokeWidth = 1.5, className = '' }: BrancheIconProps) {
  switch (iconName) {
    case 'Building2':
      return <Building2 size={size} strokeWidth={strokeWidth} className={className} />
    case 'Factory':
      return <Factory size={size} strokeWidth={strokeWidth} className={className} />
    case 'Stethoscope':
      return <Stethoscope size={size} strokeWidth={strokeWidth} className={className} />
    case 'ShoppingBag':
      return <ShoppingBag size={size} strokeWidth={strokeWidth} className={className} />
    case 'UtensilsCrossed':
      return <UtensilsCrossed size={size} strokeWidth={strokeWidth} className={className} />
    case 'GraduationCap':
      return <GraduationCap size={size} strokeWidth={strokeWidth} className={className} />
    case 'Dumbbell':
      return <Dumbbell size={size} strokeWidth={strokeWidth} className={className} />
    case 'Warehouse':
      return <Warehouse size={size} strokeWidth={strokeWidth} className={className} />
    case 'Home':
      return <Home size={size} strokeWidth={strokeWidth} className={className} />
    case 'Landmark':
      return <Landmark size={size} strokeWidth={strokeWidth} className={className} />
    case 'Banknote':
      return <Banknote size={size} strokeWidth={strokeWidth} className={className} />
    case 'Car':
      return <Car size={size} strokeWidth={strokeWidth} className={className} />
    default:
      return <Building2 size={size} strokeWidth={strokeWidth} className={className} />
  }
}
