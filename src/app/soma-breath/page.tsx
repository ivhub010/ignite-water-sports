import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { SomabreathClient } from './SomabreathClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOMA Breath on Palm Jumeirah",

  description:
    "A guided breathwork journey with music and headsets. Learn how SOMA Breath works, then leave feeling calmer, clearer, energised and deeply reset.",

  openGraph: {
    title: "SOMA Breath on Palm Jumeirah",

    description:
    "A guided breathwork journey with music and headsets. Learn how SOMA Breath works, then leave feeling calmer, clearer, energised and deeply reset.",
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
    title: "SOMA Breath on Palm Jumeirah",

    description:
    "A guided breathwork journey with music and headsets. Learn how SOMA Breath works, then leave feeling calmer, clearer, energised and deeply reset.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <SomabreathClient/>;
}
