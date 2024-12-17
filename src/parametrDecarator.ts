function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(parameterIndex , propertyKey);
  }
  
  class Example4 {
    greet(@LogParameter message: string) {
      console.log(`Message: ${message}`);
    }
  }
  
  new Example4().greet("Hello!");
  