import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { faq } from '@/content/faq';

export const metadata = pageMetadata(faq);

export default function Page() {
  return <ContentPage content={faq} />;
}
