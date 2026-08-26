'use client';

import { useEffect, useRef } from 'react';

export default function ScriptInjector({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;
    
    // Create a temporary div to parse the HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    const scripts = Array.from(tempDiv.querySelectorAll('script'));
    
    // Function to load scripts sequentially
    const loadScript = (index: number) => {
      if (index >= scripts.length) return;
      
      const s = scripts[index];
      const newScript = document.createElement('script');
      
      Array.from(s.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.text = s.textContent || '';
      
      if (s.src) {
        newScript.onload = () => loadScript(index + 1);
        newScript.onerror = () => loadScript(index + 1); // continue on error
        containerRef.current!.appendChild(newScript);
      } else {
        containerRef.current!.appendChild(newScript);
        loadScript(index + 1);
      }
    };
    
    loadScript(0);
  }, [html]);

  return <div ref={containerRef} />;
}
