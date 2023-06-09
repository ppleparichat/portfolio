const navBtn = document.getElementById("nav-click");
const closeBtn = document.getElementById("nav-close");
const navPopup = document.querySelector(".mobile-container");

navBtn.addEventListener("click", () => {
  console.log("open");
  navPopup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  console.log("close");
  navPopup.classList.remove("show");
});

const progressEl = document.querySelector(".progress");
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const percentage = (scrollTop / pageHeight) * 100;

  progressEl.style.visibility = "visible";

  progressEl.style.width = percentage + "%";
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

const form = document.querySelector("#contact-form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formBody = new URLSearchParams(formData).toString();

  const response = await fetch("555", {
    method: "POST",
    headers: {
      "Content-Type": "555",
    },
    body: formBody,
  });

  if (response.ok) {
    alert("Thank you for your message!");
    form.reset();
  } else {
    alert("Something went wrong. Please try again later.");
  }
}
