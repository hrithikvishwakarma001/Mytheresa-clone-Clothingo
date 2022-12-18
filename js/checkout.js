let lsdata=JSON.parse(localStorage.getItem("delivryadd"))||[]
let proceedbtn=document.querySelector("#proceedbtn")
let firstname=document.getElementById("firstn").value;
let lastname=document.getElementById("lastn").value;
let address=document.getElementById("add").value;
let pincide=document.getElementById("pincode").value;
let city=document.getElementById("city").value;
let number=document.getElementById("number").value
proceedbtn.addEventListener("click",()=>{
    window.location.href="payment.html"
    let obj={
        firstname,
        lastname,
        address,
        pincide,
        city,
        number
    }
    lsdata.push(obj)
    localStorage.setItem("delivryadd",JSON.stringify(lsdata))
})

window.onload = () => {
    document.body.style.opacity = 1;
    document.body.style.visibility = 'visible';
}