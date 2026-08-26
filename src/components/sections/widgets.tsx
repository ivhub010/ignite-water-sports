import type { ReactNode } from 'react';

/**
 * Elementor widget primitives.
 *
 * These mirror the markup the Wavesurfer theme's stylesheets target. The class
 * names are not decorative — the theme's CSS keys off them — so they are kept
 * exactly as the theme emits them and are centralised here rather than being
 * repeated across every page.
 */

const WIDGET_ATTRS = {
  'data-element_type': 'widget',
  'data-e-type': 'widget',
} as const;

type HeadingVariant = 'eyebrow' | 'title' | 'plain';

const HEADING_CLASS: Record<HeadingVariant, string> = {
  // Small accent label above a section title.
  eyebrow:
    'elementor-element section-title sis-heading-animation sis-animation-heading-style-1 elementor-widget elementor-widget-heading',
  // The large section title.
  title:
    'elementor-element sis-heading-animation sis-animation-heading-style-2 elementor-widget elementor-widget-heading',
  // A sub-heading inside a section body.
  plain: 'elementor-element elementor-widget elementor-widget-heading',
};

export function HeadingWidget({
  level,
  children,
  variant = 'plain',
  className,
  id,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  variant?: HeadingVariant;
  /** Overrides the variant class when a specific Elementor element is needed. */
  className?: string;
  id?: string;
}) {
  const Tag = `h${level}` as 'h1';
  return (
    <div
      className={className ?? HEADING_CLASS[variant]}
      {...(id ? { 'data-id': id } : {})}
      {...WIDGET_ATTRS}
      data-widget_type="heading.default"
    >
      <Tag className="elementor-heading-title elementor-size-default">
        {variant === 'eyebrow' ? <span>{children}</span> : children}
      </Tag>
    </div>
  );
}

export function TextWidget({ children }: { children: ReactNode }) {
  return (
    <div
      className="elementor-element elementor-widget elementor-widget-text-editor"
      {...WIDGET_ATTRS}
      data-widget_type="text-editor.default"
    >
      {children}
    </div>
  );
}

export function ImageWidget({ src, alt = '' }: { src: string; alt?: string }) {
  return (
    <div
      className="elementor-element elementor-widget elementor-widget-image"
      {...WIDGET_ATTRS}
      data-widget_type="image.default"
    >
      <img decoding="async" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function ButtonWidget({
  href,
  label,
  download,
  newTab,
}: {
  href: string;
  label: string;
  download?: string;
  newTab?: boolean;
}) {
  return (
    <div
      className="elementor-element elementor-widget elementor-widget-button"
      {...WIDGET_ATTRS}
      data-widget_type="button.default"
    >
      <a
        className="elementor-button elementor-button-link elementor-size-sm"
        href={href}
        {...(download ? { download } : {})}
        {...(newTab ? { target: '_blank' } : {})}
      >
        <span className="elementor-button-content-wrapper">
          <span className="elementor-button-text">{label}</span>
        </span>
      </a>
    </div>
  );
}

/**
 * A full-width band. `e-con-boxed` constrains the inner column to the kit's
 * 1300px container; `background_background: classic` is what Elementor writes
 * for a container that carries a background.
 */
export function Container({
  id,
  children,
  className = 'elementor-element elementor-element-a6549a8 e-flex e-con-boxed e-con e-parent',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      data-id={id}
      data-element_type="container"
      data-e-type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">{children}</div>
    </div>
  );
}

/** A column inside a Container — used for the heading group and the body group. */
export function Column({
  id,
  children,
  className = 'elementor-element elementor-element-82e4119 e-con-full e-flex e-con e-child',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-id={id} data-element_type="container" data-e-type="container">
      {children}
    </div>
  );
}

/** The page-title band. Its own Elementor rule supplies the band's padding and background. */
export const HERO_CONTAINER_CLASS =
  'elementor-element elementor-element-feea95c e-flex e-con-boxed e-con e-parent';
/** The h1 widget inside the page-title band. */
export const HERO_HEADING_CLASS =
  'elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading';

export const HEADING_COLUMN_CLASS =
  'elementor-element elementor-element-3767c63 e-con-full e-flex e-con e-child';
export const CTA_CONTAINER_CLASS =
  'elementor-element elementor-element-957c32e e-flex e-con-boxed e-con e-parent';
export const CTA_COLUMN_CLASS =
  'elementor-element elementor-element-55f4937 e-con-full e-flex e-con e-child';
