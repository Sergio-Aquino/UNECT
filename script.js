const elementoLista = document.querySelector('ul')// Selecionando a ul da aba 'To do'.
const elementoInput = document.querySelector('input')// Selecionando a barra de adicionar tarefas.
const elementoBotao = document.getElementById('button2')// Selecionando o botão de add tarefas.
const elementoLista2 = document.getElementById('ul2')// Selecionando a ul da aba 'Doing'.
const elementoLista3 = document.getElementById('ul3')// Selecionando a ul da aba 'Done'. 

const tarefas = [] // array que armazena as tarefas.
const doing = []
const done = []
//-----------------------------------------------------------------------------------------------------------------------
function mostraTarefas(){

    elementoLista.innerHTML = ''//Estou limpando a 'ul' para adicionar outra coisa.

    for(tarefa of tarefas){ // Laço para percorreer o meu array de tarefas. Cada tarefa é um item do meu array.
        const elementoTarefa = document.createElement('li') // item a ser feito, em outras palavras, o meu 'li'.
        const textoTarefa = document.createTextNode(tarefa) // Texto do item a ser feito, texto este que está no meu array.

        const elementoButton = document.createElement('button')//Criei um button.
        const bText = document.createTextNode('delete')//Contéudo do meu link, ou seja, o que vai aparecer na tela.
        elementoButton.appendChild(bText)//Estou pegando o meu button e colocando nele o conteúdo que eu quero que apareça.

        const elementoButton2 = document.createElement('button')
        const bText2 = document.createTextNode('passar')
        elementoButton2.appendChild(bText2)

        const pos = tarefas.indexOf(tarefa)//Estou pegando a posição da tarefa em questão no array.
        elementoButton.setAttribute('onclick', `removeTarefa(${pos})`)//Quando clicar em 'delete', excluo a tarefa.

        const pos2 = tarefas.indexOf(tarefa)
        elementoButton2.setAttribute('onclick', `passarTarefa(${pos2})`)
        
        elementoTarefa.appendChild(textoTarefa)//O meu 'li' vai receber um texto, e esse texto é o texto da tarefa que está dentro do meu array. 
        elementoLista.appendChild(elementoTarefa)// Peguei o meu 'ul' do 'To do' e acrescentei nele o 'li'.
        elementoTarefa.appendChild(elementoButton2)
        elementoTarefa.appendChild(elementoButton)
        

    }
}
//-----------------------------------------------------------------------------------------------------------------------
elementoBotao.setAttribute('onclick', 'addTarefa()')//Quando clicar em adicionar, vai adicionar a tarefa.
//-----------------------------------------------------------------------------------------------------------------------
function addTarefa(){ //Adiciona as minhas tarefas.
    const textoTarefa = elementoInput.value //Estou recebendo a terefa a partir do que eu digitei na aba de add tarefas.
    tarefas.push(textoTarefa)//Estou adicionando a minha tarefa dentro do meu array de tarefas.
    elementoInput.value = '' //Estou limpando a barra de add tarefas após clicar em add uma tarefa.
    mostraTarefas()//Chamei a função para mostrar as tarefas.
}
//-----------------------------------------------------------------------------------------------------------------------
function removeTarefa(pos){
    tarefas.splice(pos, 1)//Exclui a tarefa da posição em questão.
    mostraTarefas()
}
//-----------------------------------------------------------------------------------------------------------------------
function passarTarefa(pos2){
    doing.push(tarefas[pos2])//Passando a tarefa do array 'tarefa' para o array 'doing'.
    tarefas.splice(tarefas[pos2], 1)//Excluindo a tarefa em questão do array 'tarefas'.
    mostraTarefas()//Renderizando as informações.
    fazendo()
}
//-----------------------------------------------------------------------------------------------------------------------
function fazendo(){ 
    elementoLista2.innerHTML = '' //Limpando o 'ul2'
    for(item of doing){ //Percorrendo o vetor 'doing'
        const elementoTarefa = document.createElement('li')//Criando o 'li' da barra 'Doing'
        const textoTarefa = document.createTextNode(item)//Pegando o texto do item no array.

        const elementoButton3 = document.createElement('button')
        const btext3 = document.createTextNode('delete')
        elementoButton3.appendChild(btext3)
        
        const elementoButton4 = document.createElement('button')
        const btext4 = document.createTextNode('concluir')
        elementoButton4.appendChild(btext4) 

        elementoTarefa.appendChild(textoTarefa)//Inserindo a tarefa no 'li'
        elementoLista2.appendChild(elementoTarefa)//Inserindo o 'li' na 'ul2'
        elementoTarefa.appendChild(elementoButton4)
        elementoTarefa.appendChild(elementoButton3)
        

        const pos3 = doing.indexOf(item)
        elementoButton3.setAttribute('onclick', `apagarTarefa(${pos3})`)

        const pos4 = doing.indexOf(item)
        elementoButton4.setAttribute('onclick', `passarTarefa2(${pos4})`)

    }
}
//-----------------------------------------------------------------------------------------------------------------------
function apagarTarefa(pos3){
    doing.splice(pos3, 1)
    fazendo()
}
//-----------------------------------------------------------------------------------------------------------------------
function passarTarefa2(pos4){
    done.push(doing[pos4])
    doing.splice(doing[pos4], 1)
    fazendo()
    feito()
}
//-----------------------------------------------------------------------------------------------------------------------
function feito(){
    elementoLista3.innerHTML = ''

    for(task of done){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(task)

        const elementoButton5 = document.createElement('button')
        const btext5 = document.createTextNode('retornar')
        elementoButton5.appendChild(btext5)

        const elementoButton6 = document.createElement('button')
        const btext6 = document.createTextNode('delete')
        elementoButton6.appendChild(btext6)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista3.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoButton5)
        elementoTarefa.appendChild(elementoButton6)

        const pos5 = done.indexOf(task)
        elementoButton6.setAttribute('onclick', `removeTask(${pos5})`)

        const pos6 = done.indexOf(task)
        elementoButton5.setAttribute('onclick', `retornarTarefa(${pos6})`)
    }
}
//-----------------------------------------------------------------------------------------------------------------------
function removeTask(pos5){
    done.splice(pos5, 1)
    feito()
}
//-----------------------------------------------------------------------------------------------------------------------
function retornarTarefa(pos6){
    tarefas.push(done[pos6])
    done.splice(done[pos6], 1)
    feito()
    mostraTarefas()
}

