

let cartitems=document.getElementById("cartitems_wrapper")
let data=JSON.parse(localStorage.getItem("cartitems"));

let finalsubtotal=document.getElementById("spansubtotal")
let grandtotal=document.getElementById("spangrandtotal")

let inputpromo=document.getElementById("inputpromo")
let promobtn=document.getElementById("promobtn")

let total=0;


function rendercartitems(data){

    let cartquantity=data.reduce((a,b) => {
        return a+b.quant;
      },0);
    
    localStorage.setItem("cartquantity",cartquantity);
    total=data.reduce((accu,item)=>{
        accu=accu+Number(item.price)*item.quant;
        return +accu.toFixed(2);
    },0)
    finalsubtotal.innerText=total;

    grandtotal.innerText=total;
    promobtn.addEventListener("click",function(){
        let coupon=inputpromo.value;
        if(coupon=="clothingo30" || coupon=="masai30"||coupon=="promo30"){
            let numval1=Number(total);
            let numval2=Number(30/100);
            let totalvalue=numval1-(numval1*numval2);
            grandtotal.innerText=totalvalue;
            inputpromo.value="";
        }
        else if(coupon=="clothingo60" || coupon=="masai60"||coupon=="promo60"){
            let numval1=Number(total);
            let numval2=Number(60/100);
            let totalvalue=numval1-(numval1*numval2);
            grandtotal.innerText=totalvalue.toFixed(2);
        }
    
    })


    cartitems.innerHTML="";
    data.forEach((elem,i) => {
        let data_wrapper=document.createElement("div");
        data_wrapper.setAttribute("id","data_wrapper");


        //first div


        let firstchild=document.createElement("div");
        firstchild.setAttribute("id","firstchild")

        let divfirst=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("id","cart_img");
        img.setAttribute("src",elem.image);
        img.style.width="130px";
        img.setAttribute("id","cart_img");

        divfirst.append(img);


        let divsecond=document.createElement("div");

        let one=document.createElement("div");
        let onep=document.createElement("p");
        onep.setAttribute("class","font_unique");
        onep.innerText=elem.product_name;
        one.append(onep);

        // let two=document.createElement("div");
        // let twop=document.createElement("p");
        // two.setAttribute("id","desc");
        // twop.innerText=elem.des;
        // two.append(twop);


        let three=document.createElement("div");
        let threep=document.createElement("span");
        threep.innerText=elem.available_size2;
        three.setAttribute("id","size");
        three.innerHTML="Size: "
        three.append(threep);


        let four=document.createElement("div");
        let fourp=document.createElement("span");

        four.innerText="Item_no: "

        four.setAttribute("id","item_no");
        fourp.innerText=`${Math.floor(Math.random()*100)}`;
        four.append(fourp);

        let firstbtn=document.createElement("button");
        firstbtn.innerText="X";
        firstbtn.addEventListener("click",function(){
            deletecartitem(data,i);
        })
        firstbtn.setAttribute("id","removebtn");
        let firstbtnspan=document.createElement("span");
        firstbtnspan.setAttribute("id","cross");
        firstbtnspan.innerText="Remove";
        firstbtn.append(firstbtnspan);



        divsecond.append(one,three,four,firstbtn);

        firstchild.append(divfirst,divsecond);

        //second div

        let secondchild=document.createElement("div");
        secondchild.setAttribute("id","secondchild")

        let onesec=document.createElement("div");
        onesec.setAttribute("class","price");
        onesec.innerText="₹";
        let onesecspan=document.createElement("span");
        onesecspan.innerText=elem.price;
        onesec.append(onesecspan);

        let secsec=document.createElement("div");
        secsec.setAttribute("class","price");
        secsec.innerText="₹";
        let secsecspan=document.createElement("span");
        let subtotal=elem.price*elem.quant;
        secsecspan.innerText=subtotal;
        secsec.append(secsecspan);

        let thirdsec=document.createElement("div");
        let ibt1=document.createElement("button");
        ibt1.setAttribute("class","asbtn");
        ibt1.innerText="+"

        ibt1.addEventListener("click",function(){
            data[i].quant++;
            localStorage.setItem("cartitems",JSON.stringify(data));
            rendercartitems(data);
        })

        let quantityspan=document.createElement("span");
        quantityspan.innerText=elem.quant;
        quantityspan.setAttribute("id","qs")
        let dbt2=document.createElement("button");
        dbt2.setAttribute("class","asbtn")
        dbt2.innerText="-";

        dbt2.addEventListener("click",function(){
            if(elem.quantity<=1){
                return;
            }
            data[i].quant--;
            localStorage.setItem("cartitems",JSON.stringify(data));
            rendercartitems(data);
        })

        thirdsec.append(ibt1,quantityspan,dbt2);

        secondchild.append(onesec,thirdsec,secsec);

        cartitems.append(data_wrapper);
        data_wrapper.append(firstchild,secondchild);
    }
)
};
rendercartitems(data)

function deletecartitem(data,i){
    data.splice(i,1);
    localStorage.setItem("cartitems",JSON.stringify(data));
    rendercartitems(data);
}

function proceed(){
    window.location.href="checkout.html"
}

function shopping(){
    window.location.href="shop.html"
}
window.onload = () => {
    document.body.style.opacity = 1;
    document.body.style.visibility = 'visible';

let checkoutbtn2 = document.getElementById("checkoutbtn2");
checkoutbtn2.onclick=()=>{
    location.href="checkout.html"
}

}
let checkoutbtn2 = document.getElementById("checkoutbtn2");
checkoutbtn2.onclick=()=>{
    location.href="checkout.html"
}
let buttons = document.querySelectorAll('#left div');
console.log(buttons)

// background-color: #f2f2f2;

buttons.forEach((x) => {
    x.onclick = () => {
        buttons.forEach((item) => {
            item.style.backgroundColor = 'white';
        })
        x.style.backgroundColor = '#f2f2f2';
        if(x.innerHTML==='MEN'){
            window.location.href='/html/men.html';
        }
        else if(x.innerHTML==='WOMEN'){
            window.location.href='/home.html';
        }
        else if(x.innerHTML==='KIDS'){
            window.location.href='/html/kids.html';
        }
        else if(x.innerHTML==='LIFE'){
            window.location.href='/html/life.html';
        }
    }
})

