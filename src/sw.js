import { version, manifest } from '@parcel/service-worker';

const versionName = `app-${version}`;
const assets = [...manifest, '/', '/settings'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(versionName).then(function (cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== version && caches.delete(key);
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
