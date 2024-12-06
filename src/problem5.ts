function findMaxPositive(...arr:number[]):number{
    return arr.sort((a , b) =>a - b)[arr.length - 1] 
}
console.log(findMaxPositive(1, -2, 3, 4, -5));