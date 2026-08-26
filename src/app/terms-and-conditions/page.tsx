import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { termsAndConditions } from '@/content/terms-and-conditions';

export const metadata = pageMetadata(termsAndConditions);

export default function Page() {
  return <ContentPage content={termsAndConditions} />;
}
