import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { SUPsoundClient } from './SUPsoundClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUP sound healing on Palm Jumeirah",

  description:
    "Float on calm water while a trained sound healing practitioner guides you through a soothing meditative journey, set to the gentle vibrations of sound healing instruments.",

  openGraph: {
    title: "SUP sound healing on Palm Jumeirah",

    description:
    "Float on calm water while a trained sound healing practitioner guides you through a soothing meditative journey, set to the gentle vibrations of sound healing instruments.",
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
    title: "SUP sound healing on Palm Jumeirah",

    description:
    "Float on calm water while a trained sound healing practitioner guides you through a soothing meditative journey, set to the gentle vibrations of sound healing instruments.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <SUPsoundClient/>;
}
