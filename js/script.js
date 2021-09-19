function excluirTarefa(classe) {
    document.querySelector('.' + classe);
}

var addTarefa = document.querySelector('#tarefa').addEventListener('keypress', function(event){
    if(event.which == 13){
        let tarefa      = document.querySelector('#tarefa').value;
        let listaTarefa = document.querySelector('div.container #divExterna #listaTarefa');
        let textNode    = document.createTextNode(tarefa);
        let qtdLi = 1;

        if (!listaTarefa) {
            listaTarefa = document.createElement('ul');
            listaTarefa.setAttribute('id', 'listaTarefa');
            document.querySelector('div.container #divExterna').appendChild(listaTarefa);
            let li = document.createElement('li');
            li.setAttribute('class', 'item' + qtdLi);
            li.appendChild(textNode);
            li.innerHTML += '<button onclick="excluirTarefa(' + li.className + ')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
            listaTarefa.appendChild(li);
            console.log('Caí em cima');
        } else {
            // Quantidade de "li" que a lista possui
            qtdLi = document.querySelectorAll('#listaTarefa li').length;

            let li = document.createElement('li');
            li.setAttribute('class', 'item' + (qtdLi + 1));
            li.appendChild(textNode);
            li.innerHTML += '<button onclick="' + excluirTarefa() + '" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
            listaTarefa.appendChild(li);
            console.log('Caí em baixo');
        }

        document.querySelector('#tarefa').value = '';
        console.log(listaTarefa);
    }
}, false);

function adicionarTarefa() {
    let tarefa      = document.querySelector('#tarefa').value;
    let listaTarefa = document.querySelector('div.container #divExterna #listaTarefa');
    let textNode    = document.createTextNode(tarefa);
    let qtdLi = 1;

    if (!listaTarefa) {
        // Cria o elemento da lista
        listaTarefa = document.createElement('ul');
        listaTarefa.setAttribute('id', 'listaTarefa');
        document.querySelector('div.container #divExterna').appendChild(listaTarefa);
        let li = document.createElement('li');
        li.setAttribute('class', 'item' + qtdLi);
        li.appendChild(textNode);
        li.innerHTML += '<button onclick="' + excluirTarefa() + '" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
        listaTarefa.appendChild(li);
        console.log('Caí em cima');
    } else {
        // Quantidade de "li" que a lista possui
        qtdLi = document.querySelectorAll('#listaTarefa li').length;

        // Continua add elementos na lista
        let li = document.createElement('li');
        li.setAttribute('class', 'item' + (qtdLi + 1));
        li.appendChild(textNode);
        li.innerHTML += '<button onclick="' + excluirTarefa() + '" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
        listaTarefa.appendChild(li);
        console.log('Caí em baixo');
    }

    // Limpa campo de TAREFA
    document.querySelector('#tarefa').value = '';
}