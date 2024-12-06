type Car ={marka: string , model:string , yil:number, aktiv:boolean}
function getCarInfo(myCar:Car):string {
    return `${myCar.marka} ${myCar.model} , ${myCar.yil} yil ,Aktive: ${myCar.aktiv}`
}

const myCar: Car = {
    marka: "Toyota",
    model: "Corolla",
    yil: 2020,
    aktiv: true,
  };

  console.log(getCarInfo(myCar));