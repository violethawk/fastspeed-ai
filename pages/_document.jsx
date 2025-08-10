import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '@/data/config';

/**
 * Custom Document component.  Adds global meta tags, links and an
 * optional Plausible analytics snippet.  The snippet is only
 * inserted when analytics are enabled in `data/config.js`.  When
 * disabled, the commented snippet remains in the source for future
 * reference.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Find the fastest AI tools — ranked and reviewed. Profit‑optimised picks: faster tools, better payouts."
          />
          <link rel="icon" href="/favicon.ico" />
          {/*
            Plausible analytics script.  When analytics.enabled is set to
            true in the configuration the following script tag is
            rendered.  If disabled it remains commented out to avoid
            accidental network requests.
          */}
          {config.flags.analytics && config.flags.analytics.enabled && (
            <script
              defer
              data-domain={config.flags.analytics.plausibleDomain}
              src="https://plausible.io/js/script.js"
            ></script>
          )}
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;