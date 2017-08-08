const APP_PREFIX = 'ANSI-ART';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
  './',
  './index.html',
  './main.css',
  './index.js',
  './favicon.png',
];

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(request => request || fetch(e.request)),
  );
});

// Cache resources
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)),
  );
});

// Delete outdated caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      const cacheWhitelist = keyList.filter(key => key.indexOf(APP_PREFIX));
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(keyList.map((key, i) => {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log(`deleting cache: ${keyList[i]}`);
          return caches.delete(keyList[i]);
        }
      }));
    }),
  );
});
