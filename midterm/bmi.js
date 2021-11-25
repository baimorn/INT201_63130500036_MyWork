const pound = 0.453592 
const inch = 0.0254 
    
function getBMI (poundtokg, inchtometer){  
    let kg = poundtokg * pound 
    let weight = inchtometer * inch
    return kg / Math.pow(weight,2)
}

console.log(getBMI(36.5,39)) //16.871807182141648
