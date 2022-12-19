let lsdata=JSON.parse(localStorage.getItem("delivryadd"))||[]
let proceedbtn=document.querySelector("#proceedbtn")
let firstname=document.getElementById("firstn")
let lastname=document.getElementById("lastn");
let address=document.getElementById("add");
let pincide=document.getElementById("pincode");
let city=document.getElementById("city")
let number=document.getElementById("number")
proceedbtn.addEventListener("click",(e)=>{
  
    e.preventDefault()
    let obj={
        firstname:firstname.value,
        lastname:lastname.value,
        address:address.value,
        pincide:pincide.value,
        city:city.value,
        number:number.value
    }
    console.log(obj)
    lsdata.push(obj)
    localStorage.setItem("delivryadd",JSON.stringify(lsdata))
    setTimeout(()=>{
   window.location.href="payment.html"
    },500)
 
})

window.onload = () => {
    document.body.style.opacity = 1;
    document.body.style.visibility = 'visible';
}