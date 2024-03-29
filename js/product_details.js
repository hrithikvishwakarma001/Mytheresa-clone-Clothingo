
// slider

var splide = new Splide("#main-slider", {
    width: 600,
    height: 400,
    pagination: false,
    cover: true
  });
  
  // thumbnail
  
  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;
  
  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }
  
  // onclick
  
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go(index);
    });
  }
  
  splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];
  
    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }
  
      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });
  
  splide.mount();
  
  // accordion
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
  
    acc[i].addEventListener("click", function() {
  
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
  
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } 
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  
  
  // modal
  
  var modal = document.getElementById("myModal");
  
  // opens the modal
  var btnn = document.getElementById("myBtn");
  
  // closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btnn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  // append the data from the shop.html

  let getDetails = JSON.parse(localStorage.getItem("card_details"));
  console.log(getDetails);
  var cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];
  console.log(cartArr);
  var WishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
  console.log(WishlistArr);

  let image1 = document.querySelector(".image1");
  let image2 = document.querySelector(".image2");
  let image3 = document.querySelector(".image3");
  let image4 = document.querySelector(".image4");
  let image5 = document.querySelector(".image5");
  let image6 = document.querySelector(".image6");
  let image7 = document.querySelector(".image7");
  let image8 = document.querySelector(".image8");
  let bbrand = document.getElementById("bbrand");
  let ttitle = document.getElementById("ttitle");
  let ppprice = document.getElementById("pprice");
  let choose_size = document.getElementById("choose_size");
  let size1 = document.getElementById("size1");
  let size2 = document.getElementById("size2");
  let size3 = document.getElementById("size3");
  let size4 = document.getElementById("size4");
  let cart = document.querySelector(".button_cart");
  let wishlist = document.querySelector(".button_wishlist");

  const get_item=(data) => {

        // getting images
        let image10=document.createElement("img");
        image10.src=data.image;
        let image11=document.createElement("img");
        image11.src=data.image;
        let image12=document.createElement("img");
        image12.src=data.image;
        let image13=document.createElement("img");
        image13.src=data.image;
        let image14=document.createElement("img");
        image14.src=data.image;
        let image15=document.createElement("img");
        image15.src=data.image;
        let image16=document.createElement("img");
        image16.src=data.image;
        let image17=document.createElement("img");
        image17.src=data.image;
  
        // title 
        let product=document.createElement("p")
        product.innerText=data.product_name;

        // price
        let pprice=document.createElement("h5");
        pprice.innerText="€ "+data.price;

        // cart
        cart.addEventListener('click',function(){
          addToCart(data);
        })

        // wishlist
        wishlist.addEventListener('click',function(){
          addToWishlist(data);
        })

       
        image1.append(image10);
        image2.append(image11);
        image3.append(image12);
        image4.append(image13);
        image5.append(image14);
        image6.append(image15);
        image7.append(image16);
        image8.append(image17);

        ttitle.append(product);

        ppprice.append(pprice);

        // choose_size
        // choose_size.append(data.choose_size);
        size1.append(data.available_size);
        size2.append(data.available_size2);
        size3.append(data.available_size3);
        size4.append(data.available_size4);


}

get_item(getDetails);


// add to cart
function addToCart(data) {
  // console.log(data);
  data.quant=1;
  // console.log(data)
  cartArr.push(data);
  // alert(`${data.product_name} has been added to cart`);
  // console.log(cartArr);
  Swal.fire({
    title: 'Added to cart',
    text: data.product_name,
    imageUrl: data.image,
    imageWidth: 250,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
  localStorage.setItem("cartitems",JSON.stringify(cartArr));
}

// add to Wishlist

function addToWishlist(data) {
  // console.log(data);
  data.quantity=1;
  WishlistArr.push(data);
  // alert(`${data.product_name} has been added to Wishlist`);
  // "product_image href"
  console.log(`${data.image} has been added to Wishlist`)
  Swal.fire({
    title: 'Added to Wishlist',
    text: data.product_name,
    imageUrl: data.image,
    imageWidth: 250,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
  // console.log(WishlistArr);
  localStorage.setItem("wishlist",JSON.stringify(WishlistArr));
}

let button_cart2 = document.querySelector(".button_cart");
button_cart2.onmouseover=()=>{
   button_cart2.style.cursor="pointer";
}

let button_cart = document.querySelector("#goCart");
button_cart.onmouseover=()=>{
   button_cart.style.cursor="pointer";
}
button_cart.onclick=()=>{
  setTimeout(()=>{
    window.location.href="cart.html";
  },4000)
  setTimeout(() => {
    let timerInterval;
       Swal.fire({
           title: "Cart page redirecting...",
           html: "I will close in <b></b> milliseconds.",
           timer: 2000,
           timerProgressBar: true,
           didOpen: () => {
               Swal.showLoading();
               const b = Swal.getHtmlContainer().querySelector("b");
               timerInterval = setInterval(() => {
                   b.textContent = Swal.getTimerLeft();
               }, 100);
           },
           willClose: () => {
               clearInterval(timerInterval);
           },
       }).then((result) => {
           /* Read more about handling dismissals below */
           if (result.dismiss === Swal.DismissReason.timer) {
               console.log("I was closed by the timer");
           }
       });   
   }, 2000);
}


let wishList = document.querySelector(".button_wishlist");
  
wishList.onmouseover=()=>{
  wishList.style.cursor="pointer";
}
