import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { WaterparkClient } from './WaterparkClient';

// export const metadata = pageMetadata(standUpPaddleBoarding);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inflatable water park Dubai | Water park fun on Palm Jumeirah",

  description:
    "Inflatable water park on Palm Jumeirah for ages 6 to 16. Safety equipment included, lifeguard-trained staff, AED 100 per child. Book online in minutes.",

  openGraph: {
    title: "Inflatable water park Dubai | Water park fun on Palm Jumeirah",

    description:
    "Inflatable water park on Palm Jumeirah for ages 6 to 16. Safety equipment included, lifeguard-trained staff, AED 100 per child. Book online in minutes.",
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
    title: "Inflatable water park Dubai | Water park fun on Palm Jumeirah",

    description:
    "Inflatable water park on Palm Jumeirah for ages 6 to 16. Safety equipment included, lifeguard-trained staff, AED 100 per child. Book online in minutes.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <WaterparkClient/>;
}
