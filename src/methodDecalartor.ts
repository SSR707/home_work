function Log(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    return method.apply(this, args);
  };
}

class Example2 {
  @Log
  sayHello(name: string) {
    console.log(`Salom, ${name}`);
  }
}

new Example2().sayHello("Dunyo");
