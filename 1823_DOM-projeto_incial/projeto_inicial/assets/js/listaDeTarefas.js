(function () {
    const criarTarefa = function (evento) {
        evento.preventDefault();

        const lista = document.querySelector("[data-list]");
        const input = document.querySelector("[data-form-input]");
        const valor = input.value;

        const tarefa = document.createElement("li");
        tarefa.classList.add("task"); //para criar uma classe "task" no html
        const conteudo = `<p class="content">${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        lista.appendChild(tarefa); //anexa um elemento dentro de outro
        input.value = "";
    };
    const novaTarefa = document.querySelector("[data-form-button]");
    novaTarefa.addEventListener("click", criarTarefa);

    const BotaoConclui = function () {
        const botaoConclui = document.createElement("button");
        botaoConclui.classList.add("check-button");
        botaoConclui.innerText = "concluir";
        botaoConclui.addEventListener("click", concluirTarefa);
        return botaoConclui;
    };

    const concluirTarefa = function (evento) {
        const botaoConclui = evento.target;

        const tarefaCompleta = botaoConclui.parentElement;

        tarefaCompleta.classList.toggle("done");
    };
})();
