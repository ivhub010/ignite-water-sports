import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { kayak } from '@/content/kayak';

export const metadata = pageMetadata(kayak);

export default function Page() {
  return <ContentPage content={kayak} />;
}
