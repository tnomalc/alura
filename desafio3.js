

function opcoes()
{
  console.log("1-Criar uma função que exibe 'Olá, mundo!' no console.");
  console.log("2-Criar uma função que recebe um nome como parâmetro e exibe Olá, [nome]! no console.");
  console.log("3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.");
  console.log("4-Criar uma função que recebe três números como parâmetros e retorna a média deles.");
  console.log("5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.");
  console.log("6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por    ele mesmo");
}

function primeiroCodigo()
{
  console.log("Olá,mundo!");
}

function saudacao(nome){
   console.log(`Olá,${nome}`);
}

function dobraNumero(num)
{
  return Math.pow(num,2);
}

function mediaNumeros(num1,num2,num3)
{
  return (num1+num2+num3)/3;
}

function maiorValor(num1,num2)
{
  if (num1>num2)
    return num1;
    
  else
    return num2;
}

function produtoDoMesmo(num)
{
  return num*num;
}

opcoes();

let codOp = parseInt(prompt("Digite uma opção: ");

switch(codOp)
{
  case 1:
   primeiroCodigo();
  break;
 
  case 2:
   let nome = prompt("Digite o nome: ");
   saudacao(nome);
  break;
  
  case 3:
   let num = parseInt(prompt("Digite um número: ");
   dobraNumero(num);
  break;
  
  case 4:
   mediaNumeros(10,12,2);
  break;
  
  case 5:
   maiorValor(12,20);
  break;
  
  case 6:
   produtoDoMesmo(85);
  break;
  
  default: console.log("Opção inválida");

}
