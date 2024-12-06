type Color = {
    "Qora": number,
    "Jigarrang": number,
    "Qizil": number,
    "To'q sariq": number,
    "Sariq": number,
    "Yashil": number,
    "Ko'k": number,
    "Binafsha": number,
    "Kulrang": number,
    "Oq": number,
    [key: string]: number; 
}
function colorSum(arr: string[]):number {
    let color:Color = {
        "Qora": 0,
        "Jigarrang": 1,
        "Qizil": 2,
        "To'q sariq": 3,
        "Sariq": 4,
        "Yashil": 5,
        "Ko'k": 6,
        "Binafsha": 7,
        "Kulrang": 8,
        "Oq": 9,
    }
    let sum:number = 0
    for(let i of arr){
        sum += color[i]
    }    
    return sum
}

let sum:number = colorSum(["Qizil", "Sariq", "Ko'k", "Jigarrang", "Yashil"])
console.log(sum)