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


const progressEl = document.querySelector(".progress")
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop
  const percentage = (scrollTop / pageHeight) * 100

  progressEl.style.visibility = 'visible'

  progressEl.style.width = percentage+"%"
}

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTopFunc);

function showBtn() {
  let pageHeight = rootEl.scrollHeight - rootEl.clientHeight;
  let result = rootEl.scrollTop / pageHeight;

  if (result > 0.3) {
    scrollBtn.classList.add("showBtn");
  } else {
    scrollBtn.classList.remove("showBtn");
  }
}

function scrollToTopFunc() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}