import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.stopBtn.setAttribute("disabled","disabled");t.startBtn.addEventListener("click",r);t.stopBtn.addEventListener("click",o);let e;function r(){t.startBtn.setAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled"),e=setInterval(()=>{t.body.style.backgroundColor=n()},1e3)}function o(){t.startBtn.getAttribute("disabled")&&(t.stopBtn.setAttribute("disabled","disabled"),t.startBtn.removeAttribute("disabled")),clearInterval(e)}function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map