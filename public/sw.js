// FatFox landing page — intentionally no service worker.
// This file exists only to satisfy legacy service-worker registrations
// from previously installed PWA apps on the same origin.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());