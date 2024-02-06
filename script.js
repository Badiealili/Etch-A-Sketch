// GLOBAL
let gridSize = 64;
let color = "#000000"

// 
let frag = new DocumentFragment();
for(i=0; i<gridSize**2; i++){
    let div = document.createElement('div');
    div.classList.add('grid-square');
    div.style.width = 480 / gridSize + 'px';
    div.style.height = 480 / gridSize + 'px';
    frag.append(div);
}
grid.append(frag);

grid.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    if(!event.target.classList.contains('grid-square'))
        return;

    if(event.buttons !== 1)
        return;

    console.log(event.buttons)
    event.target.style.backgroundColor = color;
})

grid.addEventListener('mousedown', (event)=>{
    if(!event.target.classList.contains('grid-square'))
        return;
    event.preventDefault();
})

colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('change', (event)=>{
    color = event.target.value;
})