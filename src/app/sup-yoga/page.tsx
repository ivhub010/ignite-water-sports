import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { supYoga } from '@/content/sup-yoga';

export const metadata = pageMetadata(supYoga);

export default function Page() {
  return <ContentPage content={supYoga} />;
}
