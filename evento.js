//CADASTRO - EVENTO

let idadeDoParticipante = 18
let dataDoEvento = 17/01/2022
let totalDeParticipantes = 5
let participantes = ["Fabio","Bruno","Jessica","Fernando","Thanos"]
const palestrantes = ["Tony Stark","Michael Phelps","Kimi Raikkonen"]

//Data de nascimento
console.log("Digite sua data de nascimento:")

//Qual sua idade?
if(idadeDoParticipante >= 18) {
    console.log("Cadastro permitido, registrado ao evento")
} else if (idadeDoParticipante <= 17) {
    console.log ("Cadastro não permitido.")
  return false
}
//Data do evento
if ((new Date() < dataDoEvento)) {
    console.log("Cadastro realizado com sucesso.")
} else {
    console.log("Data limite expirada.")
}

//Quantidade de participantes
if (totalDeParticipantes > 100) {
    console.log("Cadastro não realizado! Numero de participantes excedido.")
} else {
    console.log("Cadastro realizado com sucesso! Veja a lista de participantes:")
}    

// Lista palestrantes e participantes
console.log("Palestrantes:")
console.log(palestrantes)
console.log("Participantes")
console.log(participantes)
