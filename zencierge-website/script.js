document.getElementById("moodForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userMood = document.getElementById("userMood").value.toLowerCase();
  const responseContainer = document.getElementById("responseContainer");

  let response = "";

  if (userMood.includes("sad") || userMood.includes("down") || userMood.includes("tired")) {
    response = `
      It’s okay to feel this way 💜  
      Take a deep breath. You’re doing better than you think.  
      Would you like a 1-min breathing guide or a kind journal prompt? 📝
    `;
  } else if (userMood.includes("happy") || userMood.includes("excited")) {
    response = `
      Yay! That’s wonderful to hear 🌞  
      Keep riding that wave of joy!  
      Want a gratitude journal prompt to hold onto this feeling?
    `;
  } else if (userMood.includes("anxious") || userMood.includes("stressed")) {
    response = `
      Sending you warmth and peace 🕊️  
      Try the 4-7-8 breathing technique: Inhale 4s, hold 7s, exhale 8s.  
      Want to try it now?
    `;
  } else {
    response = `
      Thank you for sharing 💜  
      No matter what you're feeling, you're not alone.  
      Would you like a kind affirmation or reflection?
    `;
  }

  responseContainer.innerHTML = `<p>${response}</p>`;
});

const affirmations = [
  "You are worthy of love and rest.",
  "Even small steps create big change.",
  "Your presence matters in this world.",
  "It’s okay to take your time. You’re not late.",
  "You are doing your best — and that’s enough."
];

const prompts = [
  "What’s one kind thing you said to yourself recently?",
  "What are 3 small wins you had this week?",
  "How does your body feel right now? Can you offer it some kindness?",
  "Who or what made you smile recently?",
  "Describe a peaceful moment you want to relive."
];

const breathingGuide = `
  Let’s try the 4-7-8 breathing technique 💨  
  Inhale for 4 seconds…  
  Hold for 7 seconds…  
  Exhale slowly for 8 seconds…  
  Repeat this 3 times — feel your calm return 💜
`;

function giveAffirmation() {
  const msg = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("responseContainer").innerHTML = `<p>${msg}</p>`;
}

function givePrompt() {
  const msg = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("responseContainer").innerHTML = `<p>${msg}</p>`;
}

function guideBreathing() {
  document.getElementById("responseContainer").innerHTML = `<p>${breathingGuide}</p>`;
}

document.getElementById("moodForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userMood = document.getElementById("userMood").value.toLowerCase();
  const responseContainer = document.getElementById("responseContainer");
  const extraOptions = document.getElementById("extraOptions");

  let response = "";

  if (userMood.includes("sad") || userMood.includes("down") || userMood.includes("tired")) {
    response = `It’s okay to feel this way 💜<br>Want something gentle?`;
  } else if (userMood.includes("happy") || userMood.includes("excited")) {
    response = `Yay! 🌞 Want to hold on to that light with a journal or affirmation?`;
  } else if (userMood.includes("anxious") || userMood.includes("stressed")) {
    response = `Breathe with me 🧘 Want to try a calming technique or reflection?`;
  } else {
    response = `Thank you for sharing 💜<br>What would support you best right now?`;
  }

  responseContainer.innerHTML = `<p>${response}</p>`;
  extraOptions.style.display = "block";
});
