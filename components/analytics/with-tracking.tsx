'use client';

import React from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { EventType } from '@/lib/amplitude';

type WithTrackingProps = {
  eventType: EventType;
  eventProperties?: Record<string, any>;
};

export function withTracking<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithTrackingComponent({
    eventType,
    eventProperties = {},
    ...props
  }: WithTrackingProps & P) {
    const wrappedProps = {
      ...props as P,
      onClick: (e: React.MouseEvent) => {
        // Track the event
        amplitude.track(eventType, {
          ...eventProperties,
          timestamp: new Date().toISOString(),
        });

        // Call the original onClick if it exists
        const originalProps = props as any;
        if (originalProps.onClick) {
          originalProps.onClick(e);
        }
      },
    };

    return <Component {...wrappedProps} />;
  };
} 