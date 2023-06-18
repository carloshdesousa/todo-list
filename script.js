const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeitens = []



function adicionarNovaTarefa() {
    minhaListaDeitens.push({
        tarefa: input.value,
        concluida: true
    })

    input.value = ''

    mostrarTarefas()
}


function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeitens.forEach((item, posicao) => {
        novaLi = novaLi +
                `<li class="task ${item.concluida ? 'concluida': 'done'}">
                        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                        <p>${item.tarefa}</p>
                        <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
                </li>`

    })
listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(minhaListaDeitens))

}

function concluirTarefa(posicao){
        minhaListaDeitens[posicao].concluida = !minhaListaDeitens[posicao].concluida
        mostrarTarefas()
}


function deletarItem(posicao){
    minhaListaDeitens.splice(posicao,1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
        minhaListaDeitens= JSON.parse(tarefasDoLocalStorage)
    }

    

    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)