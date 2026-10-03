let currentProfile = null;

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const screen = $(id);
  if (screen) screen.classList.add("active");
}

function chooseProfile(profile) {
  currentProfile = profile;
  const badge = $("profileBadge");
  if (badge) badge.textContent = profile;
  showScreen("deckScreen");
}

document.querySelectorAll(".profile-button").forEach(btn => {
  btn.addEventListener("click", () => chooseProfile(btn.dataset.profile));
});

$("switchProfileBtn")?.addEventListener("click", () => {
  currentProfile = null;
  showScreen("profileScreen");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
