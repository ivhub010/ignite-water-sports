import ContentPage from '@/components/sections/ContentPage';
import { pageMetadata } from '@/lib/metadata';
import { standUpPaddleBoarding } from '@/content/stand-up-paddle-boarding';
import { SUPClient } from './SUPClient';

export const metadata = pageMetadata(standUpPaddleBoarding);

export default function Page() {
  return <SUPClient/>;
}
