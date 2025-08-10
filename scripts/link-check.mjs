#!/usr/bin/env node
/*
 * Sanity check for affiliate links.  It issues a HEAD request to
 * each primary and fallback URL defined in `data/links.js` and
 * reports whether the server responds with a status code under 400.
 * This script is not exhaustive – it does not follow redirects or
 * validate content – but helps catch obvious typos or dead links.
 */
import links from '../data/links.js';
import http from 'http';
import https from 'https';

function checkLink(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

async function run() {
  for (const slug of Object.keys(links)) {
    const entry = links[slug];
    const urls = [];
    if (entry.primary) urls.push(entry.primary);
    if (Array.isArray(entry.fallbacks)) urls.push(...entry.fallbacks);
    for (const url of urls) {
      const ok = await checkLink(url);
      console.log(`${slug} -> ${url} : ${ok ? 'ok' : 'fail'}`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});