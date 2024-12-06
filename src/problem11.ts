function swap(x:any , y:any):any{
    let a: any = x
    x = y 
    y = a
    return [x , y]
}
let x = "hello";
let y = "world";
[x, y] = swap(x, y);
console.log(`x: ${x}, y: ${y}`);