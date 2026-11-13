import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { KidscampClient } from './KidscampClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids camp on Palm Jumeirah",

  description:
    "An action-packed beachside camp for ages 6 to 12. Water sports, water park fun and team challenges, led by certified instructors.",

  openGraph: {
    title: "Kids camp on Palm Jumeirah",

    description:
    "An action-packed beachside camp for ages 6 to 12. Water sports, water park fun and team challenges, led by certified instructors.",
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
    title: "Kids camp on Palm Jumeirah",

    description:
    "An action-packed beachside camp for ages 6 to 12. Water sports, water park fun and team challenges, led by certified instructors.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <KidscampClient/>;
}
