function ClassDc(constructor: Function) {
    console.log(`ClassDc: ${constructor.name}`);
  }
  
  @ClassDc
  class Example {
    property: string = "example";
  }
  