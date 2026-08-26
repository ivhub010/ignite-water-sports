import type { PageContent, Section } from '@/types/content';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Blocks from './Blocks';
import {
  Column,
  Container,
  CTA_COLUMN_CLASS,
  CTA_CONTAINER_CLASS,
  HEADING_COLUMN_CLASS,
  HERO_CONTAINER_CLASS,
  HERO_HEADING_CLASS,
  HeadingWidget,
  TextWidget,
} from './widgets';

/**
 * Renders a migrated content page: the page-title band, then each section,
 * with any trailing buttons lifted into their own centred call-to-action band
 * (which is how the theme lays them out).
 */

function PageHero({ title, tagline }: { title: string; tagline?: string }) {
  return (
    <Container id="feea95c" className={HERO_CONTAINER_CLASS}>
      <HeadingWidget level={1} className={HERO_HEADING_CLASS} id="3297bee">
        {title}
      </HeadingWidget>
      {tagline ? (
        <TextWidget>
          <p>{tagline}</p>
        </TextWidget>
      ) : null}
    </Container>
  );
}

function SectionBand({
  section,
  index,
  eyebrow,
}: {
  section: Section;
  index: number;
  eyebrow?: string;
}) {
  // A section made only of buttons is its own centred call-to-action band.
  const buttonsOnly =
    !section.title && section.blocks.length > 0 && section.blocks.every((b) => b.type === 'cta');

  if (buttonsOnly) {
    // `layout: 'row'` puts the buttons side by side and wraps on narrow screens.
    const rowStyle =
      section.layout === 'row'
        ? { gap: '20px', flexDirection: 'row' as const, flexWrap: 'wrap' as const, justifyContent: 'center' as const }
        : undefined;
    return (
      <Container id={`cta${index}`} className={CTA_CONTAINER_CLASS}>
        <div
          className={
            section.layout === 'row'
              ? 'elementor-element e-con-full e-flex e-con e-child'
              : CTA_COLUMN_CLASS
          }
          {...(section.layout === 'row' ? {} : { 'data-id': `ctab${index}` })}
          data-element_type="container"
          data-e-type="container"
          style={rowStyle}
        >
          <Blocks blocks={section.blocks} />
        </div>
      </Container>
    );
  }

  return (
    <Container id={`sec${index}`}>
      {section.title || eyebrow ? (
        <Column id={`hd${index}`} className={HEADING_COLUMN_CLASS}>
          {eyebrow ? (
            <HeadingWidget level={3} variant="eyebrow">
              {eyebrow}
            </HeadingWidget>
          ) : null}
          {section.title ? (
            <HeadingWidget level={2} variant="title">
              {section.title}
            </HeadingWidget>
          ) : null}
        </Column>
      ) : null}
      {section.blocks.length ? (
        <Column id={`bd${index}`}>
          <Blocks blocks={section.blocks} />
        </Column>
      ) : null}
    </Container>
  );
}

export default function ContentPage({ content }: { content: PageContent }) {
  return (
    <>
      {/* The Elementor stylesheet generated for the content-page template. */}
      <link
        rel="stylesheet"
        id="elementor-post-30-css"
        href="/images/elementor/css/post-3027e7.css?ver=1787332087"
        media="all"
      />
      <SiteHeader />
      <div
        data-elementor-type="wp-page"
        data-elementor-id={30}
        className="elementor elementor-30"
      >
        <PageHero title={content.title} tagline={content.tagline} />
        {content.sections.map((section, i) => (
          <SectionBand
            key={i}
            section={section}
            index={i}
            eyebrow={i === 0 ? (section.eyebrow ?? content.eyebrow) : section.eyebrow}
          />
        ))}
      </div>
      <SiteFooter />
    </>
  );
}
