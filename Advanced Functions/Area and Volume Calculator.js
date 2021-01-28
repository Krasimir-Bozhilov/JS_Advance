function solve(area,vol,dataAsJSON){
    const figures=JSON.parse(dataAsJSON);
    const  result=[];

    for (const figure of figures) {
        const objArea=area.call(figure)
        const objVolume=vol.call(figure)
        const output={
            area:objArea,
            volume:objVolume
        }
        result.push(output)

    }
    return result



}
const example1 = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;
function area() {
    return this.x * this.y;
}
function vol() {
    return this.x* this.y *this.z;
};



solve(area,vol,example1)
