import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { beachYoga } from '@/content/beach-yoga';

export const metadata = pageMetadata(beachYoga);

export default function Page() {
  return <ContentPage content={beachYoga} />;
}
