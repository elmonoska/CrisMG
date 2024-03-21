const imgMagicCat = document.querySelector("#magicCat");
const btnLove = document.querySelector("#love");
btnLove.addEventListener("click", () => {
  btnLove.textContent = "Magia ✨"
  imgMagicCat.style.display = "block";
})
