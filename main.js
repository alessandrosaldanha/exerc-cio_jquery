$(document).ready(function () {
    $("form").on("submit", function (e) {
    e.preventDefault();
    const adicionaTarefa = $(".form-input").val();

    const tarefaExiste = $("ul li")
        .toArray()
        .some((li) => $(li).text() === adicionaTarefa);
    if (tarefaExiste) {
        alert("Esta tarefa já existe na lista.");
        return;
    }

    const listaTarefas = $(`<li class="has-marker">${adicionaTarefa}</li>`);
    $(listaTarefas).appendTo("ul");
    $(".form-input").val("");
    });

    $("ul").on("click", "li", function () {
    $(this).toggleClass("strike-through");
    });
    //.toggleClass(Insere ou remove uma ou mais classes dos elementos determinados, alternando entre classes escolhidas.)
});
