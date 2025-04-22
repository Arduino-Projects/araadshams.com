import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  return (
    <div className={cn('relative aspect-square w-48 overflow-hidden rounded-full md:w-64', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 192px, 256px"
      />
    </div>
  )
} 