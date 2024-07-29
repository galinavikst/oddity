const changeLogo = () => {
  const words = {
    google: ["g", "o", "o", "g", "l", "e"],
    oddity: ["o", "d", "d", "i", "t", "y"],
  };
  createLogo(words.google);

  const state = { isGoogle: true };

  document
    .getElementById("toggleLogo")
    .addEventListener("click", () => toggleText(state, words));
};

const createLogo = (wordArray) => {
  const logo = document.getElementById("logo");
  logo.innerHTML = "";
  wordArray.forEach((letter, index) => {
    const span = document.createElement("span");
    span.className = `logo_${index}`;
    span.textContent = letter;
    logo.appendChild(span);
  });
};

const toggleText = (state, words) => {
  const letters = state.isGoogle ? words.oddity : words.google;
  document.querySelectorAll("#logo span").forEach((span, index) => {
    span.textContent = letters[index] || "";
  });
  state.isGoogle = !state.isGoogle;
};

changeLogo();
