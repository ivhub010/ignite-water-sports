import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { ShopClient } from './ShopClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNITE Water Sports merch | Branded gear and accessories Dubai",

  description:
    "Shop IGNITE Water Sports branded clothing, accessories and gear. Tees, caps, rash guards and more. Official IGNITE merchandise available online.",

  openGraph: {
    title: "IGNITE Water Sports merch | Branded gear and accessories Dubai",

    description:
    "Shop IGNITE Water Sports branded clothing, accessories and gear. Tees, caps, rash guards and more. Official IGNITE merchandise available online.",
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
    title: "IGNITE Water Sports merch | Branded gear and accessories Dubai",

    description:
    "Shop IGNITE Water Sports branded clothing, accessories and gear. Tees, caps, rash guards and more. Official IGNITE merchandise available online.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <ShopClient/>;
}
