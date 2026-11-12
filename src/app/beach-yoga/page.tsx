import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { BeachyogaClient } from './BeachyogaClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beach yoga on Palm Jumeirah",

  description:
    "Breathe, stretch and connect on our sandy beach every Saturday morning, led by a certified yoga instructor, with the sun rising over the horizon.",

  openGraph: {
    title: "Beach yoga on Palm Jumeirah",

    description:
    "Breathe, stretch and connect on our sandy beach every Saturday morning, led by a certified yoga instructor, with the sun rising over the horizon.",
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
    title: "Beach yoga on Palm Jumeirah",

    description:
    "Breathe, stretch and connect on our sandy beach every Saturday morning, led by a certified yoga instructor, with the sun rising over the horizon.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <BeachyogaClient/>;
}
