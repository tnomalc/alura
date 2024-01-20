let tituloNovo = document.querySelector("h");
tituloNovo.innerHTML = "Hora do Desafio";

function pressionando()
{
  console.log("O botão foi clicado.")
}

function progLangPredileta(){
  alert("Eu amo Perl, lamento desapontá-los");
}

function afetividade()
{
  let cidade = prompt("Por obséquio, insira o nome de uma cidade: ");
  alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaNumeros()
{
  let num1 = parseInt(prompt("Por favor, digite um número: "));
  let num2 = parseInt(prompt("Agora, digite outro número: "));
  let soma;
  
  soma = num1+num2;
  
  alert(`A soma entre ${num1} e ${num2} é ${soma}`);
}
