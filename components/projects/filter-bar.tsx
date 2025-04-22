'use client'

import { Tool } from '@/types/project'
import { ToolFilter } from '@/components/projects/tool-filter'

interface FilterBarProps {
  tools: Tool[]
  selectedTools: Tool[]
  onSelectTool: (tool: Tool) => void
  onDeselectTool: (tool: Tool) => void
}

export function FilterBar({
  tools,
  selectedTools,
  onSelectTool,
  onDeselectTool,
}: FilterBarProps) {
  const filterableTools = tools.filter(tool => tool.filterable)
  
  return (
    <div className="flex flex-wrap gap-2">
      {filterableTools.map((tool) => (
        <ToolFilter
          key={tool.name}
          tool={tool}
          isSelected={selectedTools.some((t) => t.name === tool.name)}
          onSelect={onSelectTool}
          onDeselect={onDeselectTool}
        />
      ))}
    </div>
  )
} 