!function(){"use strict";window.goatcounter&&window.goatcounter.vars?window.goatcounter=window.goatcounter.vars:window.goatcounter=window.goatcounter||{};var t=document.querySelector("script[data-goatcounter]");if(t&&t.dataset.goatcounterSettings){try{var e=JSON.parse(t.dataset.goatcounterSettings)}catch(l){}for(var n in e)["no_onload","no_events","allow_local","allow_frame","path","title","referrer","event"].indexOf(n)>-1&&(window.goatcounter[n]=e[n])}var o=encodeURIComponent,r=function(t){return null===t||t===undefined||"function"==typeof t},a=function(){console&&console},i=function(){var t=document.querySelector("script[data-goatcounter]");return t&&t.dataset.goatcounter?t.dataset.goatcounter:goatcounter.endpoint||window.counter},c=function(){var t=location,e=document.querySelector('link[rel="canonical"][href]');if(e){var n=document.createElement("a");n.href=e.href,n.hostname.replace(/^www\./,"")===location.hostname.replace(/^www\./,"")&&(t=n)}return t.pathname+t.search||"/"},u=function(t){null===document.body?document.addEventListener("DOMContentLoaded",(function(){t()}),!1):t()};goatcounter.filter=function(){return"visibilityState"in document&&"prerender"===document.visibilityState?"visibilityState":goatcounter.allow_frame||location===parent.location?!goatcounter.allow_local&&location.hostname.match(/(localhost$|^127\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^192\.168\.|^0\.0\.0\.0$)/)?"localhost":goatcounter.allow_local||"file:"!==location.protocol?!(!localStorage||"t"!==localStorage.getItem("skipgc"))&&"disabled with #toggle-goatcounter":"localfile":"frame"},window.goatcounter.url=function(t){var e=function(t){var e,n,o,a,i,u={p:t.path===undefined?goatcounter.path:t.path,r:t.referrer===undefined?goatcounter.referrer:t.referrer,t:t.title===undefined?goatcounter.title:t.title,e:!(!t.event&&!goatcounter.event),s:[window.screen.width,window.screen.height,window.devicePixelRatio||1],b:(a=window,i=document,a.callPhantom||a._phantom||a.phantom?150:a.__nightmare?151:i.__selenium_unwrapped||i.__webdriver_evaluate||i.__driver_evaluate?152:navigator.webdriver?153:0),q:location.search};return"function"==typeof u.r&&(e=u.r),"function"==typeof u.t&&(o=u.t),"function"==typeof u.p&&(n=u.p),r(u.r)&&(u.r=document.referrer),r(u.t)&&(u.t=document.title),r(u.p)&&(u.p=c()),e&&(u.r=e(u.r)),o&&(u.t=o(u.t)),n&&(u.p=n(u.p)),u}(t||{});if(null!==e.p){e.rnd=Math.random().toString(36).substr(2,5);var n=i();return n?n+function(t){var e=[];for(var n in t)""!==t[n]&&null!==t[n]&&t[n]!==undefined&&!1!==t[n]&&e.push(o(n)+"="+o(t[n]));return"?"+e.join("&")}(e):a()}},window.goatcounter.count=function(t){if(goatcounter.filter())return a();var e=goatcounter.url(t);if(!e)return a();var n=document.createElement("img");n.src=e,n.style.position="absolute",n.style.bottom="0px",n.style.width="1px",n.style.height="1px",n.loading="eager",n.setAttribute("alt",""),n.setAttribute("aria-hidden","true"),n.addEventListener("load",(function(){n&&n.parentNode&&n.parentNode.removeChild(n)}),!1),document.body.appendChild(n)},window.goatcounter.get_query=function(t){for(var e=location.search.substr(1).split("&"),n=0;n<e.length;n++)if(0===e[n].toLowerCase().indexOf(t.toLowerCase()+"="))return e[n].substr(t.length+1)},window.goatcounter.bind_events=function(){document.querySelectorAll&&Array.prototype.slice.call(document.querySelectorAll("*[data-goatcounter-click]")).forEach((function(t){if(!t.dataset.goatcounterBound){var e=function(t){return function(){goatcounter.count({event:!0,path:t.dataset.goatcounterClick||t.name||t.id||"",title:t.dataset.goatcounterTitle||t.title||(t.innerHTML||"").substr(0,200)||"",referrer:t.dataset.goatcounterReferrer||t.dataset.goatcounterReferral||""})}}(t);t.addEventListener("click",e,!1),t.addEventListener("auxclick",e,!1),t.dataset.goatcounterBound="true"}}))},window.goatcounter.visit_count=function(t){u((function(){(t=t||{}).type=t.type||"html",t.append=t.append||"body",t.path=t.path||c(),t.attr=t.attr||{width:"200",height:t.no_branding?"60":"80"},t.attr.src=i()+"er/"+o(t.path)+"."+o(t.type)+"?",t.no_branding&&(t.attr.src+="&no_branding=1"),t.style&&(t.attr.src+="&style="+o(t.style)),t.start&&(t.attr.src+="&start="+o(t.start)),t.end&&(t.attr.src+="&end="+o(t.end));var e={png:"img",svg:"img",html:"iframe"}[t.type];if(!e)return a(t.type);"html"===t.type&&(t.attr.frameborder="0",t.attr.scrolling="no");var n=document.createElement(e);for(var r in t.attr)n.setAttribute(r,t.attr[r]);var u=document.querySelector(t.append);if(!u)return a(t.append);u.appendChild(n)}))},"#toggle-goatcounter"===location.hash&&("t"===localStorage.getItem("skipgc")?(localStorage.removeItem("skipgc","t"),alert("GoatCounter tracking is now ENABLED in this browser.")):(localStorage.setItem("skipgc","t"),alert("GoatCounter tracking is now DISABLED in this browser until "+location+" is loaded again."))),goatcounter.no_onload||u((function(){if("visibilityState"in document&&"visible"!==document.visibilityState){var t=function(){"visible"===document.visibilityState&&(document.removeEventListener("visibilitychange",t),goatcounter.count())};document.addEventListener("visibilitychange",t)}else goatcounter.count();goatcounter.no_events||goatcounter.bind_events()}))}();