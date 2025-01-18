// Seleção dos elementos
const homeScreen = document.getElementById("home-screen");
const telaCadastro = document.getElementById("tela-cadastro");
const telaConsulta = document.getElementById("tela-consulta");

// Função para alternar telas
function navigateTo(screen) {
  // Oculta todas as telas
  homeScreen.classList.add("hidden");
  telaCadastro.classList.add("hidden");
  telaConsulta.classList.add("hidden");

  // Exibe a tela solicitada
  if (screen === "register") {
    telaCadastro.classList.remove("hidden");
  } else if (screen === "consulta") {
    telaConsulta.classList.remove("hidden");
  } else if (screen === "home") {
    homeScreen.classList.remove("hidden");
  }
}
