import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { partner } from '@/content/partner';

export const metadata = pageMetadata(partner);

export default function Page() {
  return <ContentPage content={partner} />;
}
