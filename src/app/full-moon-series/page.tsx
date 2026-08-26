import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { fullMoonSeries } from '@/content/full-moon-series';

export const metadata = pageMetadata(fullMoonSeries);

export default function Page() {
  return <ContentPage content={fullMoonSeries} />;
}
