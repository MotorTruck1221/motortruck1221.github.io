const __vite__fileDeps=["./BShXgm1e.js","./BB8MzqFE.js","./CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a2 as r,s}from"./BB8MzqFE.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function o(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await s(()=>import("./BShXgm1e.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new u(e)},t)}export{a as Push,o as loadExternalPushInteraction};
