import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { SUPyogaClient } from './SUPyogaClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUP yoga on Palm Jumeirah",

  description:
    "Take your yoga practice onto the water. Private group classes led by a certified yoga instructor, for all levels, with a minimum of 10 people.",

  openGraph: {
    title: "SUP yoga on Palm Jumeirah",

    description:
    "Take your yoga practice onto the water. Private group classes led by a certified yoga instructor, for all levels, with a minimum of 10 people.",
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
    title: "SUP yoga on Palm Jumeirah",

    description:
    "Take your yoga practice onto the water. Private group classes led by a certified yoga instructor, for all levels, with a minimum of 10 people.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <SUPyogaClient/>;
}
