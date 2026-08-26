import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { communityEvents } from '@/content/community-events';

export const metadata = pageMetadata(communityEvents);

export default function Page() {
  return <ContentPage content={communityEvents} />;
}
