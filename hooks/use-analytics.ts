'use client';

import { 
  trackProjectOpen, 
  trackProjectFilter, 
  trackSocialLinkClick,
  trackResumeDownload
} from '@/lib/amplitude';

// Hook for tracking project-related events
export function useProjectsAnalytics() {
  const trackOpenProject = (projectId: string, projectName: string) => {
    trackProjectOpen(projectId, projectName);
  };

  const trackFilterChange = (filter: string, value: string) => {
    trackProjectFilter(filter, value);
  };

  return {
    trackOpenProject,
    trackFilterChange
  };
}

// Hook for tracking social link clicks
export function useSocialAnalytics() {
  const trackSocialClick = (platform: string) => {
    trackSocialLinkClick(platform);
  };

  return {
    trackSocialClick
  };
}

// Hook for tracking resume downloads
export function useResumeAnalytics() {
  const trackDownload = () => {
    trackResumeDownload();
  };

  return {
    trackDownload
  };
} 