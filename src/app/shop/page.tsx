import type { Metadata } from 'next';
import ProductArchive from '@/components/sections/ProductArchive';
import { products } from '@/content/products';

export const metadata: Metadata = {
  title: 'Shop - IGNITE Water Sports',
  description:
    'Shop IGNITE Water Sports merchandise, camps, club terms and community event tickets. Caps, rash guards, swim shorts, water bottles and more, delivered in Dubai.',
};

export default function Page() {
  return <ProductArchive title="Shop" products={products} />;
}
