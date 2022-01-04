import { getDatabase, ref, onValue, remove} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const urlParams = new URLSearchParams(window.location.search);
let username = urlParams.get('user');

const db = getDatabase();
const userref = ref(db, 'Users/' + username);
const taskref = ref(db, 'Tarefas/' + username);

var btnDelete = document.getElementById("deleteuser")
btnDelete.addEventListener("click", () => {
    try {
        remove(taskref)
        remove(userref)
        alert("Usuário "+username+" excluído.")
        window.location.replace(`../html/register_index.html`)
    } catch (error) {
        alert("Algo deu errado: "+ error)
    }
})

