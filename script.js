const elementoLista = document.querySelector('ul') // Selecionando a ul da aba 'To do'.
const elementoInput = document.querySelector('input') // Selecionando a barra de adicionar tarefas.
const elementoBotao = document.getElementById('button2') // Selecionando o botão de add tarefas.

const tarefas = [] // array que armazena as tarefas.
//--------------------------------------------------------------------------------------------------------------------------------

function mostraTarefas(){

    elementoLista.innerHTML = ''//Estou limpando a 'ul' para adicionar outra coisa.

    for(tarefa of tarefas){ // Laço para percorreer o meu array de tarefas. Cada tarefa é um item do meu array.
        const elementoTarefa = document.createElement('li') // item a ser feito, em outras palavras, o meu 'li'.
        const textoTarefa = document.createTextNode(tarefa) // Texto do item a ser feito, texto este que está no meu array.

        const elementoButton = document.createElement('button')//Criei um link.
        const pos = tarefas.indexOf(tarefa)//Estou pegando a posição da tarefa em questão no array.
        elementoButton.setAttribute('onclick', `removeTarefa(${pos})`)//Quando clicar em 'delete', excluo a tarefa.

        const bText = document.createTextNode('delete')//Contéudo do meu link, ou seja, o que vai aparecer na tela.
        elementoButton.appendChild(bText)//Estou pegando o meu link e colocando nele o conteúdo que eu quero que apareça.
        elementoButton.setAttribute('href', '#')//Não acontece nada com o meu link.

        elementoTarefa.appendChild(textoTarefa) // O meu 'li' vai receber um texto, e esse texto é o texto da tarefa que está dentro do meu array. 
        elementoLista.appendChild(elementoTarefa)// Peguei o meu 'ul' do 'To do' e acrescentei nele o 'li'.
        elementoTarefa.appendChild(elementoButton)
    }
}
//--------------------------------------------------------------------------------------------------------------------------------
elementoBotao.setAttribute('onclick', 'addTarefa()')//Quando clicar em adicionar, vai adicionar a tarefa.
//--------------------------------------------------------------------------------------------------------------------------------
function addTarefa(){ //Adiciona as minhas tarefas.
    const textoTarefa = elementoInput.value //Estou recebendo a terefa a partir do que eu digitei na aba de add tarefas.
    tarefas.push(textoTarefa)//Estou adicionando a minha tarefa dentro do meu array de tarefas.
    elementoInput.value = '' //Estou limpando a barra de add tarefas após clicar em add uma tarefa.
    mostraTarefas()//Chamei a função para mostrar as tarefas.
}
//--------------------------------------------------------------------------------------------------------------------------------
function removeTarefa(pos){
    tarefas.splice(pos, 1)//Exclui a tarefa da posição em questão.
    mostraTarefas()
}



//--------------------------------------------------------------------------------------------------------------------------------