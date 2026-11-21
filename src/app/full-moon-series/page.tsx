import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { FullmoonclientClient } from './FullmoonclientClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full moon series Dubai | Yoga, sound healing and breathwork under the full moon",

  description:
    "Monthly full moon evenings on Palm Jumeirah: full moon yoga, SUP sound healing and SOMA Breath under the night sky. From AED 100. Check dates and book.",

  openGraph: {
    title: "Full moon series Dubai | Yoga, sound healing and breathwork under the full moon",

    description:
    "Monthly full moon evenings on Palm Jumeirah: full moon yoga, SUP sound healing and SOMA Breath under the night sky. From AED 100. Check dates and book.",
    type: "website",
    siteName: "IGNITE Water Sports",
    images: [
      {
        url: "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
        width: 1200,
        height: 630,
        alt: "IGNITE Water Sports - Standup Paddle Boarding Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Full moon series Dubai | Yoga, sound healing and breathwork under the full moon",

    description:
    "Monthly full moon evenings on Palm Jumeirah: full moon yoga, SUP sound healing and SOMA Breath under the night sky. From AED 100. Check dates and book.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <FullmoonclientClient/>;
}
