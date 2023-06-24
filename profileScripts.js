
function onLoadPage(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        displayDetails();
    }else{
        window.location.href="index.html";
    }

}

onLoadPage()

function displayDetails(){
    const user = JSON.parse(localStorage.getItem("user"));
    let Name=document.getElementById("name");
    let Email=document.getElementById("email");
    let Password=document.getElementById("password");
    if(user){
        Name.innerHTML=`Full Name: ${user.name}`;
        Email.innerHTML=`Email: ${user.email}`;
        Password.innerHTML=`Password: ${user.password}`
    }
}

function clearState(){
    localStorage.removeItem("user");
    window.location.href="index.html";
}

function redirect(){
    if(window.location.pathname=="index.html"){
        window.location.href="profile.html"
    }else{
        window.location.href="index.html"
    }
}