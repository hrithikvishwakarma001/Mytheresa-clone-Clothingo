let hiddenDiv = document.querySelectorAll('.popup');
let title = document.querySelectorAll('#title ul li');
console.log(title)
for (let i = 0; i < hiddenDiv.length; i++) {
    hiddenDiv[i].style.display = 'none';
    hiddenDiv[i].onmouseover = () => {
        hiddenDiv[i].style.display = 'block';
    }
    hiddenDiv[i].onmouseout = () => {
        hiddenDiv[i].style.display = 'none';
    }
    
}
for(let i=0;i<title.length;i++){
    title[i].onmouseover = ()=>{
      title[i].style.cursor = 'pointer';
        hiddenDiv[i].style.display = 'block';
    }
    title[i].onmouseout =()=>{
        hiddenDiv[i].style.display = 'none';
    }
}

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
    hind.style.display = 'block';
}
li[1].onmouseout = () => {
    hind.style.display = 'none';
}
hind.onmouseover = () => {
    hind.style.display = 'block';
}
hind.onmouseout = () => {
    hind.style.display = 'none';
}

let closeBtn = document.querySelector('#account-popup .close');
closeBtn.onclick = () => {
    hind.style.display = 'none';
}
closeBtn.onmouseover = () => {
    closeBtn.style.cursor = 'pointer';
}