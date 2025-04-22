import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { projectsDataSchema, projectSchema } from '@/types/project'
import projectsIndex from '@/content/projects/index.json'
import toolsData from '@/content/projects/tools.json'
import { ImageCarousel } from '@/components/projects/image-carousel'
import { BackButton } from '@/components/projects/back-button'

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Function to get a specific project by ID
async function getProjectById(id: string) {
  try {
    const projectData = await import(`@/content/projects/${id}.json`)
    return projectSchema.parse(projectData.default)
  } catch (error) {
    return null
  }
}

// Add this function to generate static paths
export function generateStaticParams() {
  return projectsIndex.projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.id)
  
  // Map project tools to tool data, creating default entries for tools not in toolsData
  const toolsMap = new Map(toolsData.tools.map(tool => [tool.name, tool]))
  const tools = project?.tools.map(toolName => ({
    name: toolName,
    icon: toolsMap.get(toolName)?.icon || null
  })) || []

  if (!project) {
    notFound()
  }

  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="container py-24 animate-fade-in">
      <div className="mx-auto max-w-4xl space-y-8">
        <BackButton />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
          <p className="text-lg text-primary/80">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span>View Source</span>
              </a>
            )}
            {project.archivedDemoUrl && (
              <a
                href={project.archivedDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo (Archived)</span>
              </a>
            )}
            {project.postUrl && (
              <a
                href={project.postUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Devpost</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
            <span className="text-sm text-primary/60">{formattedDate}</span>
          </div>
        </div>

        <ImageCarousel images={project.images} alt={project.title} />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-lg border border-secondary/20 px-3 py-1.5"
              >
                {tool.icon && (
                  <img
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    className="h-4 w-4"
                  />
                )}
                <span className="text-sm font-medium text-primary">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {project.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              {section.title}
            </h2>
            {section.type === 'list' ? (
              <ul className="list-disc space-y-2 pl-4 text-primary/80">
                {(section.content as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className="prose prose-neutral dark:prose-invert">
                {section.content as string}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
} 