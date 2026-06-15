document.getElementById('adicionar-tarefa').addEventListener('click', function() {
    let textoTarefa = document.getElementById('nova-tarefa').value;

    if (textoTarefa === '') return;

    let listaTarefas = document.getElementById('lista-tarefas');

    let itemLista = document.createElement('li');
    itemLista.textContent = textoTarefa;

    let botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', function() {
        itemLista.style.backgroundColor = 'lightgreen';
    });

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function() {
        listaTarefas.removeChild(itemLista);
    });

    itemLista.appendChild(botaoConcluir);
    itemLista.appendChild(botaoExcluir);
    listaTarefas.appendChild(itemLista);

    document.getElementById('nova-tarefa').value = '';

});