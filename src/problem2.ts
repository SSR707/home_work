function findCommonElements(arr1:number[] , arr2:number[]):number[]{
    let ar = arr1.filter((value) => arr2.includes(value))
    return ar
}
const array1: number[] =  [1, 2, 3, 4, 5];
const array2: number[] = [4, 5, 6, 7, 8];

console.log(findCommonElements(array1, array2));