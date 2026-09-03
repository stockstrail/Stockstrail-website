'use client';

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
  timestamp?: string;
}

const STORAGE_KEY = 'stockstrail_attribution_v1';

/**
 * Capture UTM parameters and referrer on initial arrival
 */
export function captureInitialUtm(): UtmData | null {
  if (typeof window === 'undefined') return null;

  try {
    const params = new URLSearchParams(window.location.search);
    const hasUtm =
      params.has('utm_source') ||
      params.has('utm_medium') ||
      params.has('utm_campaign') ||
      params.has('gclid') ||
      params.has('fbclid');

    const existingDataStr = localStorage.getItem(STORAGE_KEY);
    let existingData: UtmData = existingDataStr ? JSON.parse(existingDataStr) : {};

    if (hasUtm || !existingData.landing_page) {
      const freshData: UtmData = {
        utm_source: params.get('utm_source') || (params.get('gclid') ? 'google_ads' : params.get('fbclid') ? 'meta_ads' : existingData.utm_source || 'organic_direct'),
        utm_medium: params.get('utm_medium') || (params.get('gclid') ? 'cpc' : params.get('fbclid') ? 'paid_social' : existingData.utm_medium || 'direct'),
        utm_campaign: params.get('utm_campaign') || existingData.utm_campaign || '',
        utm_term: params.get('utm_term') || existingData.utm_term || '',
        utm_content: params.get('utm_content') || existingData.utm_content || '',
        landing_page: existingData.landing_page || window.location.pathname,
        referrer: existingData.referrer || document.referrer || 'direct',
        timestamp: existingData.timestamp || new Date().toISOString(),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
      return freshData;
    }

    return existingData;
  } catch {
    return null;
  }
}

/**
 * Retrieve stored attribution data to append to any lead submission
 */
export function getStoredAttribution(): UtmData {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

/**
 * Custom event tracking helper for GA4 & Meta
 */
export function trackCustomEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  try {
    // Google Analytics 4
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
    }

    // Microsoft Clarity
    if (typeof (window as any).clarity === 'function') {
      (window as any).clarity('event', eventName);
    }

    // Meta Pixel if present
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', eventName, params);
    }
  } catch {
    // Gracefully handle analytics errors without breaking user experience
  }
}
