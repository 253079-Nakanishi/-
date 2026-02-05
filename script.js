function showResult() {
  const counts = { A: 0, B: 0, C: 0 };

  for (let i = 1; i <= 4; i++) {
    const checked = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    if (!checked) {
      alert("まだ答えていない質問があるみたい");
      return;
    }

    counts[checked.value]++;
  }

  let resultType = "A";
  if (counts.B > counts[resultType]) resultType = "B";
　if (counts.C > counts[resultType]) resultType = "C";

  const results = {
    A: {
      title: "Frutiger Aero",
      description: "好奇心旺盛で行動力あり！",
      image: "https://i.redd.it/wthjhx8t5nvc1.png"
    },
    B: {
      title: "Dream Core",
      description: "落ち着き重視タイプ",
      image: "https://www.the-sun.com/wp-content/uploads/sites/6/2023/05/comp-skc-dream-op.jpg"
    },
    C: {
      title: "Cyber Core",
      description: "自由で創造的タイプ",
      image: "https://i.pinimg.com/originals/be/74/e8/be74e88d93805394c4f8d7636fad62e7.jpg"
    }
  };

  const result = results[resultType];
showPopup(`
    <h2>${result.title}</h2>
    <p>${result.description}</p>
    <img src="${result.image}" alt="">
  `);
}

function showPopup(html) {
  alert("あなたにぴったりなのは…");

  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = html;
  overlay.style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}
