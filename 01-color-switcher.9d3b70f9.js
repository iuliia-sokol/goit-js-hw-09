const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body"),n=document.querySelector("p");let d=null;l.style.display="flex",l.style.justifyContent="center",l.style.alignItems="center",l.style.paddingTop="40px",n.style.position="absolute",n.style.top="10px",n.style.left="20px",e.style.padding="10px",e.style.fontSize="40px",e.style.borderRadius="12px",e.style.marginRight="20px",t.style.padding="10px",t.style.fontSize="40px",t.style.borderRadius="12px",e.addEventListener("click",(function(e){d=setInterval((function(){l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.target.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(function(t){clearInterval(d),t.target.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.9d3b70f9.js.map
