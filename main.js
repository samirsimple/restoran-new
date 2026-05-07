window.addEventListener("scroll",function(){
  const header=this.document.querySelector("header")
  if(this.window.scrollY>20){
    header.classList.add("scrolled")
  }
  else{
    header.classList.remove("scrolled")
  }
})

const shop=document.getElementById("shopping")
const btn=document.getElementById("btnr")
btn.addEventListener("click",()=>{
  shop.classList.add("active")
})
const btn2=document.getElementById("btnk")
btn2.addEventListener("click",()=>{
  shop.classList.remove("active")
})