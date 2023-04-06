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
    "url": "404.html",
    "revision": "20b71259109ed387fc74e03c7b76f55f"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.033db9c6.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ef5fe093.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.980eb426.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.b25d8f97.js",
    "revision": "15ffa534f0e33db227cd4ba62fa00f4e"
  },
  {
    "url": "assets/js/17.0c9e4e6b.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.ce4df536.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.edeefd6d.js",
    "revision": "2ef53f8f10c9e10632ef2b6351da72c3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "background.jpeg",
    "revision": "8c2c3dd47b043d2257bb2a79a5bf7f8a"
  },
  {
    "url": "categories/index.html",
    "revision": "fecf383b29dccf683a960f7a452dd1e0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "98176b5520490e2c9f534a69da5df922"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2960eecd00dc62d8eed9b14fca003b2e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3072343a42f8dd7f752763aa4ae60d3b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d525a017aae92a58d717ad712ca51270"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "42301dfcd50c086d1f8bdadc0693a419"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/yourname.jpeg",
    "revision": "8c2c3dd47b043d2257bb2a79a5bf7f8a"
  },
  {
    "url": "index.html",
    "revision": "40be5b4c37939f142b197aa9bb18c780"
  },
  {
    "url": "js/custom.js",
    "revision": "c7c897793b7e6041b6ed4a0876c4c189"
  },
  {
    "url": "tag/index.html",
    "revision": "25b38c70f3fe7c032a4021417ee7d116"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6352d4b30910c8338c186b43d045b01f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "106d7bac967cab639e0dda8c14ba128a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ae7fb6397904bab85014655af3a24116"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8cd0f1b8245ecb65a1bf3f327d8c15c0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1e0a7bbf0409de6a0d558c3a9648fddf"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8815ae2e8bda4ca6ce8064318e3628ad"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0696c3b990a98dc25bdc51e2f1cb2c6f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "507a54b5677d89f6d79d3e88b8478011"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5540d8fa750956ec8ecaa81d77782e8c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "11d53b5205224f13afe306ecacd88980"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d11d12c590ae829f180cc2a64e6f153"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bfc823c63872af172f912f34218665a9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b0166c99a090a4e90baab004b74bccfa"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f10e10a05ec58cff144efd14c2d7381b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "598ccd0990d35c77874fbf8c0c53fe7e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f153d05197f007efb4c6bf5979e52140"
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
