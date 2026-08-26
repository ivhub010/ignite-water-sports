import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { somaBreath } from '@/content/soma-breath';

export const metadata = pageMetadata(somaBreath);

export default function Page() {
  return <ContentPage content={somaBreath} />;
}
