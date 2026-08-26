import type { Product } from '@/types/content';

/**
 * A single product tile in the archive grid.
 *
 * The class names come from the Wavesurfer theme's shop styles
 * (`sisf-e-inner`, `shop-image-wrap`, `shop-content-wrap`), which
 * `styles/shop-grid.css` builds on. The button sits inside the image wrap so
 * it can slide up over the thumbnail on hover.
 */

function Price({ amounts }: { amounts: string[] }) {
  const amount = (value: string) => (
    <span className="woocommerce-Price-amount amount">
      <bdi>
        <span className="woocommerce-Price-currencySymbol">AED</span>
        {value}
      </bdi>
    </span>
  );

  return (
    <span className="price">
      {amounts.length > 1 ? (
        <>
          {amount(amounts[0])} &ndash; {amount(amounts[1])}
        </>
      ) : (
        amount(amounts[0] ?? '')
      )}
    </span>
  );
}

export default function ProductCard({
  product,
  index,
  priority = false,
}: {
  product: Product;
  index: number;
  priority?: boolean;
}) {
  const slug = (product.category || 'shop')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Variable products open their page to choose options; simple ones add to cart.
  const actionHref = product.variable ? product.href : `/shop/?add-to-cart=${product.id}`;

  return (
    <li
      className={`product type-product post-${product.id} status-publish${
        index === 0 ? ' first' : ''
      } instock product_cat-${slug} has-post-thumbnail shipping-taxable purchasable product-type-${
        product.variable ? 'variable' : 'simple'
      }`}
    >
      <div className="sisf-e-inner">
        <div className="shop-image-wrap">
          <img
            {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
            width={300}
            height={400}
            decoding="async"
            src={product.image}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
            alt={product.alt ?? product.title}
          />
          <div className="sisf-woo-product-image-inner">
            <a
              href={actionHref}
              data-quantity={1}
              className={`button product_type_${
                product.variable ? 'variable' : 'simple'
              } add_to_cart_button`}
              data-product_id={product.id}
              aria-label={`${product.action}: “${product.title}”`}
              rel="nofollow"
              role="button"
            >
              {product.action}
            </a>
          </div>
          <a
            href={product.href}
            className="woocommerce-LoopProduct-link sis-woocommerce-loop-product__link"
            aria-label={product.title}
          />
        </div>
        <div className="shop-content-wrap">
          <span className="posted_in">{product.category}</span>
          <h5 className="woocommerce-loop-product__title">
            <a href={product.href}>{product.title}</a>
          </h5>
          <Price amounts={product.amounts} />
        </div>
      </div>
    </li>
  );
}
