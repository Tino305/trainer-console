self.addEventListener('install',e=>{
  e.waitUntil(caches.open('tc-v5').then(c=>c.addAll(['./','./index.html','./icon.png','./manifest.webmanifest','./cartridges.json'])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});