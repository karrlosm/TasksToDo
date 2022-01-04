import { getDatabase, ref, push, child, get, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function newTask(usernamet, assuntot, descricaot) {
    const db = getDatabase();
    
    const taskData = {
        user: usernamet,
        assunto: assuntot,
        descricao: descricaot
    };

    const newTaskKey = push(child(ref(db), 'Tarefas')).key;
    
    const updates = {};
    updates['/Tarefas/' + usernamet + '/' + newTaskKey] = taskData;

    return update(ref(db), updates);

}

const urlParams = new URLSearchParams(window.location.search);
let username = urlParams.get('user');


var btAddTask = document.getElementById('addtarefa');
btAddTask.addEventListener("click", ()=> {
    let assuntoTask = document.getElementById('tarefa_tittle')
    let descricaoTask = document.getElementById('descricao_tarefa')

    const db = getDatabase();
    const dbRef = ref(db);

    get(child(dbRef, `Users/${username}`)).then((snapshot) => {
        if (snapshot.exists()) {
            newTask(username, assuntoTask.value, descricaoTask.value);
          
        } else {
          alert("Usuário não encontrado.");
          window.location.replace(`../html/login_index.html`)
        }
      }).catch((error) => {
        console.error(error);
  
      });

    
})


