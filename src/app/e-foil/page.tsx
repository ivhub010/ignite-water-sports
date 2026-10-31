import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { EfoilClient } from './EfoilClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayak rental Dubai | Kayaking on Palm Jumeirah",

  description:
    "Rent a kayak on Palm Jumeirah with IGNITE Water Sports. Calm, motor-free waters, stunning Burj Al Arab views, and certified instructors on hand. From AED 50. Book online in minutes.",

  openGraph: {
    title: "Kayak rental Dubai | Kayaking on Palm Jumeirah",
    description:
      "Rent a kayak on Palm Jumeirah with IGNITE Water Sports. Calm, motor-free waters, stunning Burj Al Arab views, and certified instructors on hand. From AED 50. Book online in minutes.",
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
    title: "Kayak rental Dubai | Kayaking on Palm Jumeirah",
    description:
      "Rent a kayak on Palm Jumeirah with IGNITE Water Sports. Calm, motor-free waters, stunning Burj Al Arab views, and certified instructors on hand. From AED 50. Book online in minutes.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <EfoilClient/>;
}
