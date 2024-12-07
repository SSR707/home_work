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

function mergeSort(array:number[]):number[] {
    if (array.length <= 1) {
        return array;
    }
    const index:number = Math.floor(array.length / 2);

    const leftArray = array.slice(0, index);
    const rightArray = array.slice(index);

    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);

    return merge(left, right);
}
function merge(left:number[] , right: number[]):number[] {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}
const array = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 10000)
  );
  
const quicksortStart = performance.now();
const quicksortedArray = quickSort(array);
const quicksortEnd = performance.now();
console.log(`Quicksort ishlash vaqti: ${quicksortEnd - quicksortStart} ms`);

const mergesortStart = performance.now();
const mergesortedArray = mergeSort(array);
const mergesortEnd = performance.now();
console.log(`Mergesort ishlash vaqti: ${mergesortEnd - mergesortStart} ms`);
