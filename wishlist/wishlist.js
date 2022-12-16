
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);
var WishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log(WishlistArr);
let cards = document.querySelector(".cards");
function displayData(WishlistArr) {

    document.querySelector(".cards").innerHTML="";

    WishlistArr.map(function (item,index,array){

        let div1=document.createElement("div");
        let div2=document.createElement("div");
        div2.setAttribute("class","top")
        let hr1=document.createElement("hr");
        let hr2=document.createElement("hr");
        let arrival=document.createElement("span");
        arrival.innerText=item.product_button;
         
        let div3=document.createElement("div");
        div3.setAttribute("class","bottom")
        let image=document.createElement("img");
        image.src=item.image;
        image.addEventListener("click",()=>{
        itemDetails(item);
           
        })
  
        let brand=document.createElement("span")
        brand.innerText="GIVENCHY";
        let title=document.createElement("p")
        title.innerText=item.product_name;
        let price=document.createElement("h5");
        price.innerText=item.price;
        let heart=document.createElement("p");
        heart.setAttribute("class","fav-symbol")
        heart.innerHTML="&#9829;"
       
          
        let div=document.createElement("div");
        div.setAttribute("class","arrival")
         div.append(hr1,arrival,hr2,heart)
         div2.append(div,heart);
         div3.append(image,brand,title,price);
         div1.append(div2,div3);
         cards.append(div1);
    })
}

displayData(WishlistArr);