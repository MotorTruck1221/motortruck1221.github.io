import{aw as c,ax as l}from"./BB8MzqFE.js";const d=180,a={x:0,y:0},h=2;function m(s,n,t){const{context:e}=s,r=t.count.numerator*t.count.denominator,o=t.count.numerator/t.count.denominator,g=d*(o-h)/o,u=Math.PI-c(g);if(e){e.beginPath(),e.translate(n.x,n.y),e.moveTo(a.x,a.y);for(let i=0;i<r;i++)e.lineTo(t.length,a.y),e.translate(t.length,a.y),e.rotate(u)}}const f=5;class y{draw(n){const{particle:t,radius:e}=n,r=this.getCenter(t,e),o=this.getSidesData(t,e);m(n,r,o)}getSidesCount(n){const t=n.shapeData;return Math.round(l((t==null?void 0:t.sides)??f))}}export{y as P};
