import { z } from 'zod'

export const toolSchema = z.object({
  name: z.string(),
  icon: z.string().url(),
  filterable: z.boolean().default(true),
})

export const sectionSchema = z.object({
  title: z.string(),
  content: z.union([
    z.string(),
    z.array(z.string())
  ]),
  type: z.enum(['text', 'list']).default('text')
})

export const projectSummarySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  date: z.string(),
  tools: z.array(z.string()),
})

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  date: z.string(),
  tools: z.array(z.string()),
  githubUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  archivedDemoUrl: z.string().optional(),
  postUrl: z.string().optional(),
  sections: z.array(sectionSchema)
})

export const projectsDataSchema = z.object({
  tools: z.array(toolSchema),
  projects: z.array(projectSchema),
})

export const projectsIndexSchema = z.object({
  tools: z.array(toolSchema),
  projects: z.array(projectSummarySchema),
})

export type Tool = z.infer<typeof toolSchema>
export type Project = z.infer<typeof projectSchema>
export type ProjectSummary = z.infer<typeof projectSummarySchema>
export type ProjectsData = z.infer<typeof projectsDataSchema>
export type ProjectsIndex = z.infer<typeof projectsIndexSchema> 