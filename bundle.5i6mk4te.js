(()=>{var e={737:()=>{let e,t;const n=new Set,o=document.createElement("link"),i=o.relList&&o.relList.supports&&o.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,a="instantAllowQueryString"in document.body.dataset,s="instantAllowExternalLinks"in document.body.dataset,r="instantWhitelist"in document.body.dataset,c="instantMousedownShortcut"in document.body.dataset;let d=65,u=!1,l=!1,h=!1;if("instantIntensity"in document.body.dataset){const e=document.body.dataset.instantIntensity;if("mousedown"==e.substr(0,"mousedown".length))u=!0,"mousedown-only"==e&&(l=!0);else if("viewport"==e.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==e?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(h=!0):"viewport-all"==e&&(h=!0));else{const t=parseInt(e);isNaN(t)||(d=t)}}if(i){const n={capture:!0,passive:!0};if(l||document.addEventListener("touchstart",(function(e){t=performance.now();const n=e.target.closest("a");f(n)&&p(n.href)}),n),u?c||document.addEventListener("mousedown",(function(e){const t=e.target.closest("a");f(t)&&p(t.href)}),n):document.addEventListener("mouseover",(function(n){if(performance.now()-t<1111)return;if(!("closest"in n.target))return;const o=n.target.closest("a");f(o)&&(o.addEventListener("mouseout",m,{passive:!0}),e=setTimeout((()=>{p(o.href),e=undefined}),d))}),n),c&&document.addEventListener("mousedown",(function(e){if(performance.now()-t<1111)return;const n=e.target.closest("a");if(e.which>1||e.metaKey||e.ctrlKey)return;if(!n)return;n.addEventListener("click",(function(e){1337!=e.detail&&e.preventDefault()}),{capture:!0,passive:!1,once:!0});const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});n.dispatchEvent(o)}),n),h){let e;e=window.requestIdleCallback?e=>{requestIdleCallback(e,{timeout:1500})}:e=>{e()},e((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target;e.unobserve(n),p(n.href)}}))}));document.querySelectorAll("a").forEach((t=>{f(t)&&e.observe(t)}))}))}}function m(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||e&&(clearTimeout(e),e=undefined)}function f(e){if(e&&e.href&&(!r||"instant"in e.dataset)&&(s||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(a||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}function p(e){if(n.has(e))return;const t=document.createElement("link");t.rel="prefetch",t.href=e,document.head.appendChild(t),n.add(e)}},508:()=>{"use strict";if(window.EXECUTED)throw new Error("Script already executed. Stopping further processing of this script.");window.EXECUTED=!0;const e=document.head.parentElement;e&&(e.className="js")}},t={};function n(o){var i=t[o];if(i!==undefined)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";function e(e){const t=document.readyState;if("complete"!==t&&"interactive"!==t||setTimeout(e,0),document.addEventListener)document.addEventListener("DOMContentLoaded",e);else{function n(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",n),e())}document.attachEvent("onreadystatechange",n)}}n(508),e((()=>{window.location.hostname.includes("netlify")&&window.location.assign(`https://matejkosiarcik.com${window.location.pathname}`)})),e((()=>{const e=document.querySelector('header input[type="checkbox"]');if(!e)return;e.checked=!1;const t=document.querySelector("header nav");var n,o;t&&(o=()=>{const n=200;if(e.checked){t.style.height="auto";const o=t.offsetHeight;t.style.height="0";let i=null;function a(e){i||(i=e);const s=e-i;s<n?(t.style.height=o*s/n+"px",window.requestAnimationFrame(a)):t.style.height=`${o}px`}window.requestAnimationFrame?window.requestAnimationFrame(a):t.style.height=`${o}px`}else{const s=parseFloat(t.style.height);let r=null;function c(e){r||(r=e);const o=e-r;o<n?(t.style.height=s*(1-o/n)+"px",window.requestAnimationFrame(c)):t.style.height="0"}window.requestAnimationFrame?window.requestAnimationFrame(c):t.style.height="0"}},(n=e).addEventListener?n.addEventListener("change",o):n.attachEvent("onchange",o))})),n(737)})()})();