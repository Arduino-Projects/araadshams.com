import { z } from 'zod'

export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
  icon: z.string()
})

export const aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  profileImage: z.string(),
  socialLinks: z.array(socialLinkSchema)
})

export type SocialLink = z.infer<typeof socialLinkSchema>
export type AboutData = z.infer<typeof aboutSchema> 