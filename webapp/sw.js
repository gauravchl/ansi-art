const APP_PREFIX = 'ANSI-ART';
const VERSION = 'version_02';
const CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
  './',
  './index.html',
  './main.css',
  './index.js',
  './favicon.png',
];

self.addEventListener('install', e => e.waitUntil(swInstall()))
self.addEventListener('activate', e => e.waitUntil(swActivate()))
self.addEventListener('fetch', e => e.respondWith(swFetch(e)))


async function swFetch(e) {
  console.log('sw[fetch]')
  let request = await caches.match(e.request);
  return request || fetchAndCache(e.request);
}


async function swInstall() {
  console.log('sw[install]')
  const cache = await caches.open(CACHE_NAME);
  let options = { headers: { 'cache-control': 'no-cache' }};
  let requests = URLS.map(url => new Request(url, options))
  await cache.addAll(requests);
  await self.skipWaiting();
}


async function swActivate() {
  console.log('sw[activate]')
  let keyList = await caches.keys();
  let cacheWhitelist = keyList.filter(key => key.indexOf(APP_PREFIX));
  cacheWhitelist.push(CACHE_NAME)
  return Promise.all(keyList.map(function (key, i) {
    if (cacheWhitelist.indexOf(key) === -1) {
      console.log('deleting cache : ' + keyList[i])
      return caches.delete(keyList[i])
    }
  }))
}


async function fetchAndCache(request){
  const res = await fetch(request);
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, res.clone());
  return res;
}
