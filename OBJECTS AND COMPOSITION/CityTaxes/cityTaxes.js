function solve(name,population,treasury){
    const myObj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury+=Math.floor(this.population*this.taxRate);
        },
        applyGrowth(percentage){
            this.population+=this.population*(percentage/100)
        },
        applyRecession(percentage){
            this.treasury-=this.treasury*(percentage/100);
        },

    }

    return myObj
}

console.log(solve('Tortuga',
    7000,
    15000))