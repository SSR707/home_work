function UpperCase(target: any, propertyKey: string) {
  let value: string;
  const setter = (newValue: string) => {
    value = newValue.toUpperCase();
  };

  Object.defineProperty(target, propertyKey, { set: setter });
}

class Example3 {
  @UpperCase
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const ex = new Example3("Salom");
console.log(ex.name);
