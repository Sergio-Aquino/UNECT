const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.getElementById('button2')

const tarefas = []

function mostraTarefas(){

    elementoLista.innerHTML = ''

    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
    }
}

mostraTarefas()

function addTarefa(){
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostraTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefa()')
