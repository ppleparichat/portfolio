const navBtn = document.getElementById("nav-click");
const closeBtn = document.getElementById("nav-close");
const navPopup = document.querySelector(".mobile-container");


navBtn.addEventListener("click", () => {
  console.log("open")
   navPopup.classList.add("show")
});

closeBtn.addEventListener("click", ()=>{
  console.log('close')
  navPopup.classList.remove("show")
})


