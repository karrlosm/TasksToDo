import {getDatabase, ref, get, child} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
    

var btnlogin = document.getElementById("loginbtn");

btnlogin.addEventListener("click", loginUser); 

function loginUser() {
    const db = getDatabase();
    const dbRef = ref(db);
        

    var name = document.getElementById("nameipt").value;
    var password = document.getElementById("passipt").value;
    
        
    get(child(dbRef, `Users/${name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            if(snapshot.val().userpassword === password) {
                alert("Login encontrado!");
                window.location.replace(`../html/home_index.html?user=${name}`)
            } else {
                alert("Senha incorreta.")
            }
          
        } else {
          alert("Usuário não encontrado.");
        }
      }).catch((error) => {
        console.error(error);
  
      });
}

