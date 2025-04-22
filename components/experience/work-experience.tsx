import Image from 'next/image'
import dayjs from 'dayjs'
import type { WorkExperience as WorkExperienceType } from '@/types/experience'

export function WorkExperience({
  company,
  title,
  description,
  startDate,
  endDate,
  location,
  icon,
}: WorkExperienceType) {
  const formattedStartDate = dayjs(startDate).format('MMM YYYY')
  const formattedEndDate = endDate ? dayjs(endDate).format('MMM YYYY') : 'Present'

  return (
    <div className="group rounded-lg border border-secondary/20 p-6 transition-colors hover:border-secondary/40">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="relative h-12 w-12 overflow-hidden rounded-lg p-2">
              <Image
                src={icon}
                alt={`${company} logo`}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-primary">{company}</h3>
            <p className="text-secondary">{title}</p>
          </div>
        </div>
        <div className="text-sm text-primary/60">
          <time>{formattedStartDate}</time>
          {' – '}
          <time>{formattedEndDate}</time>
          <p>{location}</p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-primary/80">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
} 