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





const API_KEY = "AIzaSyDG6vUQm7TeG9XHoEZuy-EDWlrIRZnm65Y";
const CHANNEL_ID = "UCaUVKfDRB7s6EbabI5d9AhA";

// Make an API request to fetch the latest videos from your channel
fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
)
  .then((response) => response.json())
  .then((data) => {

    console.log(data)
    // Get the list of video items from the API response
    const videoItems = data.items.filter(
      (item) => item.id.kind === "youtube#video"
    );

    // Create a HTML string for each video item
    const videoHTML = videoItems
      .map(
        (item) => `
      <div class="video-item">
        <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
          <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
          <h3>${item.snippet.title}</h3>
        </a>
      </div>
    `
      )
      .join("");

    // Display the video HTML on your portfolio page
    document.querySelector("#video-list").innerHTML = videoHTML;
  })
  .catch((error) => console.error(error));



 
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', handleSubmit);
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formBody = new URLSearchParams(formData).toString();
  
    const response = await fetch('https://formspree.io/f/xdovbnnq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    });
  
    if (response.ok) {
      alert('Thank you for your message!');
      form.reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
  
