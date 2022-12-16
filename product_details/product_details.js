
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
  var btn = document.getElementById("myBtn");
  
  // closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
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
  // console.log(getDetails);

  let image1 = document.querySelector(".image1");

  function displayData(data) {
    // cards.innerHTML="";
   
    data.forEach((item)=>{
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
    
       
    //  let div=document.createElement("div");
    //  div.setAttribute("class","arrival")
    //   div.append(hr1,arrival,hr2,heart)
    //   div2.append(div,heart);
    //   div3.append(image,brand,title,price);
    //   div1.append(div2,div3)
    //   cards.append(div1);

     image1.append(image);

    })
    

 // let mapped_data = data.map((item) => {
 //   return ` 
 //           <div class="hello">
 //            <hr>
 //           <div>
 //            <span>${item.product_button}<span>
 //           </div>
 //           <hr>
 //           <div>
 //           <img src="${item.image}"
 //           </div>
 //           </div> 
 //  `
 // })
 // cards.innerHTML=mapped_data.join(" ")

}
displayData(getDetails)
