let user={};

function onLoadPage(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        window.location.href="profile.html";
    }
}

onLoadPage()


function submitForm(event){
    event.preventDefault();
    let form=document.getElementById("signup-form");
    let msg=document.getElementById("message")
    console.log()
    if(form.name.value!=='' && form.email.value!=='' && form.password.value!=='' && form['confirm-password'].value!=='' && form.password.value==form['confirm-password'].value){
        msg.innerText="Sucessfully Signed Up!";
        msg.style.color="green";

        user.name=form.name.value;
        user.email=form.email.value;
        user.password=form.password.value;
        user.accessToken=generateAccessToken();

        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "profile.html";
        }, 2000);

    }else if(form.password.value!=='' && form['confirm-password'].value!=='' && form.password.value!==form['confirm-password'].value){
        msg.innerText="Password do not match!"
        msg.style.color="red";
    }else{
        msg.innerText="Error : All fields are mandatory"
        msg.style.color="red";
    }
}
function generateAccessToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 16; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

function redirect(){
    if(window.location.pathname=="index.html"){
        window.location.href="profile.html"
    }else{
        window.location.href="index.html"
    }
}