let n = 16;
let frag = new DocumentFragment();
for(i=0; i<n*n; i++){
    let div = document.createElement('div');
    div.classList.add('grid-square');
    frag.append(div);
}
grid.append(frag);