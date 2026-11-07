import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { KidsbdayClient } from './KidsbdayClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids birthday parties on Palm Jumeirah",

  description:
    "Water sports and inflatable water park parties for ages 3 to 16, fully supervised by the IGNITE team at RIVA Beach Club.",

  openGraph: {
    title: "Kids birthday parties on Palm Jumeirah",

    description:
    "Water sports and inflatable water park parties for ages 3 to 16, fully supervised by the IGNITE team at RIVA Beach Club.",
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
    title: "Kids birthday parties on Palm Jumeirah",

    description:
    "Water sports and inflatable water park parties for ages 3 to 16, fully supervised by the IGNITE team at RIVA Beach Club.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <KidsbdayClient/>;
}
