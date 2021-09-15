var addTarefa = document.querySelector('#tarefa').addEventListener('keypress', function(event){
    if(event.which == 13){
        let tarefa      = document.querySelector('#tarefa').value;
        let listaTarefa = document.querySelector('div.container #divExterna #listaTarefa');
        let textNode    = document.createTextNode(tarefa);

        if (!listaTarefa) {
            listaTarefa = document.createElement('ul');
            listaTarefa.setAttribute('id', 'listaTarefa');
            document.querySelector('div.container #divExterna').appendChild(listaTarefa);
            let li = document.createElement('li');
            li.appendChild(textNode);
            listaTarefa.appendChild(li);
            console.log('Caí em cima');
        } else {
            let li = document.createElement('li');
            li.appendChild(textNode);
            listaTarefa.appendChild(li);
            console.log('Caí em baixo');
        }

       console.log(listaTarefa);
    }
}, false);

// function adicionarTarefa() {
     
// }