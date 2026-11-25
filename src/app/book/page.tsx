import { BookClient } from './BookClient';



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book your session | IGNITE Water Sports",

  description:
    "Choose your activity, date and time at RIVA Beach Club, Palm Jumeirah. Book SUP, kayak, E-Foil, pedalo and water park sessions.",

  openGraph: {
    title: "Book your session | IGNITE Water Sports",

    description:
    "Choose your activity, date and time at RIVA Beach Club, Palm Jumeirah. Book SUP, kayak, E-Foil, pedalo and water park sessions.",
    type: "website",
    siteName: "IGNITE Water Sports",
    images: [
      {
        url: "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
        width: 1200,
        height: 630,
        alt: "IGNITE Water Sports - Book your session",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book your session | IGNITE Water Sports",

    description:
    "Choose your activity, date and time at RIVA Beach Club, Palm Jumeirah. Book SUP, kayak, E-Foil, pedalo and water park sessions.",
    images: [
      "https://ignitewatersports.com/wp-content/uploads/2024/12/IGNITE_SocialIcon_WhiteWLogo_WaterSports.png",
    ],
  },
};

export default function Page() {
  return <BookClient/>;
}
