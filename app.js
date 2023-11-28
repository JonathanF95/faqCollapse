const icons = document.querySelectorAll('button');

// for(let i = 0; i < icon.length; i++){
//     icon[i].addEventListener('click', () =>{
//         const parent = icon[i].parentElement;
//         parent.classList.toggle('active');
//     })
// }

icons.forEach( icon => {
    icon.addEventListener('click', () =>{
        icon.parentElement.classList.toggle('active');
    })
})
