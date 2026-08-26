import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { pinkIsPunk } from '@/content/ignite-pink-is-punk-events';

export const metadata = pageMetadata(pinkIsPunk);

export default function Page() {
  return <ContentPage content={pinkIsPunk} />;
}
