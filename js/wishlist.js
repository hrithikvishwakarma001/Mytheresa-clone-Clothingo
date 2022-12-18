
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);
var WishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log(WishlistArr);

document.getElementById("number").innerText=`${WishlistArr.length} Item(s)`

function displayData(WishlistArr) {

    document.querySelector(".cards").innerHTML="";

    WishlistArr.map(function (elem,index,array){

        var div = document.createElement("div");
        div.setAttribute("id","wish");

        var img = document.createElement("img");
        img.setAttribute("src",elem.image);
        img.setAttribute("class","photo");

        var brand = document.createElement("p");
        brand.innerText = "GIVENCHY";
        brand.setAttribute("class","brand");

        var Title = document.createElement("p");
        Title.innerText = elem.product_name;
        Title.setAttribute("class","title");

        var price = document.createElement("p");
        price.innerText ="€ "+ elem.price;
        price.setAttribute("class","price");

        var size = document.createElement("p");
        size.innerText = elem.available_size;
        size.setAttribute('class','size');

        var itemno = document.createElement("p");
        itemno.innerText = "item no. P00482348";
        itemno.setAttribute("class","title");

        let btn = document.createElement("button");
        btn.innerText="MOVE TO BAG";
        btn.setAttribute("id","btn");

        btn.addEventListener("click", function () {
            addToCart(elem);
        });

        var Remove = document.createElement("p");
        Remove.setAttribute("class","Remove");
        Remove.innerText="REMOVE";

        Remove.addEventListener("click",function() {
            deleteItem(index);
        });

        div.append(img,brand,Title,price,size,itemno,btn,Remove);

        document.querySelector(".cards").append(div);
    })
}

displayData(WishlistArr);

function deleteItem(index){
    WishlistArr.splice(index, 1);
    localStorage.setItem("wishlist",JSON.stringify(WishlistArr));
    displayData(WishlistArr);
}

function addToCart(data) {
    data.quantity=1;
    cartArr.push(data);
    alert(`${data.product_name} has been added to cart`);
    localStorage.setItem("cart",JSON.stringify(cartArr));
  }