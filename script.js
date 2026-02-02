// 💖 HEARTS
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// 🐝 BEES
document.querySelectorAll(".bee").forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO BUTTON RUN
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 80) + "px";
});

// 💕 YES
document.getElementById("yes").onclick = () => {
  explodeHearts();
  document.getElementById("yesMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("quizIntro").classList.remove("hidden");
  }, 1500);
};

// 💥 HEART EXPLOSION
function explodeHearts() {
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💘";
    h.style.left = "50%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

// QUIZ LOGIC (unchanged logic, flirty wrong answers)
const questions = [
  {
    q: "Who’s hotter? 😏",
    a: [
      ["Me (obviously)", "I’m hot… but you? illegal 🔥😌", false],
      ["You (no debate)", "", true],
      ["Us together 🥵", "Together = fire, but you still win 😘", false],
      ["The tension rn", "The tension is wild but you’re wilder 😏", false]
    ]
  }
];

let qi = 0;
const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");

document.getElementById("quizIntro").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden");
  showQ();
};

function showQ() {
  qEl.innerText = questions[qi].q;
  aEl.innerHTML = "";
  questions[qi].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.onclick = () => {
      if (ans[2]) revealNext();
      else b.innerText = ans[1];
    };
    aEl.appendChild(b);
  });
}

function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id,i)=>{
    setTimeout(()=>document.getElementById(id).classList.remove("hidden"), i*1000);
  });
}

function flip(el) { el.classList.toggle("flipped"); }

document.querySelectorAll(".selectable .card").forEach(c=>{
  c.onclick=()=>{
    document.querySelectorAll(".card").forEach(x=>x.classList.remove("selected"));
    c.classList.add("selected");
    document.getElementById("dateResult").innerText =
      `You picked: "${c.innerText}" 😘🔥`;
  };
});
