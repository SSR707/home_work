function checkValue(value:string | number | boolean):string{
    return `Qiymat ${typeof value}: ${value}`
}
console.log(checkValue("Hello"));
console.log(checkValue(42)); 
console.log(checkValue(true));