// ==========================================================================
// SERVICE WORKER - SMART BAR MIXOLOGY PWA
// Provides 100% offline availability for beach, boat, and vacation rental use
// Cache v4.2 — force-busts prior caches to deliver mobile swipe and uncollapsed recipe updates
// ==========================================================================

const CACHE_NAME = 'smart-bar-mixology-v4.2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css?v=4.2',
  './js/recipes-data.js?v=4.2',
  './js/pricing-data.js?v=4.2',
  './js/app.js?v=4.2',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-192.svg',
  './icon-512.svg'
];

// Install Event: Pre-cache shell & immediately take control (skipWaiting)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching v4.1 shell & modules');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Wipe ALL stale caches and claim all open clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-first with cache fallback (offline support)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
