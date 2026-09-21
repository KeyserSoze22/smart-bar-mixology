// ==========================================================================
// SERVICE WORKER - SMART BAR MIXOLOGY PWA
// Provides 100% offline availability for beach, boat, and vacation rental use
// ==========================================================================

const CACHE_NAME = 'smart-bar-mixology-v3.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css?v=3.0',
  './js/recipes-data.js?v=3.0',
  './js/pricing-data.js?v=3.0',
  './js/app.js?v=3.0',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-192.svg',
  './icon-512.svg'
];

// Install Event: Cache critical shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline app shell & modules');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-first with fallback to cache (offline support)
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
