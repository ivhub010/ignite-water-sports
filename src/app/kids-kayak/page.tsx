import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { KidskayakClient } from './KidskayakClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids kayak Dubai | Kayaking for ages 6 to 10 on Palm Jumeirah",

  description:
    "Kids kayak rental on Palm Jumeirah for ages 6 to 10. Calm, motor-free waters and lifeguard-trained staff. AED 50 for 1 hour. Book online in minutes.",

  openGraph: {
    title: "Kids kayak Dubai | Kayaking for ages 6 to 10 on Palm Jumeirah",

    description:
    "Kids kayak rental on Palm Jumeirah for ages 6 to 10. Calm, motor-free waters and lifeguard-trained staff. AED 50 for 1 hour. Book online in minutes.",
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
    title: "Kids kayak Dubai | Kayaking for ages 6 to 10 on Palm Jumeirah",

    description:
    "Kids kayak rental on Palm Jumeirah for ages 6 to 10. Calm, motor-free waters and lifeguard-trained staff. AED 50 for 1 hour. Book online in minutes.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <KidskayakClient/>;
}
