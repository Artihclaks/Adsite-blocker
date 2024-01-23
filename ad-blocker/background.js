chrome.webRequest.onBeforeRequest.addListener(
   function(details){return{cancel: true}},
    {urls: ["*://*.exponential.com/*","*://*.lb.usemaxserver.de/*",
    "*://*.tracking.klickthru.com/*",
    "*://*.zmedia.com/*",
    "*://*.zv1.november-lax.com/*",
    "*://*.google.com/adsid*",
    "*://*.franecki.net/*",
    "*://*.exponential.com/*"]},
    ["blocking"]
    
) 