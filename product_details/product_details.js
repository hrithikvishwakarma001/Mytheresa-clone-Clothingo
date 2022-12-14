
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