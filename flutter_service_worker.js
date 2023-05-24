'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ea876f8f523b4be6f7371dc76e58e236",
"index.html": "c3b55be5497ec1d87354b56da61407e9",
"/": "c3b55be5497ec1d87354b56da61407e9",
"main.dart.js": "beb1c27a58a5aba77d464b607a7b9af2",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b7dfd0db959b558f09a4298ee8df261",
"assets/AssetManifest.json": "59854753a3a00721268e0cd9f0a62fd5",
"assets/NOTICES": "9b59cbdfe867b9c712e5fe6d51360ecf",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25855.jpg": "e86ad0539c613636369e5bff7c9a4749",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B38.jpg": "d9ce5664b3471230f2f18b0b33119110",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25854.jpg": "4fe1f354adc7ed65ed3ee1bb1edcab40",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25856.jpg": "61c0ed5341e2918d358267fbcbee1282",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_8.png": "2e213c576ced8f1468802377be198956",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_9.png": "484a8fbe312f4e9857a5902846b14f43",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25853.jpg": "19293bba12b85a646dc5606aef9247ea",
"assets/assets/%25E7%25B8%25BD%25E7%25AD%2596%25E5%25B1%2595.jpg": "b335c4bb5fe58b0788230a2ae89ca17c",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25852.jpg": "f9449bb90d245bb6f6e2cd78af1bed25",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%25851.jpg": "dd5bdd0f10b20cc97f83ccdf0964b231",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_2.png": "bb4d1e61fefd63ea5f1afb236479c10e",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_3.png": "060ec7b72789ee93e5bae47ebd3ccb9d",
"assets/assets/back_arrow.png": "f0b6d28f019d379faa907282369776bc",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%258513.png": "1367e3fbad3abb57211f786199ef76f8",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_11.png": "ec1367d01456b2180772fc2d07f51c9e",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_1.png": "24e68d35410be3f809f73190650b9dce",
"assets/assets/%25E9%25A6%25AC08.jpg": "68f4c0ee85ab262e60794da30ac9e123",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_10.png": "6a1b941451163998845d2fac68aedb98",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_9.png": "88455f23b24da26b644ddccfe534d86b",
"assets/assets/%25E6%25B3%25A2%25E5%25A4%259A%25E9%2587%258E%25E6%25B3%2589.jpg": "0e41622e17b6e556104282291ccb828d",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_4.png": "283acc6aac7e5e87202752421ce89cae",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_5.png": "dcd987644492b491a12057aaf5ecfd5f",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_8.png": "48546ddfc250cd68dba9b7d0ad2214f7",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%258515.png": "fd9a8b44a12bf835588322675a266073",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_7.png": "22db7f91a52fbe19f344e5e49911f88a",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_6.png": "64bd55639474179afdd049b206e13388",
"assets/assets/%25E8%25BC%2594%25E7%2589%2599%25E7%259B%25B8%25E6%25A4%258514.png": "7d35ba4f615b83385082d0cde9696362",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_6.png": "e22204e253be734a6bfacd4ca399a18e",
"assets/assets/%25E9%25A6%25AC02.jpg": "4185e9353e60dbdfbb460a8a794c6f0f",
"assets/assets/%25E9%25A6%25AC03.jpg": "d914f2f8fa48a0f8a9c74434df4ee6f5",
"assets/assets/%25E5%25A4%258F%25E6%2584%259B%25E8%258F%25AF.jpg": "0d8733a7fa16de3abc1c4e146f9af0ea",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_7.png": "dabb0eb1936785a67685f264b585510f",
"assets/assets/%25E6%25B0%25B4%25E8%25B0%25B7%25E7%25AF%25A4%25E5%258F%25B8.jpg": "423e0b158f7cd7ab381c6f32977fc9c7",
"assets/assets/favicon.png": "264181f754c04266bb152566eb8655ca",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_5.png": "0c7c8e0677cad01d55d0a460a8a5bcfa",
"assets/assets/header.png": "e6e6a1c0e98159d468a51a5408a7c0ef",
"assets/assets/hanah5.jpg": "4e4cbaa162fe1a373b3f944158adce1b",
"assets/assets/%25E8%259D%25B6%25E5%2585%2589%25E7%2586%25A0%25E7%2586%25A0_8.png": "4c41dd0ab74c7dcc2c5ba913ca6c035c",
"assets/assets/%25E9%25A6%25AC01.jpg": "00c13891beac02bb256544f535485174",
"assets/assets/hanah4.jpg": "b5e2756d454c3b8359cbad56b3e28e5e",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_4.png": "42db93bd246cb75c865dd45707a4c297",
"assets/assets/logo.png": "264181f754c04266bb152566eb8655ca",
"assets/assets/bottombg.png": "b3f688683cd13aa6a6c910323ff0c901",
"assets/assets/%25E9%25A6%25AC04.jpg": "d34ea411857a5c002e843b160d3d201a",
"assets/assets/%25E9%25A6%25AC05.jpg": "252b93b59def3a754186a0caff45e17c",
"assets/assets/hanah1.jpg": "3bea8e4c6db11e57507f2337853e020a",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_1.png": "e3382a920dfd29b76c4f5c97182715e6",
"assets/assets/%25E5%25B1%25B1%25E5%25B4%258E%25E5%2593%25B2%25E6%259C%2597.jpg": "4040377157b0c137fb301bf3226a719e",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_3.png": "64816c894320b6c93875aad915801195",
"assets/assets/hanah3.jpg": "5c408e8a0a0dd774f74357e5e85ffe2b",
"assets/assets/%25E9%25A6%25AC07.jpg": "3884f8d110e98fd975c0374574550961",
"assets/assets/%25E9%25A6%25AC06.jpg": "3817ffd52d1f96fae21f6aa16a7b9b89",
"assets/assets/hanah2.jpg": "4a0317c3f91d2c990c67bb77f782ba17",
"assets/assets/bottombar.png": "cbd4ecb0af8bc2f1bdb2ea22d2a0e31e",
"assets/assets/%25E9%25BC%2593%25E4%25BA%25A6%25E6%2588%2596%25E9%258C%259E_2.png": "49b615dff9dd276d2368c595dc1820e2",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_2.png": "a79df27c2e5c900609a9e0b437d3443f",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B31.jpg": "08e4d4677c9dcb13a060a8c93876d729",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_3.png": "33ffc195de150384c45f5e9fa2206169",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_1.png": "1878fa231b7ea042d6a4dbda4fdea117",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B32.jpg": "a66111f2bc044e4871ef5b5f0cf44efa",
"assets/assets/%25E9%25BB%2583%25E5%25BB%25BA%25E6%25A8%25BA04.jpg": "bf8897d598cc930473663eda6bdc93b4",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B33.jpg": "bebc120aef4afdaacfffdd5b3c82373c",
"assets/assets/next_arrow.png": "33c1a239b6672943411eb9594d66b9af",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_4.png": "461ec60ff7c31752244bf029d3b0fd48",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B37.jpg": "0bc8daca543d0aaf81cb0eb8c678b425",
"assets/assets/%25E9%25BB%2583%25E5%25BB%25BA%25E6%25A8%25BA01.jpg": "c9d81c77308a6ad446b127000a73cc1a",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B36.jpg": "1e1621e3010441d49a0d3943ca5385ae",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_5.png": "f1cf53178580efe3ed400e0e03b708fd",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_7.png": "8dc260ad7016b9d9839c7a2b8ed3c010",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B34.jpg": "8aa16a1541402d1b07abc704812d836a",
"assets/assets/%25E9%25BB%2583%25E5%25BB%25BA%25E6%25A8%25BA03.jpg": "71a73a1f5adc8db8af4e501fac731459",
"assets/assets/%25E9%25BB%2583%25E5%25BB%25BA%25E6%25A8%25BA02.jpg": "4294e1c3acfb1713cceafb63bebfa19b",
"assets/assets/%25E5%25B0%2591%25E5%25A5%25B35.jpg": "7d1d180bd63a04c0aadb2f3a2e76c1b6",
"assets/assets/%25E5%25B9%25B3%25E5%2592%258C%25E4%25B9%258B%25E5%2585%2589_6.png": "c66e5edab56491c9ab39ef76b370eafa",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
