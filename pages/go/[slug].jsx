import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { buildAffiliateUrl } from '@/lib/link';
import { track } from '@/lib/analytics';
import tools from '@/data/tools';

/**
 * Dynamic redirect page.  When this page is visited it immediately
 * builds the appropriate affiliate URL, fires a tracking event and
 * navigates the user to the target.  If the slug is unknown a 404
 * page will be generated because `getStaticPaths` covers all
 * tool slugs.
 */
const GoPage = () => {
  const router = useRouter();
  useEffect(() => {
    const { slug } = router.query;
    if (!slug) return;
    const url = buildAffiliateUrl(slug);
    track('affiliate_click', { tool: slug });
    // Use a short timeout to ensure the event has time to fire on slow
    // connections before redirecting
    const timer = setTimeout(() => {
      window.location.href = url;
    }, 50);
    return () => clearTimeout(timer);
  }, [router.query]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-center">Redirecting…</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = tools.map((t) => ({ params: { slug: t.goSlug } }));
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}

export default GoPage;