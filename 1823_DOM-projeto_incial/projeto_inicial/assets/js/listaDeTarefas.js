const criarTarefa = function (evento) {
    evento.preventDefault();
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    //console.log(valor);
    //const tarefa = document.querySelector("[data-list]");

    const tarefa = document.createElement("li");

    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.classList.add("task"); //para criar uma classe "task" no html
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa); //anexa um elemento dentro de outro

    input.value = "";
};
const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener("click", criarTarefa);
