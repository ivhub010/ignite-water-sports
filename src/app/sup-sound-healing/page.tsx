import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { supSoundHealing } from '@/content/sup-sound-healing';

export const metadata = pageMetadata(supSoundHealing);

export default function Page() {
  return <ContentPage content={supSoundHealing} />;
}
