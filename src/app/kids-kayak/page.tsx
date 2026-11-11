import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { KidskayakClient } from './KidskayakClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids kayak on Palm Jumeirah",

  description:
    "Let your kids explore the calm waters of Palm Jumeirah in a kayak, with lifeguard-trained staff on hand throughout.",

  openGraph: {
    title: "Kids kayak on Palm Jumeirah",

    description:
    "Let your kids explore the calm waters of Palm Jumeirah in a kayak, with lifeguard-trained staff on hand throughout.",
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
    title: "Kids kayak on Palm Jumeirah",

    description:
    "Let your kids explore the calm waters of Palm Jumeirah in a kayak, with lifeguard-trained staff on hand throughout.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <KidskayakClient/>;
}
