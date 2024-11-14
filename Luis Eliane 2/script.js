



document.getElementById('form-tarefa').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const novaTarefa = document.getElementById('nova-tarefa').value.trim();

  
    if (novaTarefa === "") {
        
        document.getElementById('erro-mensagem').style.display = 'block';
    } else {
        
        document.getElementById('erro-mensagem').style.display = 'none';

        
        const li = document.createElement('li');
        li.textContent = novaTarefa;

       
        document.getElementById('lista-tarefas').appendChild(li);

       
        document.getElementById('nova-tarefa').value = '';
    }
});
