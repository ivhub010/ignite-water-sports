import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { privacyPolicy } from '@/content/privacy-policy';

export const metadata = pageMetadata(privacyPolicy);

export default function Page() {
  return <ContentPage content={privacyPolicy} />;
}
