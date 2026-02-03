function showResult() {
  showPopup(`
    <h2>診断結果</h2>
    <p>ついに動いた！！！🎉</p>
  `);
}

function showPopup(html) {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = html;
  overlay.style.display = "flex";

setTimeout(() => {
    overlay.classList.add("show");
  }, 50);
}

function closePopup() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("show");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 400);
}
