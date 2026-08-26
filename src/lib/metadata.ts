import type { Metadata } from 'next';
import type { PageContent } from '@/types/content';

/**
 * Builds a page's Next.js metadata from its content.
 *
 * The title and description travel with the content rather than being repeated
 * in each route file, so editing a page's copy and its search listing happens
 * in one place.
 */
export function pageMetadata(content: PageContent): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}
