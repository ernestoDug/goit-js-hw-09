var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var n=r("iQIUW");const i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault();const o=Number(i.delay.value),t=i.amount.value,r=Number(i.step.value);for(let e=0;e<t;e++)setTimeout((()=>{var t,i;t=e+1,i=o+r*e,Math.random()>.3?Promise.resolve({position:t,delay:i}).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})):Promise.reject({position:t,delay:i}).catch((({position:e,delay:o})=>{n.Notify.warning(`❌ Rejected promise ${e} in ${o}ms`)}))}),o+r*e);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.3928ba88.js.map