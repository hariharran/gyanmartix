const form = document.querySelector('#form')

form.addEventListener("submit",(e)=>{
    
    if(!checks()){
        e.preventDefault();
    }
    
})

function checks(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("default1");
    if(email == "hariharran17@gmail.com" && password == "hari@7936"){
        window.location.assign("dashbordpage.html");
        error.textContent="";
        return false;
    }
    else{
        error.textContent="Invalid crendiential";
        return false;
    }

}
