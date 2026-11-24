import type { Metadata } from "next";
import TeambondingClient from "./TeambondingClient";

const title = "Team Bonding Dubai | Corporate Team Building on Palm Jumeirah";
const description = "Bring your team together with bespoke water sports, wellness, recovery and team bonding experiences at IGNITE Water Sports, RIVA Beach Club, Palm Jumeirah.";
const image = "https://ignitewatersports.com/wp-content/uploads/2026/01/teambonding.webp";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "IGNITE Water Sports",
    url: "https://ignitewatersports.com/team-bonding",
    images: [{ url: image, alt: "IGNITE Water Sports team bonding in Dubai" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function Page() {
  return <TeambondingClient />;
}
