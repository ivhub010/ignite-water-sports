/**
 * Page content model.
 *
 * Pages migrated from ignitewatersports.com are described as data rather than
 * hand-written markup: a hero plus an ordered list of blocks. The section
 * components under `components/sections` turn these into the theme's Elementor
 * markup, so the rendered HTML is identical to the original WordPress output
 * while the content itself stays editable in one place.
 */

/** A paragraph of body copy. */
export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
  /**
   * Emit the text bare in its own text-editor widget, without a <p> wrapper.
   * Some hand-built pages were authored that way and the kit's paragraph
   * margin would otherwise change their spacing.
   */
  plain?: boolean;
}

/**
 * A list item: plain text, or a link with optional trailing text
 * (e.g. "Global Heart Day" linked, followed by " – AED99.00").
 */
export type ListItem = string | { text: string; href: string; suffix?: string };

/** A bulleted or numbered list. */
export interface ListBlock {
  type: 'list';
  ordered?: boolean;
  items: ListItem[];
}

/** A sub-heading inside a section (h3 or h4). */
export interface HeadingBlock {
  type: 'heading';
  level: 3 | 4;
  text: string;
}

/** An icon/image card — Elementor's image-box widget. */
export interface FeatureBlock {
  type: 'feature';
  title?: string;
  description?: string;
  image?: string;
}

/** A question and answer pair. */
export interface FaqBlock {
  type: 'faq';
  items: { question: string; answer: string }[];
}

/** A call-to-action button. */
export interface CtaBlock {
  type: 'cta';
  label: string;
  href: string;
  /** Sets the download attribute, for file links. */
  download?: string;
  /** Opens in a new tab. */
  newTab?: boolean;
}

/** A standalone image. */
export interface ImageBlock {
  type: 'image';
  src: string;
  alt?: string;
}

/** A simple data table. */
export interface TableBlock {
  type: 'table';
  rows: string[][];
}

export type Block =
  | ParagraphBlock
  | ListBlock
  | HeadingBlock
  | FeatureBlock
  | FaqBlock
  | CtaBlock
  | ImageBlock
  | TableBlock;

/** One band of the page: an optional title with its blocks. */
export interface Section {
  /** Rendered as the large h2. */
  title?: string;
  /** Small accent label above the title. */
  eyebrow?: string;
  /**
   * Lays a button-only band out in a centred row rather than a stack.
   * Ignored for sections that carry body content.
   */
  layout?: 'row';
  blocks: Block[];
}

/** A full content page. */
export interface PageContent {
  /** The h1 in the page-title band. */
  title: string;
  /** Optional lead line under the h1. */
  tagline?: string;
  /** Accent label above the first section's heading. */
  eyebrow?: string;
  sections: Section[];
  /** Values for the Next.js `metadata` export. */
  seo: {
    title: string;
    description: string;
  };
}

/** A product in the shop archive. */
export interface Product {
  id: string;
  title: string;
  href: string;
  image: string;
  alt?: string;
  category: string;
  /** Display amounts without the currency symbol, e.g. ['150.00'] or a range. */
  amounts: string[];
  action: string;
  variable?: boolean;
}
