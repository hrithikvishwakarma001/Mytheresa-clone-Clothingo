let gotoregisterpage=document.getElementById("gotoregisterpage");
gotoregisterpage.addEventListener("click",function(){
    window.location.href="/html/register.html";
})



// console.log(gotoregisterpage)
let signin_email=document.querySelector("#email");
let signin_pwd=document.querySelector("#pwd");
let formData=JSON.parse(localStorage.getItem("signup_data"));


function loginpage(){
    let email=signin_email.value,
        pwd=signin_pwd.value;

        let exist=formData.length && 
        formData.some(data =>
        data.email.toLowerCase()==email.toLowerCase() &&
        data.pwd.toLowerCase()==pwd.toLowerCase()
        );

        if(!exist){
            alert("incorrect passoword")
        }
        else{
            alert("login successfull");
            login_failed_div.innerHTML=null;
            signin_email.reset();
            signin_pwd.reset();
            window.location.href="/html/user.html"
        }
}
function gotohomepage(){
    window.location.href="home.html";
}