import ChristmasClient from './ChristmasClient';

export const metadata = {
  title: 'IGNITE Christmas | Dubai',
  description: 'Celebrate Christmas with IGNITE on Saturday, 19 December 2026 at RIVA Beach Club, Palm Jumeirah. Free wellness and water sports sessions from 7:00am.',
  alternates: { canonical: 'https://ignitewatersports.com/our-events/ignite-christmas/' },
  openGraph: {
    title: 'IGNITE Christmas | Dubai',
    description: 'Merry Christmas from IGNITE. Join us on 19 December 2026 at RIVA Beach Club.',
    images: ['https://ignitewatersports.com/wp-content/uploads/2026/11/AED-99-Christmas-FREE.png'],
  },
};

export default function ChristmasPage() {
  return <ChristmasClient />;
}
