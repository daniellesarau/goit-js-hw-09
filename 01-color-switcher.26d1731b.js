const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");document.querySelector("body");let d=null;function n(){let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.addEventListener("click",function(){t.disabled=!0,e.disabled=!1,d=setInterval(n,1e3)}),e.addEventListener("click",function(){t.disabled=!1,e.disabled=!0,clearInterval(d)});
//# sourceMappingURL=01-color-switcher.26d1731b.js.map
