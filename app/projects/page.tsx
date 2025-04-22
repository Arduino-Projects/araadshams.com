'use client'

import { useState, useMemo } from 'react'
import { projectsIndexSchema } from '@/types/project'
import projectsIndex from '@/content/projects/index.json'
import toolsData from '@/content/projects/tools.json'
import { FilterBar } from '@/components/projects/filter-bar'
import { ProjectCard } from '@/components/projects/project-card'
import type { Tool } from '@/types/project'

export default function ProjectsPage() {
  const data = projectsIndexSchema.parse({
    tools: toolsData.tools,
    projects: projectsIndex.projects
  })
  const [selectedTools, setSelectedTools] = useState<Tool[]>([])

  const filteredProjects = useMemo(() => {
    if (selectedTools.length === 0) return data.projects

    return data.projects.filter((project) =>
      selectedTools.every((tool) =>
        project.tools.includes(tool.name)
      )
    )
  }, [data.projects, selectedTools])

  const handleSelectTool = (tool: Tool) => {
    setSelectedTools((prev) => [...prev, tool])
  }

  const handleDeselectTool = (tool: Tool) => {
    setSelectedTools((prev) =>
      prev.filter((t) => t.name !== tool.name)
    )
  }

  return (
    <main className="container py-24 animate-fade-in">
      <div className="mx-auto max-w-5xl space-y-12">
        <section>
          <h1 className="text-3xl font-bold text-primary mb-2">Projects</h1>
          <p className="text-primary/60 mb-8">Self-directed chaos with a Git commit history.</p>
          <FilterBar
            tools={data.tools}
            selectedTools={selectedTools}
            onSelectTool={handleSelectTool}
            onDeselectTool={handleDeselectTool}
          />
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-primary/60 py-12">
              No projects match the selected filters.
            </p>
          )}
        </section>
      </div>
    </main>
  )
} 