function quickSort(arr:number[]):number[]{
    if(arr.length <= 1){
        return arr
    }

    let privot = arr[0]
    let leftArr:number[] = []
    let rightArr:number[] = []

    for(let i = 1 ; i < arr.length ;i++){
        if(arr[i] < privot){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr) , privot , ...quickSort(rightArr)]
}
const array = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 10000)
  );
  
const quicksortStart = performance.now();
const quicksortedArray = quickSort(array);
const quicksortEnd = performance.now();
console.log(`Quicksort ishlash vaqti: ${quicksortEnd - quicksortStart} ms`);
console.log(quicksortedArray)
