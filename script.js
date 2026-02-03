function showResult() {
   alert("showResult 呼ばれた！");
  const result = results[resultType];
showPopup(`
  <h2>${result.title}</h2>
  <p>${result.description}</p>
  <img src="${result.image}" alt="">
`);
}

function showPopup(html) {
   alert("showPopup 入った！");
  showPopup("ここまで来てる！");

  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");
if (!overlay || !content) {
    alert("overlay か popupContent が見つからない！");
    return;
  }

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
