import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { eFoil } from '@/content/e-foil';

export const metadata = pageMetadata(eFoil);

export default function Page() {
  return <ContentPage content={eFoil} />;
}
