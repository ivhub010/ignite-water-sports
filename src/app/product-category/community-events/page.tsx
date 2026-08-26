import type { Metadata } from 'next';
import ProductArchive from '@/components/sections/ProductArchive';
import { productsIn } from '@/content/products';

export const metadata: Metadata = {
  title: 'Community Events - IGNITE Water Sports',
  description:
    'IGNITE Water Sports community events on Palm Jumeirah, including Global Heart Day and the IGNITE Reset Club.',
};

export default function Page() {
  return <ProductArchive title="Community Events" products={productsIn('community')} />;
}
