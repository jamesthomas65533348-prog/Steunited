// STE UNITED - FINAL SW for true push (works even when PWA closed)
self.addEventListener('push', e => {
  let data = { title: 'STE UNITED', body: 'New update', url: 'index.html' }
  try {
    if (e.data) {
      data = e.data.json()
    }
  } catch(err) {
    data = { title: 'STE UNITED', body: e.data ? e.data.text() : 'New update', url: 'index.html' }
  }
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'background.png',
      badge: 'background.png',
      vibrate: [200, 100, 200],
      requireInteraction: true,
      data: { url: data.url || 'index.html' }
    })
  )
})

self.addEventListener('notificationclick', e => {
  e.notification.close()
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('index.html') || client.url.includes('admin.html')) {
          return client.focus()
        }
      }
      return clients.openWindow(e.notification.data.url || 'index.html')
    })
  )
})

self.addEventListener('install', e => {
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim())
})