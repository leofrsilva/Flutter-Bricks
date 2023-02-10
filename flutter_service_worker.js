'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b12babc5e03f26446d70a19412cdff6e",
".git/config": "21ec7539646e49516b7fcf4f4a81c309",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ea57e0a44fb5a25d3887dd5edaa014f3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d062086e9d8ea3e6db26636a495c2d24",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf09ae45dc217fa48868a4d45078098b",
".git/logs/refs/heads/master": "bf09ae45dc217fa48868a4d45078098b",
".git/logs/refs/remotes/origin/HEAD": "fd36199775181918b8a77fea0c82bb8a",
".git/logs/refs/remotes/origin/master": "11538b1814d555d0a9abee49dc604a12",
".git/objects/06/5f9aef3cad3460425ff87341cce8154511dfd8": "a1fe5669f3da3a08a73e64e1db33aa34",
".git/objects/07/95752a5af5cf510fa1a3d04e391a0ce1ce9a81": "90be14027fc74a3923af7d3d2cb7db6a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/21/c2a76615828e512b8efc88b0a665dee21fc586": "a93eef661be5f378ed954aecb5ebd215",
".git/objects/35/05b697895d120d7e083db397c093a547fa7f8d": "f9519553357e7b46a421809c8240d8d9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/be72dae1d5fe375786e4beaac241bae06a05c4": "4dee12ea95effb8065450a8784e6e054",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/82230237c10ff6638de6e0b57cc086691e0aa9": "1d923ce7673b4f2b5be4bd111c6d27b7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/e49c528450b1773ad174f4ba47b7448d220c8c": "ba2f19013caa0c56564414971cdb881d",
".git/objects/58/b6cbcf1775a9fab9016c507df4bc95c66e457a": "f43271640e7b724c288e4ace4b0eab69",
".git/objects/5a/5bad78b20833789766cd80bd00168c02baadb6": "7e465e3cc69187032ccd54be5e27d769",
".git/objects/60/1f66216fb38ddb14551e1777446539754d982a": "e50b93f414f0b1c0a2236ec5f9acd0eb",
".git/objects/61/dc8512cb1162e80f59716c4cefa799cc528965": "2174713b084f807721b5dc2cba7ac4c6",
".git/objects/63/05dd328ce9e2498e446ae83258788d337abc28": "a420fcdf1350d65d0fa9c7b344ed701a",
".git/objects/64/c25d161a95e6bbf3072fa6011cd7b9f9ece6c3": "c7d89c5f38035bd76638777cc39c118e",
".git/objects/69/9bd97c3bea1c61e496778f95554464d3fbf02e": "48f2d6e2f7aff4721b13725576b57a48",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/173b801e7b00fd539afa1fe47f953fbc718c17": "bc63cbb5ba5fee4d6ea9c461818fbd27",
".git/objects/70/ec8a8b30a99b1390e8268fc9c00f229ff67fc3": "f0debbd61ea400d96eb72cebb3242177",
".git/objects/71/744fa4bba1400de9824ce9be67ffc626c18e2b": "e0b061ba2ba5ebac49f1848e1040a0cd",
".git/objects/72/4afe5655e524619c0b03038780c5d739e8a8c5": "43abb950614e6677f1f357c3cb87e4e9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/67abc21639c72518c8588e00b7aa2ba56de728": "8614a2a0876181a1e9b45ee1e6311766",
".git/objects/78/ca9cefd6bd84393d261fca4b97953ce4989c99": "8e83c21041197a78f2ed7400f12901cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/9dbc8a0900df58f332824f44c576eef5042ded": "7dd0efafcd99cd8332ef265fafeab05f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/051cacd737f02a899446d2d8b2e106936bfffd": "2658757a394504ca0c0d803015aee9d1",
".git/objects/92/1529ecbdc98885cc60f79efa17a293aa7ca544": "134449f4a0245fcd6c937c2358059bbb",
".git/objects/92/b28b0b91c6488baf91d2c1186ac7a3eb49af5e": "08742dea8a99683107dc9239cd201f1a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/39da343137ab5b4f4997df8fdc0b28e2003acf": "228e9c72952fb204766b6dfedebf569f",
".git/objects/a4/80a9c7716eccafe496eff969997b97d4b7d843": "a915393323412e236a55b6e0e09609fd",
".git/objects/aa/c41fab755953576ace3246e9c74471b25d6ffc": "23982621f39477409288ffd12c5962c3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/009f2803e0c97b1cc1ea66ec8f4e5be79c4bc3": "c2c4c06a0f7e3b3bb88abedfc0f64d22",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3a0fc70167240e598f1017caf0e26e07f87c8": "a8370d62f78c56fcb5aa6cbcec7d5520",
".git/objects/c3/b842ac9e6a511817592439f0af44a17c398762": "cf016d6cb631d776949d16abba719254",
".git/objects/cc/82148a03f6da9c6fc15126b31e6448dbe1a085": "2062743f371064f4e8c66d118a70f26a",
".git/objects/cd/f8be7e1abc6ee35b81fd4c18bcdb71c6e68968": "540bed4582b52c58eb39cd3daf421867",
".git/objects/ce/274054fe5130a18ba5b2c22648d2987d2ad974": "3d62d09d7facede86b16e7a059b3cd05",
".git/objects/cf/67a45ed081ec8b51de2e00266fe4318151b201": "f7bfb828db6c7a268f04d2c11ae8c5f8",
".git/objects/d2/f4d6b6c01ec80ef06f337fb3d9abb471e6cb26": "86e77541831b4fc6c672701e34cf3fe0",
".git/objects/d3/c8437e62ca80b321102e355bc885b1a014fe69": "1c12e8155b4036d845294121dcb6f293",
".git/objects/d5/a776f6e3aa125cef3d65388765e9ac8f2741b2": "bee8b253d8d1b8f35e7035fe83bd2a05",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/d21e76d7b7c78de1263d0fba251ca2fee614af": "8f524fd20c00f4f3979ffb701b5c98da",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ae090c24241dd120ab10f9d9e95144b10f1986": "2e85e645d3f2ed79d515fa3e400c7e8a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c8034d66ce0979aad271569c8e5de28f31eeb0": "c513cd5d3ad666d3358042e00cb979df",
".git/refs/heads/master": "ccb4a0ef6191e1c00ee2003c0f72f3f8",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "ccb4a0ef6191e1c00ee2003c0f72f3f8",
"assets/AssetManifest.json": "f9a668f1a5301cf0bc06c2edca4831bc",
"assets/assets/images/logo-bricks.png": "27d06aabb7c29a8f722b80312c726033",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9654bec2a7a44c450b48955375ae4183",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47dba167cc489c17f46bb870b45bb832",
"/": "47dba167cc489c17f46bb870b45bb832",
"main.dart.js": "f781a6e427ded515e3bdb4ddd31d68a5",
"manifest.json": "6bdc1b68147a024c60d86dde9c374b55",
"version.json": "9d466a8617b37496f1cf6aa76eb4b509"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
