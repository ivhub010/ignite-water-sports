import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { waterPark } from '@/content/water-park';

export const metadata = pageMetadata(waterPark);

export default function Page() {
  return <ContentPage content={waterPark} />;
}
