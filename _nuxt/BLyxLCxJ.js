const __vite__fileDeps=["./DH2I0US4.js","./DJYUst0H.js","./BB8MzqFE.js","./CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s}from"./BB8MzqFE.js";class o{constructor(){this.opacity=.5}load(i){i&&i.opacity!==void 0&&(this.opacity=i.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links),i.radius!==void 0&&(this.radius=i.radius))}}async function a(n,i=!0){await n.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./DH2I0US4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(t)},i)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};