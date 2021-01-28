function solve(words){
    const divEl=document.createElement('div');
    const pEl=document.createElement('p');
    divEl.appendChild(pEl);
    pEl.style.display='none';
    divEl.addEventListener('click',(ev)=>{
        ev.target.querySelector('p').style.display='';
    })
    document.getElementById('content').appendChild(divEl)
}