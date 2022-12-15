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