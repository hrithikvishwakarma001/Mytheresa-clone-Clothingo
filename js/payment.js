window.onload=()=>{
    document.body.style.opacity=1;
    document.body.style.visibility="visible";
    
}

let cart = document.querySelector("#card");

let paypal = document.querySelector("#paypal");

let details = document.querySelector("#details");

let paypal_btn = document.querySelector("#paypal_btn");

let checkout = document.querySelector("#checkout");

cart.addEventListener('click',function(){
    // paypal.innerHTML="";
    paypal_btn.innerHTML=""; 
    details.innerHTML=
    `<form>
    <div class="icons">
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-cc-amex"></i>
        <i class="fa-brands fa-cc-jcb"></i>
        <i class="fa-brands fa-cc-discover"></i>
        <i class="fa-brands fa-cc-amazon-pay"></i>
    </div>
    <p class="ptag" ><i class="fa-solid fa-user"></i> Name of Card  *</p>
    <div class="inputdiv">
        <!-- <i class="fa-solid fa-user"></i> -->
        <input class="input_tag" type="text" placeholder="Enter card holdername" required/>
    </div>

    <p class="ptag" ><i class="fa-solid fa-credit-card"></i> Credit Card Number  *</p>
    <div class="inputdiv">
        <!-- <i class="fa-solid fa-credit-card"></i> -->
        <input class="input_tag" type="number" placeholder="1111 2222 3333 4444" required/>
    </div>

    <div id="csv">
        <div>
            <p class="ptag" >Expiration date  *</p>
            <div class="inputdiv">
                <input class="input_tags" type="text" placeholder="MM / YY" required/>
            </div>
        </div>
        <div>
            <p class="ptag" >CVC / CVV  *</p>
            <div class="inputdiv">
                <input class="input_tags" type="number" placeholder="123" required/>
            </div>
        </div>

        <!-- <p class="ptag" ><u>What is this ?</u></p> -->
        
    </div>

    <button id="checkout">PROCEED TO CHECKOUT</button>
</form>`

})

paypal.addEventListener('click',function(){
    details.innerHTML="";
    paypal_btn.innerHTML=
    `<button id="checkout">PROCEED TO CHECKOUT</button>`
})

checkout.onclick=()=>{
    location.href="thankyou.html"
}