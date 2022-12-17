let hiddenDiv = document.querySelectorAll('.popup');
let title = document.querySelectorAll('#title ul li');

console.log(hiddenDiv[0])
// console.log(title[0])
for (let i = 0; i < hiddenDiv.length; i++) {
    hiddenDiv[i].onmouseover = () => {
        hiddenDiv[i].style.opacity = 1;
        hiddenDiv[i].style.visibility = 'visible';
    }
    hiddenDiv[i].onmouseout = () => {
        hiddenDiv[i].style.opacity = 0;
        hiddenDiv[i].style.visibility = 'hidden';
    }

}

for(let i=0;i<title.length;i++){
   title[i].style.cursor = 'pointer';

    title[i].onmouseover = ()=>{
      if(hiddenDiv[i].style.opacity == 0){
        hiddenDiv[i].style.opacity = 1;
        hiddenDiv[i].style.visibility = 'visible';
      }
    }
    title[i].onmouseout =()=>{
        hiddenDiv[i].style.opacity = 0;
        hiddenDiv[i].style.visibility = 'hidden';
    }
}

// ----------------------------------------------------------------

let heart = document.querySelector('.ri-heart-3-line');
let li = document.querySelectorAll('#right li');
li[2].onmouseover = () => {
    heart.style.color = 'rgba(0, 0, 0, 0.6)';
}
li[2].onmouseout = () => {
    heart.style.color = '#e7e7e7';
}
let hind = document.querySelector('#account-popup');
li[1].onmouseover = () => {
    hind.style.opacity = 1;
    hind.style.visibility = 'visible';
}
li[1].onmouseout = () => {
    hind.style.opacity = 0;
    hind.style.visibility = 'hidden';
}
hind.onmouseover = () => {
    hind.style.opacity = 1;
    hind.style.visibility = 'visible';
}
hind.onmouseout = () => {
    hind.style.opacity = 0;
    hind.style.visibility = 'hidden';
}

let closeBtn = document.querySelector('#account-popup .close');
closeBtn.onclick = () => {
    hind.style.opacity = 0;
    hind.style.visibility = 'hidden';
}
closeBtn.onmouseover = () => {
    closeBtn.style.cursor = 'pointer';
}


// -------------------------------------------------------------


let contact = document.querySelector('#contact');
let details = document.querySelector('.details');
contact.onmouseover = () => {
    details.style.opacity = 1;
    details.style.visibility = 'visible';
}
contact.onmouseout = () => {
    details.style.opacity = 0;
    details.style.visibility = 'hidden';
}
details.onmouseover = () => {
    details.style.opacity = 1;
    details.style.visibility = 'visible';
}
details.onmouseout = () => {
    details.style.opacity = 0;
    details.style.visibility = 'hidden';
}

let closeContact = document.querySelector('.close-contact');
closeContact.onclick = () => {
    details.style.opacity = 0;
    details.style.visibility = 'hidden';
}


// ---------------------------------------------------------------