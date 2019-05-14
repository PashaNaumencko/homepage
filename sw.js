/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/custom.css",
    "revision": "094b36ab592e27559114f6ced9ac2aa5"
  },
  {
    "url": "assets/images/avatar.png",
    "revision": "f1dcd7f4e3c4ad99dd2047a61bc4ab77"
  },
  {
    "url": "assets/images/background.png",
    "revision": "67f86f1b0d6d7731e8a926c7a4a4fb7b"
  },
  {
    "url": "assets/images/meme.jpg",
    "revision": "9c19bedaee2a6a44afeba38a3f58c3de"
  },
  {
    "url": "assets/images/meme.png",
    "revision": "9c19bedaee2a6a44afeba38a3f58c3de"
  },
  {
    "url": "assets/sounds/MAGA.mp3",
    "revision": "cf8ff54aac574f08389acdb5fcdde6c0"
  },
  {
    "url": "index.html",
    "revision": "8df72b58ea21c63e07129ef41c239296"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
