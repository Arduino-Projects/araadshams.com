'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project, ProjectSummary } from '@/types/project'
import { trackProjectOpen } from '@/lib/amplitude'

interface ProjectCardProps {
  project: ProjectSummary
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleProjectClick = () => {
    trackProjectOpen(project.id, project.title)
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-secondary/20 bg-background transition-colors hover:border-secondary/40"
      onClick={handleProjectClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
        <p className="text-sm text-primary/80 line-clamp-2">{project.description}</p>
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
} 