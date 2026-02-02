// 💖 HEARTS
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// 🐝 BEES
const bees = document.querySelectorAll(".bee");
bees.forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO ESCAPES
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 80) + "px";
});

// 💕 YES
document.getElementById("yes").onclick = () => {
  document.getElementById("valentine").classList.add("hidden");
  document.getElementById("yesMessage").classList.remove("hidden");
  explodeHearts();

  setTimeout(() => {
    document.getElementById("quizIntro").classList.remove("hidden");
  }, 2500);
};

// 💥 HEART EXPLOSION
function explodeHearts() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💘";
    h.style.left = "50%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

// 💖 QUIZ
const questions = [
  { q: "Who’s hotter? 😏", a: [ ["Me (obviously)", false], ["You (no debate)", true], ["Us together 🥵", false], ["The tension rn", false] ] },
  { q: "Who fell in love first? 💘", a: [ ["You (I saw it coming)", false], ["Me (I tried to play it cool)", false], ["Both at the same time (soulmate timing ✨)", true], ["Our vibes before we did", false] ] },
  { q: "Who is funnier? 😏", a: [ ["Me (obviously 🙄)", false], ["You (don’t let it go to your head)", false], ["Both of us (comedy duo energy 😌)", true], ["The arguments we turn into jokes", false] ] },
  { q: "Who loves more? 🥰", a: [ ["You (dramatically)", false], ["Me (unhealthily 😌)", false], ["Both—just differently but deeply 💗", true], ["Yes.", false] ] },
  { q: "What’s my favorite thing about you? 😍", a: [ ["Your looks (hello??)", false], ["Your personality (huge bonus)", false], ["The way you make me feel loved & calm 🤍", true], ["The fact that you’re mine 😌", false] ] }
];

let i = 0;
const q = document.getElementById("question");
const a = document.getElementById("answers");

document.getElementById("quizIntro").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden");
  showQ();
};

function showQ() {
  q.innerText = questions[i].q;
  a.innerHTML = "";
  questions[i].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.onclick = () => {
      if (ans[1]) {
        explodeHearts();
        i++;
        if (i < questions.length) showQ();
        else revealNext();
      } else {
        b.innerText = "❌ try again";
      }
    };
    a.appendChild(b);
  });
}

// 💌 REVEAL SECTIONS
function revealNext() {
  ["dates","love","memories","music"].forEach((id, idx) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
    }, idx * 1200);
  });

  const loveItems = [
    "Your brains—so smart, I pretend to understand… but mostly just stare and look cute. 🧠😉",
    "Those deep eyes—I swear they hypnotize me… or maybe I’m just weak for you. 👀💘",
    "When you “correct” my English… I lie, I hate it… but secretly, it’s my favorite torture. 😏",
    "Your mix of cute, hot, and beautiful—illegal, honestly. 🔥🥰",
    "How unique you are—like, did the universe make you just to annoy me and steal my heart? 💎💖",
    "Your laugh—it makes me want to do everything right… or at least make you laugh more. 😄💗"
  ];

  const list = document.getElementById("loveList");
  loveItems.forEach((t, i) => {
    setTimeout(() => {
      const c = document.createElement("div");
      c.className = "card";
      c.innerText = t;
      list.appendChild(c);
    }, i * 800);
  });
}

// 📅 DATE PICKER
document.querySelectorAll("#dates .card").forEach(card => {
  card.onclick = () => {
    document.querySelectorAll("#dates .card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    document.getElementById("dateResult").innerText = "Perfect choice 😌💖 We’re doing this.";
  };
});

// 📸 MEMORY FLIP
function flip(el) {
  el.classList.toggle("flipped");
}
