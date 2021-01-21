function solve(ref, match, replacer){
    const macher=new RegExp(match,'g');
    const result = ref.textContent.replace(macher,replacer);
    ref.textContent=result;
}