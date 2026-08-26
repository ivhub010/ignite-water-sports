import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { ourEvents } from '@/content/our-events';

export const metadata = pageMetadata(ourEvents);

export default function Page() {
  return <ContentPage content={ourEvents} />;
}
