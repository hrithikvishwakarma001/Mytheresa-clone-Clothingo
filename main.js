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
