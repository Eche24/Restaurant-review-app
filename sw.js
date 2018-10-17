
let cache_name = 'v1';
let urlsToCache = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/style.css',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
];

// Install the service worker
self.addEventListener('install', function (event) {
	event.waitUntil(
    caches.open(cache_name).then(function (cache) {
	console.log('Opened cache');
	return cache.addAll(urlsToCache);
})
  );
});

// Activate
self.addEventListener('activate', function (event) {
	console.log('Activated');
});


// Cache and return requests
self.addEventListener('fetch', function (event) {
	event.respondWith(
    caches.match(event.request).then(function (response) {
	if (response) {
		return response;
	}
	return fetch(event.request);
})
  );
});

