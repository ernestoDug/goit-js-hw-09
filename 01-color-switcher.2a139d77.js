const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.style.backgroundColor="green",t.startBtn.style.color="white",t.startBtn.style.padding="10px",t.startBtn.style.borderRadius="5px",t.stopBtn.style.backgroundColor="red",t.stopBtn.style.color="white",t.stopBtn.style.padding="10px",t.stopBtn.style.borderRadius="5px",t.startBtn.addEventListener("click",(function(r){if("BUTTON"!==r.target.nodeName)return;e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.setAttribute("disabled","disabled"),t.startBtn.style.backgroundColor="grey"})),t.stopBtn.addEventListener("click",(function(r){if("BUTTON"!==r.target.nodeName)return;t.startBtn.removeAttribute("disabled","disabled"),clearInterval(e),t.startBtn.style.backgroundColor="green"}));let e=null;
//# sourceMappingURL=01-color-switcher.2a139d77.js.map
