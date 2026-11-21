import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { SUPsoundClient } from './SUPsoundClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUP sound healing Dubai | Saturday sound healing on the water, Palm Jumeirah",

  description:
    "SUP sound healing on Palm Jumeirah every Saturday morning. A trained practitioner guides a meditative journey on the water. AED 100 offer price. Book online in minutes.",

  openGraph: {
    title: "SUP sound healing Dubai | Saturday sound healing on the water, Palm Jumeirah",

    description:
    "SUP sound healing on Palm Jumeirah every Saturday morning. A trained practitioner guides a meditative journey on the water. AED 100 offer price. Book online in minutes.",
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
    title: "SUP sound healing Dubai | Saturday sound healing on the water, Palm Jumeirah",

    description:
    "SUP sound healing on Palm Jumeirah every Saturday morning. A trained practitioner guides a meditative journey on the water. AED 100 offer price. Book online in minutes.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <SUPsoundClient/>;
}
