import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { kidsKayak } from '@/content/kids-kayak';

export const metadata = pageMetadata(kidsKayak);

export default function Page() {
  return <ContentPage content={kidsKayak} />;
}
