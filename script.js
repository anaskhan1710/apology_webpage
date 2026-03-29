const openLetterBtn = document.getElementById("openLetterBtn");
const letterCard = document.getElementById("letterCard");
const acceptBtn = document.getElementById("acceptBtn");
const acceptMessage = document.getElementById("acceptMessage");

if (openLetterBtn && letterCard) {
  openLetterBtn.addEventListener("click", () => {
    letterCard.classList.remove("hidden");
    letterCard.classList.add("visible");
    openLetterBtn.textContent = "Letter Opened";
    openLetterBtn.disabled = true;
  });
}

if (acceptBtn && acceptMessage) {
  acceptBtn.addEventListener("click", () => {
    acceptMessage.textContent = "If you still feel even a little softness for me, I will treasure it.";

    for (let index = 0; index < 18; index += 1) {
      const heart = document.createElement("span");
      heart.className = "heart-burst";
      heart.textContent = "❤";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDelay = `${Math.random() * 0.8}s`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4200);
    }
  });
}
