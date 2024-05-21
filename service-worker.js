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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "fb66d74be49a12c360db5104ae30c666"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d29bd895.css",
    "revision": "b84ed99f458228690b68a8ea029579d4"
  },
  {
    "url": "assets/img/grant_delete.814d9e33.png",
    "revision": "814d9e33df2e01b3349653b78925e6af"
  },
  {
    "url": "assets/img/grant_get_all.2c54f268.png",
    "revision": "2c54f26837e054d9cd7c285bf78e93d1"
  },
  {
    "url": "assets/img/grant_get_id.059e2bd6.png",
    "revision": "059e2bd6dd27f11ae63cee324eb1b7f6"
  },
  {
    "url": "assets/img/grant_get_permissionid.ad335441.png",
    "revision": "ad335441a7df57d8a9cd0cdc6793254e"
  },
  {
    "url": "assets/img/grant_get_roleid.cf08ada8.png",
    "revision": "cf08ada86313188cfa3a525bf3d6a6a1"
  },
  {
    "url": "assets/img/grant_post.0d51c009.png",
    "revision": "0d51c009601e3dcae240953dbbe05e6b"
  },
  {
    "url": "assets/img/grant_put.55bafc70.png",
    "revision": "55bafc7067bd270e6774e5bd18f2696a"
  },
  {
    "url": "assets/img/permission_delete.27fc5abf.png",
    "revision": "27fc5abf00d46b757d6381e90c25de13"
  },
  {
    "url": "assets/img/permission_get_all.6e88eac8.png",
    "revision": "6e88eac871377c904e7118110e6d6aaf"
  },
  {
    "url": "assets/img/permission_get_id.102c4dc2.png",
    "revision": "102c4dc292fe2dc9c9f0f022b392560c"
  },
  {
    "url": "assets/img/permission_post.a2a6088b.png",
    "revision": "a2a6088b1ceffcdfdad30643796eb5e0"
  },
  {
    "url": "assets/img/permission_put.4ab8d0f3.png",
    "revision": "4ab8d0f3a388c7db347089b25279a938"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/role_delete.b5028cd1.png",
    "revision": "b5028cd1f2eed2da85bdbaf5acb61566"
  },
  {
    "url": "assets/img/role_get_all.10fbc864.png",
    "revision": "10fbc86468bf7b42114c508d7c682102"
  },
  {
    "url": "assets/img/role_get_id.bfc5226d.png",
    "revision": "bfc5226d1324d564d164137bf439e6e0"
  },
  {
    "url": "assets/img/role_post.b8842f40.png",
    "revision": "b8842f401ae0ce846a65e7fe9c9c831a"
  },
  {
    "url": "assets/img/role_put.f57706a5.png",
    "revision": "f57706a526b5a800a3070ef74b4934c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e1273895.js",
    "revision": "9d9d293cdd1d8bbbc4485a4173518689"
  },
  {
    "url": "assets/js/11.be4bd6c2.js",
    "revision": "9eb56cb4328fdf7b3b5720e1fe3f60c6"
  },
  {
    "url": "assets/js/12.70c24ba1.js",
    "revision": "b1c6f64a43140d2e63312895ebe0a483"
  },
  {
    "url": "assets/js/13.29c020d6.js",
    "revision": "8baa919f5e9e285b5b167c76036fcf78"
  },
  {
    "url": "assets/js/14.964b466c.js",
    "revision": "70e2a57777d21dde9d07160140d4e156"
  },
  {
    "url": "assets/js/15.da78077e.js",
    "revision": "79690cb2d6b3c27f55f75cfbe8486ec4"
  },
  {
    "url": "assets/js/16.129affc0.js",
    "revision": "736b18fb7cfad7aae039e7cf814221e7"
  },
  {
    "url": "assets/js/17.42fe369d.js",
    "revision": "16ff2e8cb89746606d5f82ae44e14ee2"
  },
  {
    "url": "assets/js/18.3aa3a7f7.js",
    "revision": "a36a82fc9b51976aea2d088ce0d57c6d"
  },
  {
    "url": "assets/js/19.91d31cc6.js",
    "revision": "246e0101a4957483f09505bec4edebfc"
  },
  {
    "url": "assets/js/2.688e2e99.js",
    "revision": "4a788ed2ec3bb40852a4cdeed12e52f6"
  },
  {
    "url": "assets/js/20.ea7eee7d.js",
    "revision": "a61c209906dbebc4dd8406fe7a707aa0"
  },
  {
    "url": "assets/js/21.e3419530.js",
    "revision": "73688518cdff049d9594357cae45168c"
  },
  {
    "url": "assets/js/22.92faf6e7.js",
    "revision": "57561350e0076e927973a2fcbad9af0a"
  },
  {
    "url": "assets/js/23.b1808c0f.js",
    "revision": "b6451480a5159146955ebc97b8b43d69"
  },
  {
    "url": "assets/js/24.d3d75d73.js",
    "revision": "6183eae5529cffd26b293eb5cec96172"
  },
  {
    "url": "assets/js/26.b038f0f8.js",
    "revision": "3cd3fa2cd5856af626304a2e0bc91950"
  },
  {
    "url": "assets/js/3.6190ced7.js",
    "revision": "c61d7747a03c041431eda2d4eecb243c"
  },
  {
    "url": "assets/js/4.a6bb0f88.js",
    "revision": "8dbb81d335ab579ccc62b2f9d4e48276"
  },
  {
    "url": "assets/js/5.e5c73bc2.js",
    "revision": "6e9dc463d419debcb226ca15a1956da4"
  },
  {
    "url": "assets/js/6.8ace545c.js",
    "revision": "efdbe9e2d6fe7736e3e4afbaa21f6617"
  },
  {
    "url": "assets/js/7.abfc78df.js",
    "revision": "cef4ee5190674996a63a6af94913cde0"
  },
  {
    "url": "assets/js/8.5ec70271.js",
    "revision": "8dd03f848535124ab797932c03bafea2"
  },
  {
    "url": "assets/js/9.78ec9992.js",
    "revision": "d6fb10b59c593ff1ce1cf846714da527"
  },
  {
    "url": "assets/js/app.fbe7e19b.js",
    "revision": "0420540162badeaf4d61ef361ee71649"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5477204fc2ac8d0fe8505eb1bcdfdd15"
  },
  {
    "url": "design/index.html",
    "revision": "40298265d4419d72d975d2ca495790bc"
  },
  {
    "url": "index.html",
    "revision": "1e678c6350f07646e30086508bc14448"
  },
  {
    "url": "intro/index.html",
    "revision": "b6ff8fd66e16b27fecbfcd9d62f1d27c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "aaec4d7dc2d5a693182c1563b186039b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6ac757670fd2531ed617a02b2b7f34c8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1fc56c43c7008f532a2acaf0cfc0c499"
  },
  {
    "url": "software/index.html",
    "revision": "403d9f9bfc318144a48eaa291a9eec2a"
  },
  {
    "url": "test/index.html",
    "revision": "866351fa157d0d3f70b8dfa21ad36d64"
  },
  {
    "url": "use cases/index.html",
    "revision": "9f035034ac57616c4c38993e887a7e8e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
