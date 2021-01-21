function extractText() {
    const liElements=[...document.getElementsByTagName('li')];
    const elentText =liElements.map(e=>e.textContent);
    document.getElementById('result').value=elentText.join('\n')

}