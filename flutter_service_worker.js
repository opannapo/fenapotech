'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"style/default.css": "3241efa67e0f9883bf725f703131e81c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "b64c545889f0215ead174dc751e0a7ca",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "bafe777b650e50a9233a319370c99144",
"icons/icon-19.png": "46b506445e32c6b3592c98071a70e7cb",
"icons/icon-869.png": "69c1bbe60a604250395fecc62bf9ba2a",
"version.json": "d76df081ca787a08b083b3b8d4e299d8",
"manifest.json": "95e2b5737cedd5f6622dfe576e777542",
"main.dart.js": "8a86ff9ec59517cec0f833d587cd87c3",
"index.html": "464cabf471e22fbba432a7b748d8edc3",
"/": "464cabf471e22fbba432a7b748d8edc3",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "46b506445e32c6b3592c98071a70e7cb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"assets/AssetManifest.bin.json": "3b8f9faacd5fe8487595ae8f271b5032",
"assets/AssetManifest.json": "abc4660ef8336509dde4e41dca69f38f",
"assets/NOTICES": "0d9e0dac84a376fdd6a9717401366a7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/icons/ic_ok.png": "b3cc8efbb2c47073ca8348dc0fd88961",
"assets/assets/icons/ic_add_print.png": "897e25718c1a3de97d5ce0ba8e9e6a97",
"assets/assets/icons/ic_home.png": "67b71e0ffb94494eb65a0dcf70e284d7",
"assets/assets/icons/ic_logout.png": "032d057ae283ad0b7feff1637564fbfd",
"assets/assets/icons/ic_qr.png": "a14b6b27b6eda74b6652a2bf948f7c59",
"assets/assets/icons/ic_printer.png": "253691e953195bda149e02c20cc149a9",
"assets/assets/icons/ic_burger.png": "74ef564291a6fb7a55df0856a8463d38",
"assets/assets/icons/ic_history_list.png": "6d844a5e6861d1ca419f7afdda778247",
"assets/assets/icons/close.png": "91c34c6dca5468ef1f50cf390ed07deb",
"assets/assets/icons/ic_discover.png": "6c773d53f854a55bf11a51485a169e63",
"assets/assets/icons/ic_scan.png": "6135258e1d580ef4db12233115eca897",
"assets/assets/icons/ic_profile.png": "51ec036b1d3db8a5a8959917ebdbc868",
"assets/assets/icons/ic_notif.png": "0f5bb77ba645f5f6ee87695ca7f2c8d6",
"assets/assets/icons/ic_search.png": "ce73ef316f45ebebc8640510f573d8ff",
"assets/assets/icons/ic_menu_reprint_qr.png": "02c8dc8982215805834f05733cfcb7be",
"assets/assets/icons/ic_setting.png": "cf229ad601afffac951d8e29b80d279e",
"assets/assets/icons/ic_reward_store.png": "b82fe8937716b4d0e609e1721a9c180c",
"assets/assets/icons/eye.png": "800c2b7afaed57ffe1a6887f2480b809",
"assets/assets/images/Icon-192.png": "b64c545889f0215ead174dc751e0a7ca",
"assets/assets/images/logo.png": "2a4bf5c9adf2c533598260d652b51deb",
"assets/assets/images/metro_qrcode.png": "75981feb2291711344b41a3300157161",
"assets/assets/images/login_image.png": "d95fb933cf8a865e701a30a6a433add4",
"assets/assets/images/footer_logo.png": "dfeebada29084a24bf47e38c233fdfce",
"assets/assets/images/Icon-512.png": "bafe777b650e50a9233a319370c99144",
"assets/assets/images/icon-19.png": "46b506445e32c6b3592c98071a70e7cb",
"assets/assets/images/icon-869.png": "69c1bbe60a604250395fecc62bf9ba2a",
"assets/AssetManifest.bin": "631d17e402f8ab44faa970adfe419310"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
