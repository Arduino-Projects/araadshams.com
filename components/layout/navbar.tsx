'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const routes = [
  { path: '/', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
] as const

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-secondary/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-center">
        <ul className="flex gap-8">
          {routes.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary',
                  pathname === path ? 'text-secondary' : 'text-primary/80'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 