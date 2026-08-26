import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { igniteCalendar } from '@/content/ignite-calendar';

export const metadata = pageMetadata(igniteCalendar);

export default function Page() {
  return <ContentPage content={igniteCalendar} />;
}
