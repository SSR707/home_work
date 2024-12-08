interface Shape {
  accountArea(): number;
}

class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  accountArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  private width: number;
  private heigth: number;

  constructor(width: number, heigth: number) {
    this.width = width;
    this.heigth = heigth;
  }
  accountArea(): number {
    return this.width * this.heigth;
  }
}

const circle: Shape = new Circle(7);
console.log("Circle area:", circle.accountArea());

const rectangle: Shape = new Rectangle(12, 5);
console.log("Rectangle area:", rectangle.accountArea());
