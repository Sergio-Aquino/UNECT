const elementoLista = document.querySelector('ul')// Selecionando a ul da aba 'To do'.
const elementoInput = document.querySelector('input')// Selecionando a barra de adicionar tarefas.
const elementoBotao = document.getElementById('button2')// Selecionando o botão de add tarefas.
const elementoLista2 = document.getElementById('ul2')// Selecionando a ul da aba 'Doing'.
const elementoLista3 = document.getElementById('ul3')// Selecionando a ul da aba 'Done'. 

const tarefas = [] //Array que armazena as tarefas que serão apresentadas na aba 'To do'.
const doing = []//Array que armazena as tarefas que serão apresentadas na aba 'Doing'.
const done = []//Array que armazena as tarefas que serão apresentadas na aba 'Done'. 
//-----------------------------------------------------------------------------------------------------------------------
function mostraTarefas(){

    elementoLista.innerHTML = ''//Estou limpando a 'ul' para adicionar outra coisa.

    for(tarefa of tarefas){ // Laço para percorreer o meu array de tarefas. Cada tarefa é um item do meu array.
        const elementoTarefa = document.createElement('li') // item a ser feito, em outras palavras, o meu 'li'.
        const textoTarefa = document.createTextNode(tarefa) // Texto do item a ser feito, texto este que está no meu array tarefas.

        const elementoButton = document.createElement('button')//Criei um button.
        const bText = document.createTextNode('delete')//Contéudo do meu button, ou seja, o que vai aparecer na tela.
        elementoButton.appendChild(bText)//Estou pegando o meu button e colocando nele o conteúdo que eu quero que apareça.

        const elementoButton2 = document.createElement('button')//Criei um button.
        const bText2 = document.createTextNode('passar')//Criei um texto que será colocado no button.
        elementoButton2.appendChild(bText2)//Colocando o texto no button.

        const pos = tarefas.indexOf(tarefa)//Estou pegando a posição da tarefa em questão no array tarefas.
        elementoButton.setAttribute('onclick', `removeTarefa(${pos})`)//Quando clicar em 'delete', excluo a tarefa.

        const pos2 = tarefas.indexOf(tarefa)//Estou pegando a posição da tarefa em questão no array tarefas.
        elementoButton2.setAttribute('onclick', `passarTarefa(${pos})`)
        
        elementoTarefa.appendChild(textoTarefa)//O meu 'li' vai receber um texto, e esse texto é o texto da tarefa que está dentro do meu array. 
        elementoLista.appendChild(elementoTarefa)//Peguei o meu 'ul' do 'To do' e acrescentei nele o 'li'.
        elementoTarefa.appendChild(elementoButton2)//Colocando o meu button dentro do 'li'.
        elementoTarefa.appendChild(elementoButton)//Colocando outro button dentro do meu 'li'.
    }
}
//-----------------------------------------------------------------------------------------------------------------------
elementoBotao.setAttribute('onclick', 'addTarefa()')//Quando clicar em adicionar, vai adicionar a tarefa.
//-----------------------------------------------------------------------------------------------------------------------
function addTarefa(){ //Adiciona as minhas tarefas.
    const textoTarefa = elementoInput.value //Estou recebendo a terefa a partir do que eu digitei na aba de add tarefas.
    tarefas.push(textoTarefa)//Estou adicionando a minha tarefa dentro do meu array de tarefas.
    elementoInput.value = '' //Estou limpando a barra de add tarefas após clicar em add uma tarefa.
    mostraTarefas()//Chamei a função para renderizar as informações.
}
//-----------------------------------------------------------------------------------------------------------------------
function removeTarefa(pos){
    tarefas.splice(pos, 1)//Exclui a tarefa da posição em questão.
    mostraTarefas()//Chamei a função para renderizar as informações.
}
//-----------------------------------------------------------------------------------------------------------------------
function passarTarefa(pos){
    doing.push(tarefas[pos])//Passando a tarefa do array 'tarefa' para o array 'doing'.
    tarefas.splice(tarefas[pos], 1)//Excluindo a tarefa em questão do array 'tarefas'.
    mostraTarefas()//Renderizando as informações após ter apagado a tarefa do array 'tarefas'.
    fazendo()//Chamando outra função para mostrar a tarefa que acabou de entrar no array 'doing'.
}
//-----------------------------------------------------------------------------------------------------------------------
function fazendo(){ 
    elementoLista2.innerHTML = '' //Limpando o 'ul2'
    for(item of doing){ //Percorrendo o vetor 'doing'
        const elementoTarefa = document.createElement('li')//Criando o 'li' da barra 'Doing'
        const textoTarefa = document.createTextNode(item)//Pegando o texto do item no array 'doing'.

        const elementoButton3 = document.createElement('button')//Criando um button.
        const btext3 = document.createTextNode('delete')//Criando o texto que será colocado no buttton.
        elementoButton3.appendChild(btext3)//Colocando o texto no button.
        
        const elementoButton4 = document.createElement('button')//Criando um button.
        const btext4 = document.createTextNode('concluir')//Criando texto que será colocado dentro do button.
        elementoButton4.appendChild(btext4) //Colocando o texto no button.

        elementoTarefa.appendChild(textoTarefa)//Inserindo a tarefa no 'li'
        elementoLista2.appendChild(elementoTarefa)//Inserindo o 'li' na 'ul2'
        elementoTarefa.appendChild(elementoButton4)//Inserindo o botão de concluir dentro da 'li'
        elementoTarefa.appendChild(elementoButton3)//Inserindo o botão de deletar no 'li'.
        

        const pos = doing.indexOf(item)//Pegando a posição do item em questão no array 'doing'.
        elementoButton3.setAttribute('onclick', `apagarTarefa(${pos})`)//Chamando a função apagarTarefa() com a posição do item como argumento.

        const pos4 = doing.indexOf(item)//Pegando a posição do item em questão no array 'doing'.
        elementoButton4.setAttribute('onclick', `passarTarefa2(${pos})`)//Chamando a função passarTarefa2() com a posição do item em questão como argumento.

    }
}
//-----------------------------------------------------------------------------------------------------------------------
function apagarTarefa(pos){
    doing.splice(pos, 1)//Apagando a tarefa em questão do array 'doing'.
    fazendo()//Renderizando as informações após ter apagado a tarefa do array 'doing'.
}
//-----------------------------------------------------------------------------------------------------------------------
function passarTarefa2(pos){
    done.push(doing[pos])//Adicionando a tarefa em questão no array 'done'.
    doing.splice(doing[pos], 1)//Apagando a mesma tarefa, mas no array 'doing'.
    fazendo()//Renderizando as informações após ter apagado a tarefa do array 'doing'.
    feito()//Chamando a função feito() para mostrar a tarefa que acabou de entrar no array 'done'.
}
//-----------------------------------------------------------------------------------------------------------------------
function feito(){
    elementoLista3.innerHTML = ''//Limpando a 'ul3';

    for(task of done){
        const elementoTarefa = document.createElement('li')//Criando a 'li', ou seja, o meu item em sí.
        const textoTarefa = document.createTextNode(task)//Pegando o texto do item no array 'done'.

        const elementoButton5 = document.createElement('button')//Criando um button.
        const btext5 = document.createTextNode('retornar')//Criando o texto que será adicionado no botão.
        elementoButton5.appendChild(btext5)//Colocando o texto no botão.

        const elementoButton6 = document.createElement('button')//Criando um button.
        const btext6 = document.createTextNode('delete')//Criando o texto que será adicionado no meu button.
        elementoButton6.appendChild(btext6)//Colocando o texto dentro do meu button.

        elementoTarefa.appendChild(textoTarefa)//Colocando o texto do item que está no meu array done dentro do meu 'li'.
        elementoLista3.appendChild(elementoTarefa)//Colocando o meu 'li' dentro do meu 'ul3'.
        elementoTarefa.appendChild(elementoButton5)//Colocando o botão de 'retornar' dentro do meu 'li'.
        elementoTarefa.appendChild(elementoButton6)//Colocando o botão de 'delete' dentro do meu 'li'.

        const pos = done.indexOf(task)//Pegando a posição do meu item em questão.
        elementoButton6.setAttribute('onclick', `removeTask(${pos})`)//Quando o botão 'delete' for clicado, chamar a função removeTask(), passando como argumento a posição da tarefa em questão para apagá-la.

        const pos6 = done.indexOf(task)//Pegando a posição do meu elemento em questão.
        elementoButton5.setAttribute('onclick', `retornarTarefa(${pos})`)//Chamando a função 'retornarTarefa()', passando como argumento a posição da tarefa, para fazer com que a tarefa em questão volte para a aba 'Doing'.
    }
}
//-----------------------------------------------------------------------------------------------------------------------
function removeTask(pos){
    done.splice(pos, 1)//Apagando a tarefa em questão do array 'done'.
    feito()//Renderizando as informações após ter apagado a tarefa.
}
//-----------------------------------------------------------------------------------------------------------------------
function retornarTarefa(pos){
    tarefas.push(done[pos])//Pegando a tarefa em questão e colocando-a dentro do meu array 'tarefas'.
    done.splice(done[pos], 1)//Apagando a tarefa do meu array 'done'.
    feito()//Renderizando as informações da aba 'Done' após ter apagado a tarefa do array 'done'.
    mostraTarefas()//Chamando a função mostraTarefas() para mostrar a tarefa que acabou de entrar novamente no array 'tarefas'.
}