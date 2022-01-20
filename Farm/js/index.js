// ------------------------Light Dark Mode-----------------------------------
document.getElementById("icon").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../dark theme icon/dark theme icon/sun.png";
  } else {
    icon.src = "../dark theme icon/dark theme icon/moon.png";
  }
});
