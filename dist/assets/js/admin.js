(()=>{var e=document.getElementById("main-nav-bar"),t=document.getElementById("modal-bg");console.log("prueba-main6"),openMainNabBtn.addEventListener("click",(function(){e.classList.add("main-nav-bar--active"),t.classList.add("modal-bg--active")})),closeMainNabBtn.addEventListener("click",(function(){e.classList.remove("main-nav-bar--active"),t.classList.remove("modal-bg--active")})),window.scroll({top:2500,left:0,behavior:"smooth"});var a,n=document.getElementsByClassName("accordion");for(a=0;a<n.length;a++)n[a].querySelector(".accordion__plus").addEventListener("click",(function(){for(this.classList.toggle("plus-active"),j=0;j<n.length;j++)n[j]!=this.parentNode&&n[j].querySelector(".accordion__plus").classList.remove("plus-active");var e=this.parentNode.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))})();