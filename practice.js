const formName = document.getElementById('name');
const formAdress = document.getElementById('email');
const formBtn = document.getElementById('register');
//formAdress.addEventListener("keyup",myName(formAdress));
const myfunc ={
    fcont: "",
    myForm(){
        alert("名前:"+formName.value+"\nEmail:"+formAdress.value);
        return;
    },
    myName(){
        if (formName.value==""||formAdress.value=="") {
            formBtn.disabled =true;
            return;
        }
        formBtn.disabled =false;
        return;
    }

};