import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { kidsAndBirthdays } from '@/content/kids-and-birthdays';

export const metadata = pageMetadata(kidsAndBirthdays);

export default function Page() {
  return <ContentPage content={kidsAndBirthdays} />;
}
