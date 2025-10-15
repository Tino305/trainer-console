self.addEventListener('install',e=>{
  e.waitUntil(caches.open('tc-v6_1').then(c=>c.addAll(['./','./index.html','./icon.png','./manifest.webmanifest','./cartridges.json','./404.html'])));
  self.skipWaiting();
});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./404.html'))));
});