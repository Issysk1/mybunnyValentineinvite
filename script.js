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

💖 QUIZ
const questions = [
  { q: "Who’s hotter? 😏", a: [
      ["Me (obviously)", "Wrong answer 😏 Cute… but you’re the reason I can’t focus.", false],
      ["You (no debate)", "", true],
      ["Us together 🥵", "Wrong answer 🔥 Together we’re fire, but you’re the spark I can’t resist.", false],
      ["The tension rn", "Wrong answer 😏 The tension’s real, but your face wins the crown.", false]
    ]
  },
  { q: "Who fell in love first? 💘", a: [
      ["You (I saw it coming)", "Wrong answer 😏 Sweet try, but I swooped in first and stole the show.", false],
      ["Me (I tried to play it cool)", "", true],
      ["Both at the same time (soulmate timing ✨)", "Wrong answer 😂 Not this time… I fell before you even noticed.", false],
      ["Our vibes before we did", "Wrong answer 😌 The vibes were strong, but I was first to catch feelings.", false]
    ]
  },
  { q: "Who is funnier? 😏", a: [
      ["Me (obviously 🙄)", "Wrong answer 😅 Cute try, but your laugh is the real punchline.", false],
      ["You (don’t let it go to your head)", "Wrong answer 😏 Okay maybe… but you still need me to make it a show.", false],
      ["Both of us (comedy duo energy 😌)", "", true],
      ["The arguments we turn into jokes", "Wrong answer 😂 True, but I’m still funnier when I tease you.", false]
    ]
  },
  { q: "Who loves more? 🥰", a: [
      ["You (dramatically)", "Wrong answer 😏 Dramatic yes, but my heart beats harder for you.", false],
      ["Me (unhealthily 😌)", "Wrong answer 😘 Maybe… but I love you in every way that counts.", false],
      ["Both—just differently but deeply 💗", "", true]
    ]
  },
  { q: "What’s my favorite thing about you? 😍", a: [
      ["Your looks (hello??)", "Wrong answer 😏 Gorgeous, yes, but that’s just the bonus level.", false],
      ["Your personality (huge bonus)", "Wrong answer 😌 Amazing too, but my favorite is how you make me feel alive.", false],
      ["The way you make me feel loved & calm 🤍", "", true],
      ["The fact that you’re mine 😌", "Wrong answer 😘 Being yours is amazing, but not the main reason I love you.", false]
    ]
  }
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
