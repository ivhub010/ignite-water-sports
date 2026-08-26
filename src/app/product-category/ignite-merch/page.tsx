import type { Metadata } from 'next';
import ProductArchive from '@/components/sections/ProductArchive';
import { productsIn } from '@/content/products';

export const metadata: Metadata = {
  title: 'IGNITE merch - IGNITE Water Sports',
  description:
    'Official IGNITE Water Sports merchandise: caps, rash guards, swim shorts, flip flops, water bottles, waterproof phone cases and kids kit.',
};

export default function Page() {
  return <ProductArchive title="IGNITE merch" products={productsIn('merch')} />;
}
