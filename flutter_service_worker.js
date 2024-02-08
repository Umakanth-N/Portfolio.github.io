'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8425f4f2d19a95049b2b9bb0aa6b9188",
"assets/AssetManifest.bin.json": "4949676b288b98d870c1296a5383cc1b",
"assets/AssetManifest.json": "4c87a98eb775d0c9b241decc06cceed4",
"assets/assets/icons/aws.svg": "657502782d9edbdef0b429fa6cb8f07c",
"assets/assets/icons/browser.svg": "5d9a4b88854414324476b9a0c0c4ff08",
"assets/assets/icons/certificate.svg": "7925327e02882c101a460102d8d84b70",
"assets/assets/icons/computer.svg": "8060a32b183954b4b4f993df487b5179",
"assets/assets/icons/dart.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/icons/data-21.svg": "f4aad7af6665724417941d0e93ae9f39",
"assets/assets/icons/excel.svg": "b3874c6fd55228d1bba8afa5bb5eb6e9",
"assets/assets/icons/firebase.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/icons/flutter.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/icons/git.svg": "adcab6a564a11096dc35f681cfb02ce6",
"assets/assets/icons/github.png": "45445b6b85301538b6fc3590c4264b84",
"assets/assets/icons/github.svg": "63b0dbcc85e67cc93be679be025cc269",
"assets/assets/icons/gmail.svg": "40e617741c20e0b9ffbc6932aa7e1927",
"assets/assets/icons/home.svg": "4359a6ad64f4cf812d65c7f1d3a9210a",
"assets/assets/icons/linkdin.png": "1df3a3449ae046b9754318d373d5bc84",
"assets/assets/icons/linkdin.svg": "bed064a786109ff459c90441f3e001af",
"assets/assets/icons/linkedin-125.svg": "75092600a3ba529af5360b90afb5394e",
"assets/assets/icons/location.svg": "42d34556759625967bd3bab6860e850f",
"assets/assets/icons/mysql.svg": "b04e488e156e32b474e695c43c9e7ac4",
"assets/assets/icons/phone-253.svg": "925cd45ae25f8c33dd9f7bb8e83c1336",
"assets/assets/icons/phone.svg": "b593f0ebe67e6eed02581e014aba2122",
"assets/assets/icons/powerbi.svg": "cc72d3eb07e03571ca1c610ca632d86d",
"assets/assets/icons/pro.png": "69ac5e87a5422a86cf69e30fda86d0db",
"assets/assets/icons/pro1.png": "67f7a304d02e33950cdb1f5b414832f0",
"assets/assets/icons/pro2.png": "e4e126f52cddb5992879d33e469ace92",
"assets/assets/icons/pro3.png": "60bd3d219933a6d9a560e77a1fe9a954",
"assets/assets/icons/pro4.png": "712af11a69fafe0fa1d2c0edda1585bc",
"assets/assets/icons/python.svg": "ffc01dcc015f573d0f1d831fb7b6cbca",
"assets/assets/icons/set-up-67.svg": "90add4a6541e079b5ab17534a21743a3",
"assets/assets/icons/tableau.svg": "148cae2ec843ecef83caf4606d9d3c88",
"assets/assets/icons/trophy.svg": "f9efb0d1f518d4ba24c77f3af87bda32",
"assets/assets/icons/user.svg": "ccc1137c024c8f2d531680679894a0c1",
"assets/assets/icons/web.svg": "13ab7a17d262eb47846a9ab1bf627c92",
"assets/assets/images/bg.png": "f7368f3e9a34e2fa3aa7954d2c31a251",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "922ae71a66258511694db5a080a608f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8ce7ad7ac142afc9484d4b9399732b50",
"/": "8ce7ad7ac142afc9484d4b9399732b50",
"main.dart.js": "b20810a75227cf0bd075ed6450dec622",
"manifest.json": "dcd3e0ce4a93f621de7e64bb36eeaa01",
"version.json": "bd341ba74d38c530da636604a427deda"};
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
