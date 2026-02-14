const images = [
  "card1.png",
  "card2.png",
  "card3.png",
  "card4.png",
  "card5.png",
  "card6.png",
  "card7.png"
];

let currentIndex = 0;

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    const envelopeScreen = document.getElementById("envelope-screen");
    const cardScreen = document.getElementById("card-screen");

    envelopeScreen.classList.remove("active");

    setTimeout(() => {
      cardScreen.classList.add("active");
    }, 400);
  }, 900);
}

function nextCard() {
  const img = document.getElementById("card-image");

  img.classList.add("fade-out");

  setTimeout(() => {
    currentIndex++;

    if (currentIndex < images.length) {
      img.src = images[currentIndex];
      img.classList.remove("fade-out");
      img.classList.add("fade-in");
    } else {
      // Go to gift page
      document.getElementById("card-screen").classList.remove("active");
      document.getElementById("gift-screen").classList.add("active");
    }
  }, 400);
}
