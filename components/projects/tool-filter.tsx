'use client'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Tool } from '@/types/project'
import { trackProjectFilter } from '@/lib/amplitude'

interface ToolFilterProps {
  tool: Tool
  isSelected: boolean
  onSelect: (tool: Tool) => void
  onDeselect: (tool: Tool) => void
}

export function ToolFilter({ tool, isSelected, onSelect, onDeselect }: ToolFilterProps) {
  const handleToggleFilter = () => {
    // Track filter toggle action
    trackProjectFilter('tool', tool.name);
    
    // Perform the actual toggle
    isSelected ? onDeselect(tool) : onSelect(tool);
  };

  return (
    <button
      onClick={handleToggleFilter}
      className={cn(
        'flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
        isSelected
          ? 'border-secondary bg-secondary/10 text-secondary'
          : 'border-secondary/20 text-primary/60 hover:border-secondary/40 hover:text-primary'
      )}
    >
      <img
        src={tool.icon}
        alt={`${tool.name} icon`}
        className="h-4 w-4"
      />
      <span>{tool.name}</span>
      {isSelected && <X className="h-4 w-4" />}
    </button>
  )
} 