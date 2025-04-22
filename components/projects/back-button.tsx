'use client'

import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </button>
  )
} 