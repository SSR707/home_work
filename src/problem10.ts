function generateAcronym(str:string):string {
    let st:string =''
    let rpStr:string = str.replace(/-/g, ' ').replace(/ /g, ',');
    let arr: string[] =rpStr.split(',');
    for(let i of arr){
        st += i[0]
    }
    return st
}
let str:string = generateAcronym('Thank George Its Friday!')
console.log(str)