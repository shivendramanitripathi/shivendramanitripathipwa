'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1edff4cac8671638f9ab04b066836f2e",
"assets/AssetManifest.bin.json": "884751fd422dbf4e17e92f94efe88cfc",
"assets/AssetManifest.json": "c21760a02ea548edc04fcd1e2f8d11ff",
"assets/assets/fonts/Graphik-Bold.otf": "b6db2b8e4de29b06738214a25eb3987b",
"assets/assets/fonts/Graphik-Medium.otf": "e741f2e4034bace58b70cc59dfbe5594",
"assets/assets/fonts/Graphik-Regular.otf": "dbdd333afd6559c1884208b8537ab62d",
"assets/assets/images/alcohol.png": "9f6b96c3cde162bb5a679e93889609c1",
"assets/assets/images/background_1.png": "9f09ef04078d6fadbe5f848759ab6b7f",
"assets/assets/images/background_2.png": "7b643faab023873371e98c0d7941359a",
"assets/assets/images/background_mountains.png": "4e06a5d36b34caccf4de8d4d8a7687ce",
"assets/assets/images/background_rain.png": "e4ccc21f11593883219a145b47332483",
"assets/assets/images/bakery.png": "f8f6c1db431b78df8b37e5b16c1e4e0d",
"assets/assets/images/bgt.jpg": "0352d548912805ff07136879c70feb92",
"assets/assets/images/cold_drinks.png": "0f6838bbb19cd3452b38f4782e55f2cc",
"assets/assets/images/favorites.png": "28c9b33489e5b3799e434b32ecbd3343",
"assets/assets/images/hot_drinks.png": "bbbd341d2224ec7478762ae7454a2d43",
"assets/assets/images/ic_faq.png": "640ae2b39a482a80fe121c07fc7d6603",
"assets/assets/images/ic_feedback.png": "c1e8e2e25a87b6f93a1e786b78e1c405",
"assets/assets/images/ic_live.png": "fc2608b6b47e9c848327c7f934dc6466",
"assets/assets/images/ic_onboard.png": "1573a2024f8a747967f98b19086a7d6c",
"assets/assets/images/logo.png": "8a3e7e292ec672aeff149d4b4f99f914",
"assets/assets/images/lumo-bg.png": "1a54fbd499b569c48fc46729cc290b0f",
"assets/assets/images/miscellaneous.png": "a16655386d602d2fba17087f1bd3780e",
"assets/assets/images/new-bg.png": "94b4b8675a0aebaca0bbdbc7e189e371",
"assets/assets/images/other.png": "fae8a5012a40e06b870b300331680a52",
"assets/assets/images/sandwiches.png": "cdedec370259cb14904671af5f02562a",
"assets/assets/images/search.png": "beca6eed2641fac56a026e744663236c",
"assets/assets/images/snacks.png": "f3f77c2d9063b74c2aeedaf97ee26647",
"assets/assets/images/travelPasses.png": "d9a42a96ae3ad7b05d3aab42caee48a0",
"assets/assets/images/Uncategorized.png": "9757059e7980b740ec63a60cdb618f71",
"assets/assets/json/animated_wifi_eye.json": "c3c56bc16121d76e436c93afe75fc464",
"assets/assets/json/chameleon_brand.json": "9898e5be15975fac5dca78752b68a2dd",
"assets/assets/json/chameleon_customer_hub.json": "20505c3d8c12f98e76bb17e8e439b015",
"assets/assets/json/chameleon_faq.json": "6ce270bb080b2a6095e3116b1dbe80bb",
"assets/assets/json/chameleon_fleet.json": "38add362bf46c7fb60d457b9dba9b0d0",
"assets/assets/json/chameleon_rules.json": "a4f93e82ad5b26fc7e4b291bac2fc4c2",
"assets/assets/json/chameleon_service.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/json/chameleon_stations.json": "23ae7ed85a7ef36a14d12d660e870fd3",
"assets/assets/json/chameleon_tickets.json": "cf6f3d98e1a441ab1143fd695033c7b9",
"assets/assets/json/entertainment_loading.json": "7c46f5df18578f8151ec7c83bfc73597",
"assets/assets/json/products.json": "516af99a3b1a06c2fd78969ddf562076",
"assets/assets/json/session.json": "b600ef0fde4f623b06a246ab1c81f047",
"assets/assets/json/swipe.json": "62911f66bbdc08982894d08ea9d33af4",
"assets/FontManifest.json": "01acf30a15bac4de8052c4cfbfb15890",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bb5f2adafebc75cc152a98e9a55ba7ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1a669360eace3f76aab7b7728e75c558",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cd382c1187572f078dbc3901b4bcb9e",
"/": "0cd382c1187572f078dbc3901b4bcb9e",
"main.dart.js": "a41e0b080d22b912c282769d7e957e01",
"manifest.json": "1fdb43039b0883200c54e9a6dc0ccdf2",
"version.json": "277aaa89689b4bf55a501309a70b82d2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
