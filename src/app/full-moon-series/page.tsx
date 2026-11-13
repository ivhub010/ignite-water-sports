import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { FullmoonclientClient } from './FullmoonclientClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full moon series on Palm Jumeirah",

  description:
    "An evening of transformation, once a month under the light of the full moon. Choose Full Moon Yoga, add SUP Sound Healing on calm water under the night sky, or complete the evening with a guided SOMA Breath journey.",

  openGraph: {
    title: "Full moon series on Palm Jumeirah",

    description:
    "An evening of transformation, once a month under the light of the full moon. Choose Full Moon Yoga, add SUP Sound Healing on calm water under the night sky, or complete the evening with a guided SOMA Breath journey.",
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
    title: "Full moon series on Palm Jumeirah",

    description:
    "An evening of transformation, once a month under the light of the full moon. Choose Full Moon Yoga, add SUP Sound Healing on calm water under the night sky, or complete the evening with a guided SOMA Breath journey.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <FullmoonclientClient/>;
}
