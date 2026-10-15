self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong untuk PWA sederhana (membutuhkan internet agar realtime)
});