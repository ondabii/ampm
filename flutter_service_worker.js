'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ampm/.git/COMMIT_EDITMSG": "0a8bb56fc873c195bf7117af925c7f08",
"ampm/.git/config": "5632809740acdb11bdb454308be61cdc",
"ampm/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ampm/.git/FETCH_HEAD": "56ef40f1b4cf89fbf0ce234e011d0ed6",
"ampm/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ampm/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ampm/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ampm/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"ampm/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ampm/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ampm/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"ampm/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ampm/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ampm/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ampm/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ampm/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ampm/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ampm/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"ampm/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ampm/.git/index": "82a5e3b0e06e3dd18b05462d22a964cf",
"ampm/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ampm/.git/logs/HEAD": "761fef2d0c20e0974d2fa73c9e1730d8",
"ampm/.git/logs/refs/heads/main": "761fef2d0c20e0974d2fa73c9e1730d8",
"ampm/.git/logs/refs/remotes/origin/HEAD": "b215920fb719582ecc23919134811130",
"ampm/.git/logs/refs/remotes/origin/main": "d0d36c59cf5c1fa2fb8490112294c367",
"ampm/.git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
"ampm/.git/objects/05/aecadf145a1c0cfa1afcbdf71340d0c22bb153": "9f2fcfc2038ac32a81806415c1a61823",
"ampm/.git/objects/07/3d09a58565afd0393823a46c827ac65be4ff38": "cae64265984757be8879a155e1837ab1",
"ampm/.git/objects/0f/c8d2e7dc0ca784e9395c850e01048df7a242f3": "13557a003ec8f976a06e53ec31f8578a",
"ampm/.git/objects/14/a80db3f55b33a1323b112b2b01a89c9bd2ab7b": "69fb8311cae789169317411569ad751d",
"ampm/.git/objects/16/da8ec0224ade31d9013bca6616bdd6fac93a94": "be9448593132fac1b4e09fd2adb5d842",
"ampm/.git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
"ampm/.git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
"ampm/.git/objects/2d/ea0fc3360e8fa0c267b6cd5e8c5a85eda877d6": "53220a365ba3f491916e790a6c9baef0",
"ampm/.git/objects/34/75a71682d22a7b6335cb72d0ba80113c85d1ef": "40c2ac3c94b6f9debdb2f8f8df125a78",
"ampm/.git/objects/39/f1d9bb28f397b0acc1366fec25824d41d9cab4": "a0650d895f27e1f3e5a3fad431535078",
"ampm/.git/objects/3b/2e67f9a29359e495576bc7272b1040801c9027": "8f8eac2c7572dc6caa4c29bd03e8ea5e",
"ampm/.git/objects/3b/5073c94b9579fa56313fd32a8f8a4d8d5474a0": "c9d3d3ac61f1970abe6be61ecc4c55b8",
"ampm/.git/objects/40/ea0d3294057a3c8ae0319ce4164c7dda6c3ccf": "47647c2c8bc8280641197bc4988785df",
"ampm/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"ampm/.git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
"ampm/.git/objects/4d/c9763cbd8620f87b7e5360bc94f311ac1f9085": "f81cd3172a557d93abb6e5d39aaf1130",
"ampm/.git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
"ampm/.git/objects/52/19fe2f021a5195dfc9147f1ab66a948efefaa0": "1eb90939e9c5bad8e774a35c171897d3",
"ampm/.git/objects/56/be6d9f28f0dde48d64b491db39028f76d8b2b9": "db184f4b5ebe87005435f266b9572c58",
"ampm/.git/objects/5b/cd1850ec821fad42efc0262c6bc5dfefc09954": "1dcff51d3ca840a0f946b8f1dff5c668",
"ampm/.git/objects/60/378fe52d51fa61a65f238cef5bb775d83a6997": "6cdbacb1a6e56108db480154cf68b98e",
"ampm/.git/objects/69/9059018bce22a2bd7ac50ec25feeafc0f85b24": "168277ab036894fbd7c538dd9d960242",
"ampm/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"ampm/.git/objects/6d/218831e9ce2535cb2873760dc3e855095c9102": "0cb1fe858f94aea2ff3d999388c863f6",
"ampm/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"ampm/.git/objects/77/b7fa5ea6bb5c574da91b9e898b9b793be28917": "5c0ddb520bf446658c8e634cae2d43e4",
"ampm/.git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
"ampm/.git/objects/81/e53997225837bf1939b99035872e92b0e8ca7b": "526a4085d4cd60321dea527854bf513c",
"ampm/.git/objects/8b/8c237f14713298217baf863b2829d25fa54554": "43475c3dbe576a88f4687e3a3cf24387",
"ampm/.git/objects/8e/c0147de4c802ec7277dbcf8bcd661368898831": "d41daa204002afdc5b1849e3ecd8c444",
"ampm/.git/objects/94/50b2be9b7dacd7f7ac66d2a149e9f12dde969f": "b43b66b3e4227d09fe1a4553604b552b",
"ampm/.git/objects/94/77078c5e2ed2618e737219edba27a34d262224": "dd7a285ff95688129f1dbd5f041ec486",
"ampm/.git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
"ampm/.git/objects/98/368709e8b0375832772d0873444a1ad5f8fe7e": "70a0f82f007002af4452a1526080456e",
"ampm/.git/objects/99/4d8bbf9ec98c0aa77745e3bf9637a9d8f4f652": "4ba33d1a113da220a93546cc7992cb9e",
"ampm/.git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
"ampm/.git/objects/9e/3292badd6bf60259e62bd7e6cdd047f44a76c0": "e5c6f063d775eefe6a717dd4212d9d09",
"ampm/.git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
"ampm/.git/objects/a0/bd05e85108fb51186c1d697e570d4c5928c86e": "9a4609daac4494e2191bee84ba5a70ca",
"ampm/.git/objects/a3/7a2a149056e8916966f00d082a3e0939ad8e30": "52d73045f269f8fdc0808fb68426fad0",
"ampm/.git/objects/a8/62e4ca04a2da13effca6819fa30d8bb4d27668": "74d5d2e333b4b3dfb68ca4d6e89ca322",
"ampm/.git/objects/ab/0a6fb48d27cab4d1d35becef409d702889ab7c": "b2c9eb4abd501332204abd1995fbcba1",
"ampm/.git/objects/ae/1e40bd83aa94d95c1f2bc5dbeb7dff2f14cc11": "7ebd0d2c0a24ed46458405ce2d414c97",
"ampm/.git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
"ampm/.git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
"ampm/.git/objects/c6/1aa5a0974ae78e8af19e14917c6125864cb74c": "85a55957cb0ba98522663e9ddf781d14",
"ampm/.git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
"ampm/.git/objects/ce/82a4c614e6fedf5ac2ba49510d16ee94b9cc42": "eca707e4f7e500df01c71e6f480c7c6b",
"ampm/.git/objects/d1/3559fe4158dbcaad60e9da98afd3d2e4f32cac": "c75bc95bfd6551789cfcf38499db3ccc",
"ampm/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"ampm/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"ampm/.git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
"ampm/.git/objects/d9/b78ab3804015fcaf504b2be79c54ad94bd2741": "b5d1e66343cdbf5a2233ee8bdc059c2a",
"ampm/.git/objects/db/c267f9027a853d1438c8d8458791a8d129dc03": "f0eef6507b4bca758f6fe5c027848153",
"ampm/.git/objects/dc/8c0d64186bdcbe9b275900f9d173fb72cda3fc": "be9a7023eddc692959128091a6abd0bd",
"ampm/.git/objects/df/d2a5855ee5c1dd7d6efc40a2931ad5481bd754": "9ac1da451828904b26424c823a009b51",
"ampm/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"ampm/.git/objects/e3/24f9aa4cd1af8afe1e9084df9a370295c4fb42": "5fb2dfd58af6b1f3fd4295f61689e8fe",
"ampm/.git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
"ampm/.git/objects/e4/96de8f5c0ad790c9840b2895f2522439b83acf": "c0ee6263747138dc067dad4fe3371360",
"ampm/.git/objects/e5/f5d02f9b12031b639a4d1686a1a2cfde7d1d88": "f6e76164f89daa5c80f8877a09ad2038",
"ampm/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"ampm/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"ampm/.git/objects/ec/67fe3ffc5f49b848b3e67b5ae0e86ba092d0ae": "d1110c33a4f91262a88bd22a2a93d89e",
"ampm/.git/objects/ed/92d616396f2cfe9968c519b8711c1faf7de882": "672c4e4bf03ab4013c47191f728b8654",
"ampm/.git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
"ampm/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"ampm/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"ampm/.git/objects/f8/8904d95962e8a850cbd47fa8ba369b07fd533b": "980d99bb98dafae7f492a698b1450b94",
"ampm/.git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
"ampm/.git/objects/ff/2916c8d10429ebd9d743fbdfbb11df5c07c2d0": "2e71fba9b49260d5e42bb075bd867300",
"ampm/.git/refs/heads/main": "4d29d7624cdbb06a4e0a02216c9dc8d1",
"ampm/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ampm/.git/refs/remotes/origin/main": "4d29d7624cdbb06a4e0a02216c9dc8d1",
"ampm/.git/refs/tags/Master": "b2a9868fdbe19ab1d523150ad4b51399",
"ampm/assets/AssetManifest.bin": "de832a03589c2f4a110e2bb9ac9eea8a",
"ampm/assets/AssetManifest.bin.json": "47f19072b82caa3155eed5da110bf7e8",
"ampm/assets/AssetManifest.json": "3658d46e0643b1a89cb741063546ffee",
"ampm/assets/assets/ampm_logo.svg": "3528b09d069eee81a3ab9ee5c6adc24b",
"ampm/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"ampm/assets/fonts/MaterialIcons-Regular.otf": "938bde9770ac46bb910ea80e8ec84a34",
"ampm/assets/NOTICES": "d3afac4c7ffaf220b1f702acb5b5f1ff",
"ampm/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"ampm/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"ampm/canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"ampm/canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"ampm/canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"ampm/canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"ampm/canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"ampm/canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"ampm/canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"ampm/canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"ampm/canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"ampm/canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"ampm/canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"ampm/canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"ampm/favicon.png": "15a25b5a77186a0556a83b6288d07a28",
"ampm/flutter.js": "888483df48293866f9f41d3d9274a779",
"ampm/flutter_bootstrap.js": "54c7b588dcb890a0815644c9525e4d39",
"ampm/icons/Icon-192.png": "4ce45dd236708b4dae9f2f2d02d58166",
"ampm/icons/Icon-512.png": "71531509d43b8c96dd1c984c949bd3df",
"ampm/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"ampm/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ampm/index.html": "68c95759aafc841bf06742f17a6bf8fd",
"ampm/main.dart.js": "236e2f059e454a26b1de773fc5faa4ac",
"ampm/manifest.json": "754abf627e9d0546ce4b037437c7c44b",
"ampm/version.json": "8bc52c9418491c417e66adb4399d97ff",
"assets/AssetManifest.bin": "de832a03589c2f4a110e2bb9ac9eea8a",
"assets/AssetManifest.bin.json": "47f19072b82caa3155eed5da110bf7e8",
"assets/AssetManifest.json": "3658d46e0643b1a89cb741063546ffee",
"assets/assets/ampm_logo.svg": "3528b09d069eee81a3ab9ee5c6adc24b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "78b547fb2f8df629c21a4738b5d9243f",
"assets/NOTICES": "d3afac4c7ffaf220b1f702acb5b5f1ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "15a25b5a77186a0556a83b6288d07a28",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "1076585f978ed3c99e8b4e59798951c8",
"icons/Icon-192.png": "4ce45dd236708b4dae9f2f2d02d58166",
"icons/Icon-512.png": "71531509d43b8c96dd1c984c949bd3df",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75f341b4b8a377552025cebe53c114df",
"/": "75f341b4b8a377552025cebe53c114df",
"main.dart.js": "7a961e272452051ff876bf4f01d9513c",
"manifest.json": "754abf627e9d0546ce4b037437c7c44b",
"version.json": "8bc52c9418491c417e66adb4399d97ff"};
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
