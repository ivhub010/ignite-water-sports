import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { teamBonding } from '@/content/team-bonding';

export const metadata = pageMetadata(teamBonding);

export default function Page() {
  return <ContentPage content={teamBonding} />;
}
