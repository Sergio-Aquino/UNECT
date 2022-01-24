const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.getElementById('button2')


const tarefas = []
const doing = []

function mostraTarefas(){

    elementoLista.innerHTML = ''

    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')

        const linkText = document.createTextNode('delete')
        elementoLink.appendChild(linkText)
        elementoLink.setAttribute('href', '#')

        const pos = tarefas.indexOf(tarefa)
        elementoLink.setAttribute('onclick', `removeTarefa(${pos})`)
//-----------------------------------------------------------------------------------------------------------------------
       
       


//---------------------------------------------------------------------------------------------------------------------------
        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
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

function removeTarefa(pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
}