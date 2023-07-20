document.getElementById('form').addEventListener('submit', (e)=>{
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const task = {
        title,
        description,
    }
    if(localStorage.getItem('tasks') === null){ //si esta vacio crealas
        let tasks = []
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }else{ //si ya existen obtienes lo actualizas y lo envias de nuevo
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    e.preventDefault()
})