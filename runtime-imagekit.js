importScripts("https://imagekit.io/dist/js/ik-sw.js?version=3");
let ikServiceWorker = new ImagekitServiceWorker();
ikServiceWorker.initiateNetworkOptimization({
    'ik-version': 1965320190,
    'excludedPatterns' : ["https://ik.imagekit.io/6g0jO0gy-Lqsc/*as*.jpg","https://ik.imagekit.io/6g0jO0gy-Lqsc/*yosd*.jpg"],
    'whitelistedHosts' : ["ik.imagekit.io"]
});
