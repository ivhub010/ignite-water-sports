import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { waterSportsClub } from '@/content/water-sports-club';

export const metadata = pageMetadata(waterSportsClub);

export default function Page() {
  return <ContentPage content={waterSportsClub} />;
}
