const slider=document.getElementById("slider");
const title=document.getElementById("name");
window.addEventListener("scroll",()=>{if(scrollY>1900)
{slider.style.width="0"}
if(scrollY<1900)
{slider.style.width="100%"}
if(scrollY>40)
{title.style.visibility=" hidden"}
if(scrollY<40)
{title.style.visibility="visible"}
})