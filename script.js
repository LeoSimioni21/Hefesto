// Seleção dos elementos
const homeScreen = document.getElementById("home-screen");
const telaCadastro = document.getElementById("tela-cadastro");
const telaConsulta = document.getElementById("tela-consulta");
const chk = document.getElementById("chk");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    chk.checked = true;
  } else {
    document.body.classList.remove("dark");
    chk.checked = false;
  }
});

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
function navigateTo(screen) {
  homeScreen.classList.add("hidden");
  telaCadastro.classList.add("hidden");
  telaConsulta.classList.add("hidden");

  if (screen === "register") {
    telaCadastro.classList.remove("hidden");
  } else if (screen === "consulta") {
    telaConsulta.classList.remove("hidden");
  } else if (screen === "home") {
    homeScreen.classList.remove("hidden");
  }
}
