let arr=[
    {
        img:"https://img.mytheresa.com/240/240/90/jpeg/catalog/product/52/P00680925.jpg",
        title:"AMI PARIS",
        des:"Straight cotton gabardine chinos",
        size:"S",
        Item_no:"P00680925",
        price:143
    },
    {
        img:"https://img.mytheresa.com/240/240/90/jpeg/catalog/product/73/P00556519.jpg",
        title:"BALENCIAGA",
        des:"Speed 3.0 sneakers",
        size:"EU_ 40" ,
        Item_no:"P00556519",
        price:556
    }
]


// id="cartitems_wrapper

function div_maker(img,title,des,size,Item_no,price){
return`<div id="data_wrapper">
    <div id="firstchild">
        <div>
            <img id=cart_img src=${img} style="width:150px">
        </div>
        <div>
            <div><p class="font_unique">${title}</p></div>
            <div id="desc"><p >${des}</p></div>
            <div id="size"><span >Size:</span>${size}</div>
            <div id="item_no" ><span >Item No:</span>${Item_no}</div>
            <button id="removebtn"><span id="cross">X </span>Remove</button>
        </div>

    </div>

    <div id="secondchild">
        <div class="price"><span >€</span>${price}.00</div>
            <div>
                <button class="asbtn">+</button>
                <button class="asbtn">-</button>
            </div>
        <div class="price"><span >€</span>${price}.00</div>
    </div>

    </div>
    </div>`
}
let data_wrapper=document.getElementById("cartitems_wrapper")

function render(arr){
    let newarr= arr.map((arr) =>{
        return div_maker(arr.img,arr.title,arr.des,arr.size,arr.Item_no,arr.price)
    })
    data_wrapper.innerHTML=newarr.join(" ");
}

render(arr)
