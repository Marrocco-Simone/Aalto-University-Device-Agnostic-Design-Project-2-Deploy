'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a51db14bffee2cf2f747ae1c138292c8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"main.dart.js": "ca8ec0bd12eecb3f3f26cfc5470709a8",
"index.html": "3e56d239747c536bf4903d17b3071b4b",
"/": "3e56d239747c536bf4903d17b3071b4b",
"version.json": "61eaebbc561e97868707ade237ff4874",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/fonts/MaterialIcons-Regular.otf": "2d5cf3eea8f13c573b557e11c34e7823",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "9d72ebb00b92884299ba0a97010aaab9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "0a5f1df47898cdd983e3e1b2a25651a1",
".git/logs/refs/remotes/origin/main": "421973e44c2fa291f47040fb31fe6157",
".git/logs/refs/heads/main": "5e70e37bcd22ef216e5d855e8d872c90",
".git/logs/HEAD": "5e70e37bcd22ef216e5d855e8d872c90",
".git/refs/remotes/origin/main": "b903a607a9deb19bc725692dd7beb687",
".git/refs/heads/main": "b903a607a9deb19bc725692dd7beb687",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/FETCH_HEAD": "d5cc82fcd658a8da8d2d00adfb6ec080",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/b8/d354533e00630c94195155e5347a80c1a6b005": "9cb2fe1f9e360db88aab43cd05db1ad6",
".git/objects/4c/aeffbe785505aa80a40af9866a0ea904bead6a": "bf4505901ddb30a79a2b7cd93624db5e",
".git/objects/43/ce660171ea461283d445c2554900ec5cde355c": "f4a027b23004dc00afff1add2ef5fd71",
".git/objects/f6/feaec0f8906b24a095d26a6520e1ba0278b0ab": "712645b187e8e8dbcc457e01f29c2d0e",
".git/objects/f6/5c94c990345dcb3681249ab10777e20284cf5e": "e631e6b242dde5d8476ba7aff3d1693f",
".git/objects/f6/888b225b8f2991910e181c9e1f2e10b24d8b14": "23de176f295016be2fe0a6729ab0362e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/67/f82f4505d3e9337ae2c424b365dd67933de6f0": "2a72ee7f45a68cb4bfee346d54a6f0fc",
".git/objects/68/efa5b914362259f16964d2973a389b06d9aa89": "912824a838440884674dc1dd350d4283",
".git/objects/ed/5213f6f58db39324f7cf671e5cd6e44cd70132": "8228a800ed2afe8383efcd37cc9fd606",
".git/objects/96/776497a515053892cd21ff022329b56171ea39": "0297ccba2126e6754a4b0780b6de8d63",
".git/objects/d7/dc5b2a8f7ab20c5fb64ea807a3eb1bcc46669d": "017c8889799aa36745f422a6ab678e79",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/79/f3876323d38f6d2d99b6641ceeb44cbde4bb23": "6fa80c9aaca145947bb32c1735cec9dc",
".git/objects/79/7e3bbae4a87daa47f0de455b85df78dd87d52b": "d9d28ed4a760d68d571b1d90bd901082",
".git/objects/39/994b9b9b3d73e2b29d1cfc16e558f7800321cc": "aa87e6032a42f767886be606ddc5a28a",
".git/objects/56/04632325a3a260a35927c0b2fe149dd9951a1d": "6584c0763c44ee4c24c6c384567041a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8c/ad5a9ad64b5a53371ecb48cf6b26b6f7a3c168": "2854a950a93ecf8b77e157498898197e",
".git/objects/93/f183d84ebf02007b432691f730c5b85dd197a1": "171ccce00b80c9bfc7733f4bc8d3f6d6",
".git/objects/6e/b1adb47df48959dece6f3540a58eb8711591ea": "1fa2cd7c320e8f89099b0eca5e5a769d",
".git/objects/62/6b5feb468f3112fcb42c36ffde80a912a054e6": "7a4548ae53f18d2989a8be8997d8109d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/80/1f28cf772b2e352763bb2461da0a8871fc0799": "3ad2e08890883006cd9ec22ec2f9e39a",
".git/objects/a6/97ff911507c01931878ffe309e34377b0b65f6": "5b5110fe0fecf2924a79ba34db42ae48",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/aa/724a0cc3ea1a8fe8ad254391235fd2e0d4e053": "f15d7a12dca40a75ae263d42a43b9267",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/98/0701826b4695c97a7405910712a17c807a37cd": "b25772e975f0b565d41106eaad990614",
".git/objects/f4/0b9d0dba1b4e8ffb4c3ea6664fd1bd2df22adb": "049425acb3d8bfcc0f42b3775e291c8d",
".git/objects/c1/432ed00edba1a86bd6300b99263a8939f705ee": "19d102e71a8ea8c8257d60e20e0ca93d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/c6/0e279ebd16879f194a3ff19467f48eedde009f": "802eb3515ccda9ac06d9860076ab260d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/3e/8bae722f77ac5519cbbd149a3a683e3b1717d5": "071093ee69ed902051ffdad8ab091a3d",
".git/objects/c3/e17f760b2ad944bb3d0dd74af37b33fb0e560c": "cabdcb30c1e430f813286ea1b14a1bff",
".git/objects/2d/68e7d0601ba67839d9b3116526c4213e147519": "e3c496ea9eae3db37a5b0269d84c67a7",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/78/a248746929d8540213563bac3880dcdb99fdb1": "f70b02700dd3675ef598219d1d1b0379",
".git/objects/88/c55b844176a3b800c77eefca4f43779a33e9f5": "726f935d664bdb498b1610ecb592cf7c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/a3/6b9ca3fd52ca7069207ec7c1bef8231fe5dd97": "2f71a962c17190df103201498387c411",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/33/7f5b1642c81a6eea88193df02712e806ccde82": "b2b645959d089b97c1111caf6e582c9f",
".git/objects/e7/6561d4b28a804061d7b292dbb5e21c9cc1883c": "f29230936b8af353a4818b6e49dbb32f",
".git/objects/0d/b3d59877806ccf0e1effc14ee512d8e0031018": "c686c49de55e53b95f9cd1e4d03008a0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f5/daeeae84ffae5628066ec752e50d1c52d4188e": "2116f13eaffc1a15fb7dc6555b73a909",
".git/objects/6c/5c01b516e3a58943cad4903e83774c25313b56": "0a809a6ce15602a58dcb49f6e0411ebd",
".git/objects/6b/4f26f65c992b0ba6212a3b3ac2ec53589ba610": "15ab6fe417d165ba3e0016f1f26da04e",
".git/objects/6d/7e090b9801c53f31752fb0a395c155d6cfe05e": "de304a957310ea6509f67b008f07a862",
".git/objects/a5/f5b09eb77d6939cb159815dd68c79473aecb8a": "68f3e7bd0eaa7cc6ab74e7f66e1057c9",
".git/objects/a5/6fbefa5ac6ba5ae9d7f5fa2cbcb295971f0ada": "a2af6ba832c9da0643fab030777b5335",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/de/30e1f96cf03c2efd56ad5888f63d323d296b64": "6fb8f665534357bf600a2bd4eeacfbbe",
".git/objects/d1/3fa3baec354b3d4e0982e050a4ff90de62a42b": "71328cd42c38087addce1a901f3d912c",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/ce/0da26b37f01bd07bd78dc155292b83a151cf6c": "05c47a0b613350980ae7651d40845c45",
".git/objects/14/9da52f899fd989c77d2fd688881b1a98854074": "558a5a318df7d6bc57e065c2c88615f7",
".git/objects/ef/f9ed24f79211e7a82cd55c3e604d661ab7c528": "f421aa88f09981656e22b7092024a08b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/2051cb99671a0b19e898d9bc545c85e45ecb68": "11bc0428f6224956ae84d711c8228e58",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/6ebe6a67b3200f656df34720dbed6b47edff6f": "4fa6d4eb4bec2208d5e0bee80a5b4a12",
".git/COMMIT_EDITMSG": "728cc5c5a656d51f4459b1219227a92e",
".git/index": "42ef74726858bedcc33e28e47c68e6ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "b903a607a9deb19bc725692dd7beb687",
"manifest.json": "62a383ce248ee3620a950fa4a6d653f5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
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
