import { aboutSchema } from '@/types/about'
import { ProfileImage } from '@/components/about/profile-image'
import { SocialLinks } from '@/components/about/social-links'
import aboutData from '@/content/about.json'

export default function AboutPage() {
  const data = aboutSchema.parse(aboutData)

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-8 py-16">
      <ProfileImage
        src={data.profileImage}
        alt={data.name}
        className="animate-fade-in"
      />
      <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">
          {data.name}
        </h1>
        <p className="text-xl text-secondary md:text-2xl">
          {data.title}
        </p>
        <p className="max-w-lg text-base text-primary/80 md:text-lg">
          {data.bio}
        </p>
        <SocialLinks links={data.socialLinks} />
      </div>
    </main>
  )
}
