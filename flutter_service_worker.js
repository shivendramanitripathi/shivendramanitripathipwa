'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b95fbcc9b964dc4257dfab941e99d66f",
"assets/AssetManifest.bin.json": "4754aac37d3e96575ba2cff010f52cde",
"assets/AssetManifest.json": "8b349b007b129df528ab4ab0ba1e372f",
"assets/assets/fonts/Graphik-Bold.otf": "b6db2b8e4de29b06738214a25eb3987b",
"assets/assets/fonts/Graphik-Medium.otf": "e741f2e4034bace58b70cc59dfbe5594",
"assets/assets/fonts/Graphik-Regular.otf": "dbdd333afd6559c1884208b8537ab62d",
"assets/assets/images/alcohol.png": "9f6b96c3cde162bb5a679e93889609c1",
"assets/assets/images/background_2.png": "7b643faab023873371e98c0d7941359a",
"assets/assets/images/background_rain.png": "e4ccc21f11593883219a145b47332483",
"assets/assets/images/bakery.png": "f8f6c1db431b78df8b37e5b16c1e4e0d",
"assets/assets/images/barcode.png": "d420d70258034063046625bd309fbf96",
"assets/assets/images/belowGamePipe.png": "be028413d59f9c6e71abd7dd862ed50d",
"assets/assets/images/birdIcon.svg": "52fb85c30f8188820890c172d1b828db",
"assets/assets/images/check.svg": "e0596b3c3caec990f97d78b64db59a06",
"assets/assets/images/cold_drinks.png": "0f6838bbb19cd3452b38f4782e55f2cc",
"assets/assets/images/complaint.svg": "e444b6866a00a46e5e6c363288397ade",
"assets/assets/images/cursor.svg": "fd829c2ccdaa14bcfd9faf32477a5be9",
"assets/assets/images/dir_left.png": "366d186dec5ad6186cde9361a22d8bd0",
"assets/assets/images/dir_right.png": "acb957478306787b35311cfc0c74d137",
"assets/assets/images/divider.png": "ef834c03bc34b639243444e8da69b245",
"assets/assets/images/favorites.png": "28c9b33489e5b3799e434b32ecbd3343",
"assets/assets/images/flappy_bird.png": "b7d632a693c5a4cc0615244b22a7f1f0",
"assets/assets/images/flot_button.svg": "2cb1364703a918f6fa4a264ce4e34503",
"assets/assets/images/game-bg-3.png": "3e31c1828b2424d562579afd1539820c",
"assets/assets/images/gamePipe.png": "e622c4a8fa7fdba5c8d5a73bae082a95",
"assets/assets/images/game_Icon.png": "82cc5b9a1d71d444da21d058480e2fe3",
"assets/assets/images/handIcon.svg": "9b6fc5478af13143abcbccda45e73e0f",
"assets/assets/images/hot_drinks.png": "bbbd341d2224ec7478762ae7454a2d43",
"assets/assets/images/ic-request-assistance.png": "20578d50af0c37d0479a678f6aa6dd13",
"assets/assets/images/icDaytime.png": "00a94bb793cf176e53464051cc019eb0",
"assets/assets/images/icDayTimeMobile.png": "726a861db6f4742a4477af67ed2f9522",
"assets/assets/images/icMobileMorning.png": "e6d82d89436ed77b90ac3e91cd3440ec",
"assets/assets/images/icMorningView.png": "857c2eb5be48921bc98ba27eff3c4e98",
"assets/assets/images/icNightMobile.png": "389649809f0c2f52d90e3dbf31202343",
"assets/assets/images/ic_down_direction.svg": "feff22228d1594d9b9269fd50c6b4d82",
"assets/assets/images/ic_faq.png": "6d2d2f793be060a8cce4896c451d34bd",
"assets/assets/images/ic_feedback.png": "c1e8e2e25a87b6f93a1e786b78e1c405",
"assets/assets/images/ic_live.png": "fc2608b6b47e9c848327c7f934dc6466",
"assets/assets/images/ic_location.png": "a3b83e54777bd019a7d35259f3e48437",
"assets/assets/images/ic_Medical.svg": "b9aa7cd5654c06f9bba88b6a013e2161",
"assets/assets/images/ic_Morning.png": "3c7981472e75376133b4ac6e639331d2",
"assets/assets/images/ic_Night.png": "e5e01c7c0181d9ed7f2f0a795ef31bf6",
"assets/assets/images/ic_onboard.png": "1573a2024f8a747967f98b19086a7d6c",
"assets/assets/images/ic_safety.png": "7e1538b0dddf2bab8ae9f48e38a9c135",
"assets/assets/images/ic_safety_on.png": "9b924b9e604edad977dbe3f89c382836",
"assets/assets/images/ic_train_right.png": "d0c08e406ab1aa18355ede57dff9d771",
"assets/assets/images/ic_up_direction.svg": "3abc7693103f02c2ad7d18f8152f5be1",
"assets/assets/images/information.png": "805b37c8573c290318b78fe09478b043",
"assets/assets/images/left-train-face.png": "f770d8225921d3a8a7ab96f6de58d7c1",
"assets/assets/images/logo.png": "8a3e7e292ec672aeff149d4b4f99f914",
"assets/assets/images/luggage.svg": "6b8687f047c1180aa75eb86535c28c15",
"assets/assets/images/medical.svg": "f8f4146af4b7b3be42f011838faa9b9f",
"assets/assets/images/miscellaneous.png": "a16655386d602d2fba17087f1bd3780e",
"assets/assets/images/new-bg.png": "94b4b8675a0aebaca0bbdbc7e189e371",
"assets/assets/images/onboard_assist.png": "9e89df14446e368c418e1a111f2e64de",
"assets/assets/images/other.png": "fae8a5012a40e06b870b300331680a52",
"assets/assets/images/other.svg": "214fc0a1522b3efd6eef2d0de57e5fb1",
"assets/assets/images/right-train-face.png": "f07bcf99d267ce4a320ee23425a7394c",
"assets/assets/images/safety.png": "cc16b9fc20841ad07f87bc7a79fa30e9",
"assets/assets/images/sandwiches.png": "cdedec370259cb14904671af5f02562a",
"assets/assets/images/search.png": "beca6eed2641fac56a026e744663236c",
"assets/assets/images/service_delay.svg": "660db825195649d58d5522b5c6b95410",
"assets/assets/images/snacks.png": "f3f77c2d9063b74c2aeedaf97ee26647",
"assets/assets/images/star.svg": "6ec78b64978453813d553d8cd2b2afeb",
"assets/assets/images/time_delay.svg": "19b476c7b29af8c17b04673dcd80a0ef",
"assets/assets/images/train_down.png": "01b6e492c1f424ea39c78adfbc0c4293",
"assets/assets/images/train_icon.png": "84557a47e7c002987cc0da5891d36192",
"assets/assets/images/train_layout.png": "605969378cef1b25daf80649d0fadba9",
"assets/assets/images/train_up.png": "a720ac7f4b1417b6bd079d97babb1422",
"assets/assets/images/travelPasses.png": "d9a42a96ae3ad7b05d3aab42caee48a0",
"assets/assets/images/unwanted.svg": "70b2990cb02301c273fa866cd93b9d79",
"assets/assets/images/up_divider.png": "d26b7c4f6c299ba1d0522248ead6224f",
"assets/assets/images/window_space.png": "7528e77bc664ba6701a1facc03e801f9",
"assets/assets/json/animated_wifi_eye.json": "c3c56bc16121d76e436c93afe75fc464",
"assets/assets/json/chameleon_brand.json": "9898e5be15975fac5dca78752b68a2dd",
"assets/assets/json/chameleon_customer_hub.json": "20505c3d8c12f98e76bb17e8e439b015",
"assets/assets/json/chameleon_faq.json": "f42a65bdb3464710f9e3630880da3a08",
"assets/assets/json/chameleon_fleet.json": "38add362bf46c7fb60d457b9dba9b0d0",
"assets/assets/json/chameleon_rules.json": "a4f93e82ad5b26fc7e4b291bac2fc4c2",
"assets/assets/json/chameleon_service.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/json/chameleon_stations.json": "23ae7ed85a7ef36a14d12d660e870fd3",
"assets/assets/json/chameleon_tickets.json": "cf6f3d98e1a441ab1143fd695033c7b9",
"assets/assets/json/chat_config.json": "f3b428539ddbe4a39fe702bd50163618",
"assets/assets/json/complaint_contact_info.json": "9675dbc50b44d2ee37558cbebeec8c98",
"assets/assets/json/entertainment_loading.json": "7c46f5df18578f8151ec7c83bfc73597",
"assets/assets/json/feedback_questions.json": "5f38be2d18c7e576cf9c25fb0a03e34e",
"assets/assets/json/products.json": "0d46e90ed7dad99f79a5de963df913dd",
"assets/assets/json/session.json": "b600ef0fde4f623b06a246ab1c81f047",
"assets/assets/json/swipe.json": "62911f66bbdc08982894d08ea9d33af4",
"assets/assets/json/three_dots.json": "9356b7d3a142706d05b7e53b53c17a1c",
"assets/assets/json/train_layout_data_new.json": "45f3f794b9070a635c6776635501a3e5",
"assets/FontManifest.json": "01acf30a15bac4de8052c4cfbfb15890",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ad72f923a9cc17ef9c84d79560520635",
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
"flutter_bootstrap.js": "8f53fa4441cac6d16a503e42c618e9e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dabd8e1b1511617934c14f8f276bfa39",
"/": "dabd8e1b1511617934c14f8f276bfa39",
"main.dart.js": "cd0750713121c136b73fadb199588f46",
"manifest.json": "463ff0dbffcd25c3d22004e9c7fc809a",
"pdf/lumo_seat_plan.pdf": "e4e25d6059cd54be2229d0e5d0087454",
"pdf/safety_checklist.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"pdf/train_safety_guide.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"pwa_install.js": "6ff44a641c3f9dcf8e2d82d28f11e799",
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
