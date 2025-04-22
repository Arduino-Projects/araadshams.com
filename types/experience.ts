import { z } from 'zod'

export const workExperienceSchema = z.object({
  company: z.string(),
  title: z.string(),
  description: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string().optional(),
  location: z.string(),
  icon: z.string().optional(),
})

export const educationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
  details: z.array(z.string()).optional(),
  icon: z.string().optional(),
})

export const experienceSchema = z.object({
  work: z.array(workExperienceSchema),
  education: z.array(educationSchema),
})

export type WorkExperience = z.infer<typeof workExperienceSchema>
export type Education = z.infer<typeof educationSchema>
export type ExperienceData = z.infer<typeof experienceSchema> 