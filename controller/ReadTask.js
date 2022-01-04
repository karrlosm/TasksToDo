import { getDatabase, ref, onValue, remove} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const urlParams = new URLSearchParams(window.location.search);
let username = urlParams.get('user');
const db = getDatabase();
const taskref = ref(db, 'Tarefas/' + username);

onValue(taskref, (snapshot) => {
  const data = snapshot.val();
  removeHTML();  
  for (var i in data) {  
    putElements('assunto'+i,data[i].assunto,'desc'+i, data[i].descricao, i)

  }
  checkListener();
});

function putElements(idassunto, assunto, iddescricao, descricao, idbutton){
    let conteiner = document.getElementById("readtasks") 
    let html = returnTheHtml(idassunto, iddescricao, idbutton);
    conteiner.innerHTML += html;

    let assuntolbl = document.getElementById(idassunto);
    assuntolbl.innerText = assunto;

    let descricaop = document.getElementById(iddescricao);
    descricaop.innerText = descricao;
 
}


function returnTheHtml(assuntoid, descricaoid, buttonid){
 return `
    <div class="task">
                <div class="assunto_task">
                    <label id="${assuntoid}" class="assunto_label"></label>
                </div>
                <div class="descricao_task">
                    <p id="${descricaoid}">

                    </p>
                   
                </div>
                <div class="div_check">
                    <button id="${buttonid}" class="check_btn">Concluir</button>
                </div>
    </div>
 `
}

function removeHTML() {
  let conteiner = document.getElementById("readtasks") 
  conteiner.innerHTML = ``;
}


function checkListener() {
  const urlParams = new URLSearchParams(window.location.search);
  let username = urlParams.get('user');
  let check = document.getElementsByClassName("check_btn");

  for (let i = 0; i < check.length; i++) {
      const btn = check[i];
      btn.addEventListener('click', () => {
        const taskref = ref(db, 'Tarefas/' + username + '/'+btn.id);
        remove(taskref);
      });    
  }
}
