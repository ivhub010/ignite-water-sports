import { Fragment } from 'react';
import type { Block } from '@/types/content';
import { ButtonWidget, HeadingWidget, ImageWidget, TextWidget } from './widgets';

/**
 * Turns the content model's blocks into Elementor widgets.
 *
 * Consecutive paragraphs, lists and tables are merged into a single
 * text-editor widget, which is how the theme groups body copy — a run of
 * prose is one widget, not one widget per paragraph.
 */

type Group =
  | { kind: 'prose'; blocks: Block[] }
  | { kind: 'single'; block: Block };

function group(blocks: Block[]): Group[] {
  const out: Group[] = [];
  for (const block of blocks) {
    // A `plain` paragraph is its own widget, so it never joins a prose run.
    const isProse =
      (block.type === 'paragraph' && !block.plain) ||
      block.type === 'list' ||
      block.type === 'table';
    const last = out[out.length - 1];
    if (isProse && last?.kind === 'prose') {
      last.blocks.push(block);
    } else if (isProse) {
      out.push({ kind: 'prose', blocks: [block] });
    } else {
      out.push({ kind: 'single', block });
    }
  }
  return out;
}

function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <TextWidget>
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
        if (block.type === 'list') {
          const Tag = block.ordered ? 'ol' : 'ul';
          return (
            <Tag key={i}>
              {block.items.map((item, j) =>
                typeof item === 'string' ? (
                  <li key={j}>{item}</li>
                ) : (
                  <li key={j}>
                    <a href={item.href}>{item.text}</a>
                    {item.suffix}
                  </li>
                ),
              )}
            </Tag>
          );
        }
        if (block.type === 'table') {
          return (
            <table key={i}>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }
        return null;
      })}
    </TextWidget>
  );
}

function Single({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading':
      return <HeadingWidget level={block.level}>{block.text}</HeadingWidget>;

    case 'feature':
      // An image-box: optional icon, title, then its description as body copy.
      return (
        <>
          {block.image ? <ImageWidget src={block.image} alt={block.title ?? ''} /> : null}
          {block.title ? <HeadingWidget level={3}>{block.title}</HeadingWidget> : null}
          {block.description ? (
            <TextWidget>
              <p>{block.description}</p>
            </TextWidget>
          ) : null}
        </>
      );

    case 'faq':
      // The theme has no accordion stylesheet loaded, so each pair renders as
      // a sub-heading followed by its answer — the same shape the live site
      // falls back to with scripts disabled.
      return (
        <>
          {block.items.map((item, i) => (
            <Fragment key={i}>
              <HeadingWidget level={3}>{item.question}</HeadingWidget>
              {item.answer ? (
                <TextWidget>
                  <p>{item.answer}</p>
                </TextWidget>
              ) : null}
            </Fragment>
          ))}
        </>
      );

    case 'paragraph':
      return (
        <TextWidget>
          {block.text}
        </TextWidget>
      );

    case 'image':
      return <ImageWidget src={block.src} alt={block.alt ?? ''} />;

    case 'cta':
      return (
        <ButtonWidget
          href={block.href}
          label={block.label}
          download={block.download}
          newTab={block.newTab}
        />
      );

    default:
      return null;
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {group(blocks).map((g, i) =>
        g.kind === 'prose' ? (
          <Prose key={i} blocks={g.blocks} />
        ) : (
          <Single key={i} block={g.block} />
        ),
      )}
    </>
  );
}
