function excluirTarefa(classe) {
    console.log(`Teste: ${classe}`);
    document.querySelector('li.' + classe).remove();
    
    // Seta foco no campo de TAREFA
    setFocus();
}

var addTarefa = document.querySelector('#tarefa').addEventListener('keypress', function(event){
    if(event.which == 13){
        let tarefa      = document.querySelector('#tarefa').value;

        if ((tarefa) && (tarefa != '')) {
            let listaTarefa = document.querySelector('div.container #divExterna #listaTarefa');
            let textNode    = document.createTextNode(tarefa);
            let qtdLi = 1;

            if (!listaTarefa) {
                listaTarefa = document.createElement('ul');
                listaTarefa.setAttribute('id', 'listaTarefa');
                document.querySelector('div.container #divExterna').appendChild(listaTarefa);
                let li = document.createElement('li');
                li.setAttribute('class', 'item-' + qtdLi);
                li.appendChild(textNode);
                li.innerHTML += '<button onclick="excluirTarefa(\'' + li.className + '\')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
                listaTarefa.appendChild(li);
            } else {
                // Quantidade de "li" que a lista possui
                qtdLi = lastListElement();

                let li = document.createElement('li');
                li.setAttribute('class', 'item-' + (qtdLi + 1));
                li.appendChild(textNode);
                li.innerHTML += '<button onclick="excluirTarefa(\'' + li.className + '\')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
                listaTarefa.appendChild(li);
            }

            document.querySelector('#tarefa').value = '';
            console.log(listaTarefa);
        }
    }
}, false);

function adicionarTarefa() {
    let tarefa      = document.querySelector('#tarefa').value;
    if ((tarefa) && (tarefa != '')) {
        let listaTarefa = document.querySelector('div.container #divExterna #listaTarefa');
        let textNode    = document.createTextNode(tarefa);
        let qtdLi = 1;

        if (!listaTarefa) {
            // Cria o elemento da lista
            listaTarefa = document.createElement('ul');
            listaTarefa.setAttribute('id', 'listaTarefa');
            document.querySelector('div.container #divExterna').appendChild(listaTarefa);
            let li = document.createElement('li');
            li.setAttribute('class', 'item-' + qtdLi);
            li.appendChild(textNode);
            li.innerHTML += '<button onclick="excluirTarefa(\'' + li.className + '\')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
            listaTarefa.appendChild(li);
        } else {
            // Quantidade de "li" que a lista possui
            qtdLi = lastListElement();

            // Continua add elementos na lista
            let li = document.createElement('li');
            li.setAttribute('class', 'item-' + (qtdLi + 1));
            li.appendChild(textNode);
            li.innerHTML += '<button onclick="excluirTarefa(\'' + li.className + '\')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
            listaTarefa.appendChild(li);
        }
    }

    // Limpa campo de TAREFA
    document.querySelector('#tarefa').value = '';

    // Seta foco no campo de TAREFA
    setFocus();
}

function lastListElement() {
    let list = document.querySelectorAll('#listaTarefa li');
    // -1 para pegar o último elemento e ver qual o último item da Lista
    let qtdLi = list.length - 1;
    let vQtd = list[qtdLi].className.split('-');
    return parseInt(vQtd[1]);
}

function setFocus() {
    document.getElementById('tarefa').focus();
}