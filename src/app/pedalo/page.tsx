import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { pedalo } from '@/content/pedalo';

export const metadata = pageMetadata(pedalo);

export default function Page() {
  return <ContentPage content={pedalo} />;
}
