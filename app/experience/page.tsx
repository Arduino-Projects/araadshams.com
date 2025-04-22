'use client'

import { experienceSchema } from '@/types/experience'
import experienceData from '@/content/experience.json'
import { WorkExperience } from '@/components/experience/work-experience'
import { Education } from '@/components/experience/education'
import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'
import { trackResumeDownload } from '@/lib/amplitude'

export default function ExperiencePage() {
  const data = experienceSchema.parse(experienceData)
  
  const handleResumeDownload = () => {
    trackResumeDownload()
  }

  return (
    <main className="container py-24 animate-fade-in">
      <div className="mx-auto max-w-3xl space-y-12">
        <section>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Work Experience</h2>
              <p className="text-primary/60">Where I've professionally pretended to know what I'm doing</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:bg-secondary/10 border-secondary/30 hover:border-secondary/60 mt-3" 
              asChild
            >
              <a 
                href="/resume/Araad Shams Resume.pdf" 
                download="Araad Shams Resume.pdf"
                className="flex items-center gap-1"
                aria-label="Download Resume"
                onClick={handleResumeDownload}
              >
                <FileDown className="h-4 w-4" />
                <span className="hidden sm:inline">Download Resume</span>
              </a>
            </Button>
          </div>
          <div className="space-y-8">
            {data.work.map((job) => (
              <WorkExperience key={`${job.company}-${job.startDate}`} {...job} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">Education</h2>
          <p className="text-primary/60 mb-8">Where I paid a lot of money to professionally pretend to know what I was doing</p>
          <div className="space-y-8">
            {data.education.map((edu) => (
              <Education key={`${edu.school}-${edu.startDate}`} {...edu} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 