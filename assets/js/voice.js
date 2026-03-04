const cards = document.querySelectorAll(".voice-card");
const modal = document.getElementById("modal");
const frame = document.getElementById("video-frame");
const closeBtn = document.getElementById("close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video");
    frame.src = videoUrl;
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  frame.src = "";
});

modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
    frame.src = "";
  }
});