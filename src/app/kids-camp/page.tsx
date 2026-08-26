import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { kidsCamp } from '@/content/kids-camp';

export const metadata = pageMetadata(kidsCamp);

export default function Page() {
  return <ContentPage content={kidsCamp} />;
}
