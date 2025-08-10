import React, { useMemo } from 'react';
import '../styles/globals.css';
import tools from '@/data/tools';
import config from '@/data/config';
import { rankTools } from '@/lib/rank';
import TopBarPromo from '@/components/TopBarPromo';
import StickyCTA from '@/components/StickyCTA';

/**
 * Custom App component.  It computes the top ranked tool once and
 * provides it to the global promo and sticky CTA components.  All
 * other pages are rendered as children.  Global CSS is imported here
 * to ensure it is applied to every page.
 */
function MyApp({ Component, pageProps }) {
  const topTool = useMemo(() => {
    const ranked = rankTools(tools, config.weights);
    return ranked.length > 0 ? ranked[0].tool : null;
  }, []);
  return (
    <>
      <TopBarPromo tool={topTool} />
      <Component {...pageProps} />
      <StickyCTA tool={topTool} />
    </>
  );
}

export default MyApp;