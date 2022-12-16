// saleTime

let saleInterval = document.querySelector('.saleTime p');
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

let popup = document.querySelector('.popup');
 
if(window.scrollY > 1){
    popup.style.display = 'block';
} else {
    popup.style.display = 'none';
}
let heart2 = document.querySelector('.heart2');
let wish2 = document.querySelector('.wish-2');

wish2.onmouseover = () => {
    heart2.style.color = 'rgba(0, 0, 0, 0.6)';
}
wish2.onmouseout = () => {
    heart2.style.color = '#e7e7e7';
}