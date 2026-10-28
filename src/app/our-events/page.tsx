import { pageMetadata } from '@/lib/metadata';
import { ourEvents } from '@/content/our-events';
import OurEventsClient from './OurEventsClient';

// export const metadata = pageMetadata(ourEvents);
import type { Metadata } from "next";

const title = "Our Events Dubai | IGNITE Water Sports";

const description =
  "Discover upcoming events at IGNITE Water Sports in Dubai. Join community fitness events, SUP sessions, yoga, ice plunges, wellness experiences, and exciting activities on Palm Jumeirah.";

const ogImage =
  "https://ignitewatersports.com/wp-content/uploads/2026/02/banner11-1.png";

export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    title,
    description,
    type: "website",
    siteName: "IGNITE Water Sports",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "IGNITE Water Sports - Events in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  return <OurEventsClient />;
}
