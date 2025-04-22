import * as amplitude from '@amplitude/analytics-browser';

// Event types
export enum EventType {
  PAGE_VIEW = 'page_view',
  PROJECT_OPEN = 'project_open',
  PROJECT_FILTER = 'project_filter',
  SOCIAL_LINK_CLICK = 'social_link_click',
  DOWNLOAD_RESUME = 'download_resume'
}

// Initialize Amplitude
export const initAmplitude = () => {
  if (typeof window !== 'undefined') {
    // Please don't mess with me :(
    amplitude.init('561768765cfb94a42c517e5b0acbc102', {
      defaultTracking: {
        sessions: true,
        pageViews: false,
        formInteractions: false,
        fileDownloads: false
      },
      trackingOptions: {
        ipAddress: true
      }
    });
  }
};

// Track page view
export const trackPageView = (pageName: string) => {
  if (typeof window === 'undefined') return;
  
  amplitude.track(EventType.PAGE_VIEW, {
    page_name: pageName
  });
};

// Track project open
export const trackProjectOpen = (projectId: string, projectName: string) => {
  if (typeof window === 'undefined') return;
  
  amplitude.track(EventType.PROJECT_OPEN, {
    project_id: projectId,
    project_name: projectName
  });
};

// Track project filter
export const trackProjectFilter = (filter: string, value: string) => {
  if (typeof window === 'undefined') return;
  
  amplitude.track(EventType.PROJECT_FILTER, {
    filter_name: filter,
    filter_value: value
  });
};

// Track social link click
export const trackSocialLinkClick = (platform: string) => {
  if (typeof window === 'undefined') return;
  
  amplitude.track(EventType.SOCIAL_LINK_CLICK, {
    platform
  });
};

// Track resume download
export const trackResumeDownload = () => {
  if (typeof window === 'undefined') return;
  
  amplitude.track(EventType.DOWNLOAD_RESUME);
}; 