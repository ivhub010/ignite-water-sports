"use client";

import { useEffect, useRef } from "react";

export default function GoogleReviews() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove previously injected widget content
    container.innerHTML = "";

    // Create a fresh Trustindex script
    const script = document.createElement("script");

    script.src =
      "https://cdn.trustindex.io/loader.js?bcf6e1f86a18174d3c5688e3b61";

    script.async = true;
    script.defer = true;

    // Append directly inside the widget container
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div className="google-reviews" ref={containerRef} />;
}