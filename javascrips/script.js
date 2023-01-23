const nameInput = document.getElementById("nome");
const cognomeInput = document.getElementById("cognome");
const dataInput = document.getElementById("data");
const addBtn = document.getElementById("aggiungi");
const tbody = document.querySelector("tbody");
const inserisciBtn = document.getElementById("inserisci");
const modale = document.getElementById("modal");

inserisciBtn.onclick = () => {
  modale.classList.remove("hide");
};

const Persona = function (name, surname, date) {
  this.nome = name;
  this.cognome = surname;
  this.dataDiNascita = date;
};

const persona1 = new Persona("Mario", "Rossi", "1900-01-01");
const persona2 = new Persona("Luigi", "Bianchi", "1900-02-01");
const persona3 = new Persona("Carlo", "Verdi", "1900-03-01");

const arrayPersone = [persona1, persona2, persona3];
arrayPersone.forEach((pers) => {
  const riga = document.createElement("tr");
  const colNome = document.createElement("td");
  const colCognome = document.createElement("td");
  const colData = document.createElement("td");

  colNome.innerText = pers.nome;
  colCognome.innerText = pers.cognome;
  colData.innerText = pers.dataDiNascita;
  riga.appendChild(colNome);
  riga.appendChild(colCognome);
  riga.appendChild(colData);
  tbody.appendChild(riga);
});
console.log(arrayPersone);
const aggiungiPersona = function () {
  const riga = document.createElement("tr");
  const colNome = document.createElement("td");
  const colCognome = document.createElement("td");
  const colData = document.createElement("td");
  const personaN = new Persona(
    nameInput.value,
    cognomeInput.value,
    dataInput.value
  );
  arrayPersone.push(personaN);

  colNome.innerText = personaN.nome;
  colCognome.innerText = personaN.cognome;
  colData.innerText = personaN.dataDiNascita;
  riga.appendChild(colNome);
  riga.appendChild(colCognome);
  riga.appendChild(colData);
  tbody.appendChild(riga);
  modale.classList.add("hide");
  console.log(arrayPersone);
};
addBtn.addEventListener("click", aggiungiPersona);
