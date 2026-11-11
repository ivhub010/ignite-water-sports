import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { WatersportsclubClient } from './WatersportsclubClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNITE Water Sports Club",

  description:
    "Saturday sessions at RIVA Beach Club for kids aged 3 and above, run with SUP Kids. The club is not running at the moment.",

  openGraph: {
    title: "IGNITE Water Sports Club",

    description:
    "Saturday sessions at RIVA Beach Club for kids aged 3 and above, run with SUP Kids. The club is not running at the moment.",
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
    title: "IGNITE Water Sports Club",

    description:
    "Saturday sessions at RIVA Beach Club for kids aged 3 and above, run with SUP Kids. The club is not running at the moment.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <WatersportsclubClient/>;
}
