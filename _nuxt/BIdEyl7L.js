import{_ as u}from"./qkzJTJS3.js";import{d as a,o as l,c as r,b as t,t as n,a as e,w as d,e as m,_,f}from"./BB8MzqFE.js";const h={class:"flex flex-col justify-center items-center gap-4 w-80 h-96 p-4 bg-cat-crust border-2 border-cat-sapphire hover:border-cat-pink rounded-lg flex-wrap text-cat-text text-center transition-all ease-in-out duration-300 hover:scale-105"},x=["src"],g={class:"text-2xl font-bold"},b={class:"text-xl"},y=a({__name:"ProjectCard",props:{title:String,description:String,image:String,link:String},setup(s){return(c,p)=>{const i=_;return l(),r("div",h,[t("img",{src:s.image,class:"w-full h-36 object-cover rounded-lg"},null,8,x),t("h1",g,n(s.title),1),t("p",b,n(s.description),1),e(i,{to:s.link,target:"_blank",class:"text-xl underline"},{default:d(()=>[m("View on GitHub")]),_:1},8,["to"])])}}}),w={class:"h-full text-cat-text flex flex-row justify-left items-center gap-8 p-4"},j={class:"h-full text-cat-text flex flex-col justify-left w-full items-top"},k=t("h1",{class:"text-4xl font-bold"},"Projects",-1),v=t("p",{class:"text-xl mb-8"},"Here are some of my projects",-1),S={class:"flex flex-row flex-shrink justify-center items-center gap-4 flex-wrap w-full"},P=t("h1",{class:"text-4xl font-bold mt-8"},"Contributions",-1),I=t("p",{class:"text-xl mb-8"},"Projects I've contributed to",-1),N={class:"flex flex-row flex-shrink justify-center items-center gap-4 flex-wrap w-full"},C=a({__name:"projects",setup(s){return f({title:"Projects"}),(c,p)=>{const i=u,o=y;return l(),r("div",w,[e(i),t("div",j,[k,v,t("div",S,[e(o,{title:"Ruby",description:"A fast, easy to use, and customizable proxy, designed to act and look like a browser.",image:"/projectImages/ruby.png",link:"https://github.com/ruby-network/ruby"}),e(o,{title:"Flash Player",description:"An application that allows you to play flash games and animations.",image:"/projectImages/flashplayer.png",link:"https://github.com/allancoding/flashplayer"}),e(o,{title:"Prism OS",description:"A linux distro that aims to have full compatibility with Windows applications.",image:"/projectImages/prism.png",link:"https://github.com/prismnet"})]),P,I,t("div",N,[e(o,{title:"Nebula",description:"A stunning and sleek web proxy with support for hundreds of popular sites.",image:"/projectImages/contribs/nebula.png",link:"https://github.com/nebula-services/nebula"}),e(o,{title:"EmulatorJS Netplay",description:"A netplay implementation for EmulatorJS.",image:"/projectImages/contribs/emu.png",link:"https://github.com/EmulatorJS/emulatorjs-netplay"})])])])}}});export{C as default};
