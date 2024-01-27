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
"main.dart.js": "84ab70b48cd08e044110ad7551f2ad18",
"index.html": "d51d0f5ca0163924fb84180173d1bbeb",
"/": "d51d0f5ca0163924fb84180173d1bbeb",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "46b506445e32c6b3592c98071a70e7cb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"assets/AssetManifest.bin.json": "fa18a730e79570e758a2ed86cdc6e64b",
"assets/AssetManifest.json": "8e9a64c463c80f88fe7d76ee7515a60f",
"assets/NOTICES": "004c973347c1a26bd24d24c8120e77b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "d54d24a047128cef1a5f4f37f9a6d66f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/icons/ic-js.png": "31a1ef284d7bff72474471ada3ddc8d8",
"assets/assets/icons/ic_ok.png": "b3cc8efbb2c47073ca8348dc0fd88961",
"assets/assets/icons/ic_add_print.png": "897e25718c1a3de97d5ce0ba8e9e6a97",
"assets/assets/icons/ic-mongo.png": "271833ffcb30664a7754bbd1ad5ab89a",
"assets/assets/icons/ic-dart.png": "713c914d34c0606f6eabc39bea2d7db1",
"assets/assets/icons/ic-ios.png": "d38dedf5b639871cc1e7db9c7913612b",
"assets/assets/icons/ic_home.png": "67b71e0ffb94494eb65a0dcf70e284d7",
"assets/assets/icons/ic-kubernetes.png": "f3c2eae4bd59a44e003b366faeca434c",
"assets/assets/icons/ic-elasticsearch.png": "7e1fb9693719d9f67c9bae7145f65366",
"assets/assets/icons/ic_logout.png": "032d057ae283ad0b7feff1637564fbfd",
"assets/assets/icons/ic_qr.png": "a14b6b27b6eda74b6652a2bf948f7c59",
"assets/assets/icons/ic-springboot.png": "9366300d4348e61fd6390980c0422518",
"assets/assets/icons/ic_printer.png": "253691e953195bda149e02c20cc149a9",
"assets/assets/icons/ic-openapi.png": "d1dfe9621770b89c2910683550c7b19d",
"assets/assets/icons/ic-mysql.png": "ab5919587d29acfcc2d926d48cb8d6ae",
"assets/assets/icons/ic-rabbitmq.png": "071c6417a025965003c3218c3bafdf24",
"assets/assets/icons/ic_burger.png": "74ef564291a6fb7a55df0856a8463d38",
"assets/assets/icons/ic-firebase.png": "bcc75a29eef45bed61c3cb1454215b83",
"assets/assets/icons/ic-typesense.png": "59d9370711102c35534fc534a15f8d77",
"assets/assets/icons/ic-html.png": "966bd5d608b7ccaa6c4e8ea609ae4b0d",
"assets/assets/icons/ic-go.png": "5a1d282757fd03052b9534cff5001f23",
"assets/assets/icons/ic_history_list.png": "6d844a5e6861d1ca419f7afdda778247",
"assets/assets/icons/close.png": "91c34c6dca5468ef1f50cf390ed07deb",
"assets/assets/icons/ic-gcp.png": "f7cea26391c2a379f2fab69d2cb5451e",
"assets/assets/icons/ic_discover.png": "6c773d53f854a55bf11a51485a169e63",
"assets/assets/icons/ic-nats.png": "abc554f53bf5d6a82a9d51f12936e1ea",
"assets/assets/icons/ic-java.png": "293f568391fbb6a915e6dcad6c20ce5a",
"assets/assets/icons/ic-swagger.png": "9629cfc5c00bbfaf591289a25ce1cd31",
"assets/assets/icons/ic_scan.png": "6135258e1d580ef4db12233115eca897",
"assets/assets/icons/ic_profile.png": "51ec036b1d3db8a5a8959917ebdbc868",
"assets/assets/icons/ic_notif.png": "0f5bb77ba645f5f6ee87695ca7f2c8d6",
"assets/assets/icons/ic-postgre.png": "bea5007392600afa16d97ff7dc56f936",
"assets/assets/icons/ic-flutter.png": "9ad6cee548afb26d544dbfd4fef2ae58",
"assets/assets/icons/ic-kotlin.png": "c9337005ef896eff6d795b5248f9b270",
"assets/assets/icons/ic-kafka.png": "1960d79d2438c69e67a7261a24a795ab",
"assets/assets/icons/ic_search.png": "ce73ef316f45ebebc8640510f573d8ff",
"assets/assets/icons/ic_menu_reprint_qr.png": "02c8dc8982215805834f05733cfcb7be",
"assets/assets/icons/ic_setting.png": "cf229ad601afffac951d8e29b80d279e",
"assets/assets/icons/ic-react.png": "18e7b7aea8dc7b3c60be090fb7429c64",
"assets/assets/icons/assets.psd": "deb91c30302777f4b514e29cf49efaf4",
"assets/assets/icons/ic_reward_store.png": "b82fe8937716b4d0e609e1721a9c180c",
"assets/assets/icons/eye.png": "800c2b7afaed57ffe1a6887f2480b809",
"assets/assets/icons/ic-android.png": "07b6a56dd54da1c77342ce716c954f96",
"assets/assets/images/Icon-192.png": "b64c545889f0215ead174dc751e0a7ca",
"assets/assets/images/p0.png": "90fae3d954d73a42420daaff8abb631a",
"assets/assets/images/p6.png": "972aa1b1a935c40c2d3c20acc96bbdbb",
"assets/assets/images/p1.png": "9f1874d19153a87965b3cd2dee38ad63",
"assets/assets/images/metro_qrcode.png": "75981feb2291711344b41a3300157161",
"assets/assets/images/p2.png": "cc04d713a2fb8c78785760ab5315ed0e",
"assets/assets/images/p3.png": "fe8376eb2e20df93e450de099bbe591a",
"assets/assets/images/p5.png": "508a74a48d140b61a0afb5d81ca26711",
"assets/assets/images/city_backgroud.psd": "b7a4eced2fc72f5ceba5c3bd198cc2d1",
"assets/assets/images/login_image.png": "d95fb933cf8a865e701a30a6a433add4",
"assets/assets/images/p4.png": "6e53cab60a9da517286686745c21566a",
"assets/assets/images/Icon-512.png": "bafe777b650e50a9233a319370c99144",
"assets/assets/images/icon-19.png": "46b506445e32c6b3592c98071a70e7cb",
"assets/assets/images/icon-869.png": "69c1bbe60a604250395fecc62bf9ba2a",
"assets/AssetManifest.bin": "f23fa303e8170aba059da44fbe6b7029"};
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
