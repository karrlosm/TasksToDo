import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function registerUserData(name, email, password) {
  const db = getDatabase();
  set(ref(db, 'Users/' + name), {
    username: name,
    useremail: email,
    userpassword: password
  });
}

var btnregister = document.getElementById("registerbtn");
btnregister.addEventListener("click", ()=>{
    
    var name = document.getElementById("nameipt").value;
    var email = document.getElementById("emailipt").value;
    var password = document.getElementById("passipt").value;
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Users/${name}`)).then((snapshot) => {
      if (snapshot.exists()) {
        alert("O usuário " + name +" já existe.")
      } else {
        registerUserData(name, email, password);
        alert("Novo usuário cadastrado.")
      }
    }).catch((error) => {
      console.error(error);

    });
    

    

} )

