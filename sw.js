// ==========================================================================
// SERVICE WORKER - DESTIN COCKTAIL GUIDE & SMART BAR BUILDER PWA
// Provides 100% offline availability for beach, boat, and vacation condo use
// ==========================================================================

const CACHE_NAME = 'destin-drinks-v1.1';
const ASSETS_TO_CACHE = [
  './destin_drinks_and_bar_guide.html',
  './manifest.webmanifest',
  './icon-192.svg',
  './icon-512.svg'
];

// Install Event: Cache critical shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline app shell');
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
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If response is valid, clone and save to cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Offline fallback
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Default fallback to main html if navigating
          if (event.request.mode === 'navigate') {
            return caches.match('./destin_drinks_and_bar_guide.html');
          }
        });
      })
  );
});
