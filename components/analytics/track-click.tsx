'use client';

import React from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { EventType } from '@/lib/amplitude';

type TrackClickProps = {
  eventType: EventType;
  eventProperties?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export function TrackClick({
  eventType,
  eventProperties = {},
  children,
  className,
  onClick,
}: TrackClickProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Track event in Amplitude
    amplitude.track(eventType, {
      ...eventProperties,
      timestamp: new Date().toISOString(),
    });

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
} 