var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".form"),l=document.querySelector('[ name="delay"]'),d=document.querySelector('[ name="step"]'),a=document.querySelector('[ name="amount"]'),u={width:"380px",position:"right-top",distance:"10px",opacity:1,fontSize:"20px",borderRadius:"12px"};function s(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();let o=+l.value,t=+d.value,n=+a.value;for(let e=0;e<n;e++){s(e+1,o+t*e).then((({position:e,delay:o})=>i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`,u))).catch((({position:e,delay:o})=>i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`,u)))}}));
//# sourceMappingURL=03-promises.73b47375.js.map
