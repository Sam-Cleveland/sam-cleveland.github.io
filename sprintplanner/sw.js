const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/sprintplanner/",
      "/sprintplanner/index.html",
      "/sprintplanner/style.css",
      "/sprintplanner/renderer.js",
      "/sprintplanner/vex-theme-plain.css",
      "/sprintplanner/vex.combined.min.js",
      "/sprintplanner/vex.css",
      "/sprintplanner/icon.png",
    ])
  );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
})
