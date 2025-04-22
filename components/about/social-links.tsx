'use client'

import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useState, useEffect } from 'react'
import type { SocialLink } from '@/types/about'
import { trackSocialLinkClick, trackResumeDownload } from '@/lib/amplitude'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileDown,
} as const

interface SocialLinksProps {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEmailClick = (email: string, platform: string) => {
    navigator.clipboard.writeText(email)
    toast({
      description: "Email copied to clipboard!",
      duration: 2000,
    })
    
    // Track email click
    trackSocialLinkClick(platform)
  }

  const handleSocialClick = (platform: string) => {
    trackSocialLinkClick(platform)
  }

  const handleResumeDownload = () => {
    trackResumeDownload()
  }

  return (
    <div className="flex gap-4">
      {links.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap]
        const isEmail = link.icon === 'email'
        const email = isEmail ? link.url.replace('mailto:', '') : ''

        // Render all links as standard links for server-side rendering
        // Only apply client-side behavior after hydration is complete
        if (!mounted) {
          return (
            <Button
              key={link.platform}
              variant="ghost"
              size="icon"
              className="hover:bg-secondary/20"
              asChild
            >
              <a
                href={isEmail ? link.url : link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          )
        }

        return (
          <Button
            key={link.platform}
            variant="ghost"
            size="icon"
            className="hover:bg-secondary/20"
            onClick={isEmail 
              ? () => handleEmailClick(email, link.platform) 
              : () => handleSocialClick(link.platform)}
            asChild={!isEmail}
          >
            {isEmail ? (
              <span aria-label={link.platform}>
                <Icon className="h-5 w-5" />
              </span>
            ) : (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                <Icon className="h-5 w-5" />
              </a>
            )}
          </Button>
        )
      })}
      
      {/* Resume Download Button */}
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-secondary/20"
        onClick={handleResumeDownload}
        asChild
      >
        <a
          href="/resume/Araad Shams Resume.pdf"
          download="Araad Shams Resume.pdf"
          aria-label="Download Resume"
        >
          <FileDown className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
} 