const answerElement = document.querySelector("#answerElement")
const answerInput = document.querySelector("#answerInput")
const answerButton = document.querySelector("#answerButton")
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function makeQuestion() {

  if(answerInput.value == "") {
    alert("Digite sua pergunta!")
    return
  }
  answerInput.style.display = "none";
  answerButton.style.display = "none";
  answerButton.setAttribute("disabled", true)

  const question = "<div>" + answerInput.value + "</div>"

  const  answerAmount = answers.length
  const numeroAleatorio = Math.floor(Math.random() * answerAmount)

  answerElement.innerHTML = question + answers[numeroAleatorio]

  answerElement.style.opacity = 1;

  setTimeout(function() {
    answerElement.style.opacity = 0;
    answerButton.removeAttribute("disabled")
  }, 3000)
  setTimeout(function() {
    answerInput.style.display = "grid";
    answerButton.style.display = "grid";
  }, 4000)
}
