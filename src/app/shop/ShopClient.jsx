'use client';

import { useMemo, useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import 'dirham/css';
import { DirhamIcon } from 'dirham/react';

const categories = ['All', 'Caps and hats', 'Swimwear', 'Rash guards and tops', 'Bottles', 'Accessories'];

// Replace photo: null with a path such as '/watersports/merch/cap.jpg' when ready.
const products = [
  { id: 1, title: 'IGNITE Classic Cap, Founders Edition', category: 'Caps and hats', price: 100, isNew: true, photo: "https://ignitewatersports.com/wp-content/uploads/2026/08/IGNITE_Classic_Cap_Front-300x400.jpg" },
  { id: 2, title: 'IGNITE Dubai Water Sports Cap', category: 'Caps and hats', price: 100, isNew: true, photo: "https://ignitewatersports.com/wp-content/uploads/2026/08/IGNITE-Dubai-Water-Sports-Cap-%E2%80%93-Breathable-Performance-Cap-Blue_Front-300x400.jpg" },
  { id: 3, title: 'IGNITE Lifeguard Straw Hat', category: 'Caps and hats', price: 125, photo: "https://ignitewatersports.com/wp-content/uploads/2024/08/IGNITE-Life-Guard-Straw-Hat-IGNITE-300x400.jpg" },
  { id: 4, title: 'Drawstring swim shorts', category: 'Swimwear', price: 150, photo: "https://ignitewatersports.com/wp-content/uploads/2024/02/black-swim-shorts-300x400.png", options: ['Black', 'Blue', 'Orange'], optionLabel: 'colour' },
  { id: 5, title: 'Rash guard, long sleeves', category: 'Rash guards and tops', price: 150, photo: null },
  { id: 6, title: 'Rash guard, short sleeves', category: 'Rash guards and tops', price: 120, photo: null },
  { id: 7, title: 'IGNITE Loch water bottle', category: 'Bottles', price: 165, pricePrefix: 'From', photo: "https://ignitewatersports.com/wp-content/uploads/2024/02/loch-300x400.png", options: ['Small', 'Large'], optionLabel: 'size' },
  { id: 8, title: 'Kids top', category: 'Rash guards and tops', price: 50, photo: "https://ignitewatersports.com/wp-content/uploads/2024/02/kids-top-300x400.png" },
];

export function ShopClient() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('latest');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [cart, setCart] = useState([]);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((p) => category === 'All' || p.category === category);
    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'name') return a.title.localeCompare(b.title);
      return a.id - b.id;
    });
  }, [category, sort]);

  const addToCart = (product) => {
    const selected = selectedOptions[product.id];
    if (product.options && !selected) {
      document.getElementById(`shop-option-${product.id}`)?.focus();
      return;
    }
    setCart((previous) => [...previous, { ...product, selected }]);
  };

  return (
    <>
      <SiteHeader />
      <main className="sup-page">
        {/* Original hero preserved */}
        <div
          className="elementor-element elementor-element-feea95c sup e-flex e-con-boxed e-con e-parent"
          data-id="feea95c"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading"
              data-id="3297bee"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="heading.default"
            >
              <h1 className="elementor-heading-title elementor-size-default">IGNITE Merch</h1>
            </div>
          </div>
        </div>

        <section className="ignite-shop" aria-label="IGNITE merchandise">
          <div className="shop-container">
            <div className="shop-filters" aria-label="Filter products by category">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`shop-filter ${category === item ? 'active' : ''}`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="shop-toolbar">
              <select aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="latest">Sort by: Latest</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="name">Sort by: Name</option>
              </select>
              {cart.length > 0 && <span className="shop-cart-count">Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}</span>}
            </div>

            <div className="shop-grid">
              {visibleProducts.map((product) => (
                <article className="shop-product" key={product.id}>
                  <div className="shop-product-image">
                    {product.photo ? (
                      <img src={product.photo} alt={product.title} loading="lazy" />
                    ) : (
                      <span className="shop-photo-placeholder">Product photo, 3:4</span>
                    )}
                    {product.isNew && <span className="shop-new-badge">New</span>}
                  </div>
                  <div className="shop-product-info">
                    <h2>{product.title}</h2>
                    <p className="shop-product-price">
                      {product.pricePrefix && `${product.pricePrefix} `}
                      <DirhamIcon size="1em" /> {product.price}
                    </p>
                    {product.options && (
                      <select
                        id={`shop-option-${product.id}`}
                        className="shop-option-select"
                        aria-label={`Select ${product.optionLabel} for ${product.title}`}
                        value={selectedOptions[product.id] || ''}
                        onChange={(e) => setSelectedOptions((prev) => ({ ...prev, [product.id]: e.target.value }))}
                      >
                        <option value="">Select {product.optionLabel}</option>
                        {product.options.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                    )}
                    <button type="button" className="shop-add-btn" onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="shop-product-count">Showing {visibleProducts.length} of {products.length} products</p>
          </div>
        </section>

        <style jsx>{`
          .sup-page { background: #fff; overflow: hidden; }
          .sup { display: flex !important; min-height: 420px !important; background-image: url('/watersports/loch.png') !important; background-position: center; background-size: cover; }
          .sup .e-con-inner { align-content: center !important; }
          .sup h1 { font-size: 40px; color: #fff; text-align: center; }
          .ignite-shop { padding: 38px 0 55px; color: #242a2e; }
          .shop-container { width: min(1180px, calc(100% - 44px)); margin: 0 auto; }
          .shop-filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 22px; }
          .shop-filter { border: 1px solid #e2e4e5; border-radius: 40px; background: #f7f8f9; color: #51565a; padding: 10px 23px; font-size: 15px; line-height: 1.3; cursor: pointer; transition: .2s; }
          .shop-filter:hover { border-color: #f39836; }
          .shop-filter.active { background: #f39836; border-color: #f39836; color: white; font-weight: 700; }
          .shop-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 35px; }
          .shop-toolbar select { min-height: 44px; padding: 9px 35px 9px 17px; border: 1px solid #dedfe0; border-radius: 10px; background: #fff; color: #555; font-size: 15px; cursor: pointer; }
          .shop-cart-count { color: #59636a; font-size: 14px; }
          .shop-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 26px; }
          .shop-product { min-width: 0; background: #f7f8f9; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; }
          .shop-product-image { position: relative; aspect-ratio: 3 / 4; background: linear-gradient(145deg, #e7eef1, #cbd9de); overflow: hidden; }
          .shop-product-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .shop-photo-placeholder { position: absolute; left: 12px; bottom: 14px; font: italic 13px monospace; color: #97a5ab; }
          .shop-new-badge { position: absolute; left: 13px; top: 13px; padding: 5px 15px; border-radius: 20px; background: #213139; color: #fff; font-size: 12px; font-weight: 700; }
          .shop-product-info { padding: 19px 20px 20px; flex: 1; display: flex; flex-direction: column; align-items: flex-start; }
          .shop-product-info h2 { font-size: 18px; line-height: 1.35; font-weight: 700; margin: 0 0 6px; color: #222; letter-spacing: 0; }
          .shop-product-price { color: #f39836; font-size: 18px; font-weight: 700; margin: 0 0 15px; display: flex; align-items: center; gap: 4px; }
          .shop-option-select { width: 100%; min-height: 42px; border: 1px solid #52616a; border-radius: 9px; background: #fff; color: #344047; padding: 8px; margin: auto 0 10px; font-size: 14px; }
          .shop-add-btn { min-height: 46px; width: 100%; margin-top: auto; padding: 10px 12px; border: 0; border-radius: 10px; background: #f39836; color: white; font-size: 16px; font-weight: 700; cursor: pointer; transition: background .2s; }
          .shop-add-btn:hover { background: #e78318; }
          .shop-product-count { margin: 34px 0 0; color: #92999d; text-align: center; font-size: 14px; }
          @media (max-width: 900px) { .shop-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; } }
          @media (max-width: 650px) { .sup { min-height: 270px !important; } .sup h1 { font-size: 30px; } .ignite-shop { padding: 26px 0 40px; } .shop-container { width: calc(100% - 30px); } .shop-filters { gap: 8px; } .shop-filter { padding: 9px 14px; font-size: 13px; } .shop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; } .shop-product { border-radius: 14px; } .shop-product-info { padding: 13px 12px; } .shop-product-info h2 { font-size: 14px; } .shop-product-price { font-size: 15px; } .shop-add-btn { font-size: 13px; min-height: 42px; } .shop-photo-placeholder { font-size: 10px; left: 8px; } }
        `}</style>
      </main>
      <SiteFooter />
    </>
  );
}

export default ShopClient;
