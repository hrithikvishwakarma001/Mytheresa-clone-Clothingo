// saleTime

let cart_quantity=localStorage.getItem("cartquantity");
console.log(cart_quantity)

let count=document.querySelector("#shoppingBagIcon > span.count.icon.icon-cart");
count.innerText=cart_quantity;

count.onclick=()=>{
    window.location.href="/html/cart.html"
}
let saleInterval = document.querySelector('.saleTime p');
console.log(saleInterval)
let a = 'Enjoy free shipping for a short time only';
let b = 'Last day: Extra 10% off selected sale';
setInterval(()=>{
    if (saleInterval.innerHTML == a) {
        saleInterval.innerHTML = b;
    } else {
        saleInterval.innerHTML = a;
    }
}, 5000);


let stickyNav = document.querySelector('.stick');
let shoppingBagIcon = document.querySelector('#shoppingBagIcon');
let saleTime = document.querySelector('.saleTime');
let label = document.querySelector('.label');

let stickyNavTop = stickyNav.offsetTop;
function stickyNavFunc() {
    if (window.pageYOffset >= stickyNavTop) {
        label.style.display = 'none';
        stickyNav.classList.add('sticky');
        saleTime.classList.add('sticky3');
        shoppingBagIcon.classList.add('sticky2');

    } else {
        label.style.display = 'inline-block';
        shoppingBagIcon.classList.remove('sticky2');
        stickyNav.classList.remove('sticky');
        saleTime.classList.remove('sticky3');
    }
}
window.addEventListener('scroll', stickyNavFunc);

let heart2 = document.querySelector('.heart2');
let wish2 = document.querySelector('.wish-2');

wish2.onmouseover = () => {
    heart2.style.color = 'rgba(0, 0, 0, 0.6)';
}
wish2.onmouseout = () => {
    heart2.style.color = '#e7e7e7';
}

// --------------------------------------------------

let scrolltop = document.querySelector('#scrolltop');
scrolltop.style.opacity = 0;

scrolltop.onclick = () => {
    window.scrollTo(0, 0);
}
window.onscroll = () => {
    if (window.scrollY>500) {
        scrolltop.style.opacity = 1;
    } else {
        scrolltop.style.opacity = 0;
    }
}

// ----------------LINK----BUTTONS------------------------------------

let butto= document.querySelectorAll('#left div');
// console.log(buttons)

// background-color: #f2f2f2;

butto.forEach((x) => {
    x.onclick = () => {
        butto.forEach((item) => {
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

let btn = document.querySelector('.button-wrapper');

btn.onclick = () => {
    window.location.href='/html/shop.html';
}

// smooth loading of the page when reloading the page or going to another page from the same website  

window.onload = () => {
    document.body.style.opacity = 1;
    document.body.style.visibility = 'visible';
}

let logo = document.querySelector('#logo > div > img');
logo.onclick = () => {
    window.location.href='/home.html';
}
logo.onmouseover = () => {
    logo.style.cursor = 'pointer';
}
let poster = document.querySelector('.salePoster');
poster.onclick = () => {
    window.location.href='/html/shop.html';
}
poster.onmouseover = () => {
    poster.style.cursor = 'pointer';
}



// ---------------------------------------------------------------------------

let wish = document.querySelector('.wish');

wish.onclick=()=>{
    window.location.href='/html/wishlist.html';
}