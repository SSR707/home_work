abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("car is starting");
  }
  stop(): void {
    console.log("car is stoping");
  }
}

class MotorCycle extends Vehicle {
  start(): void {
    console.log("MotorCycle is starting");
  }
  stop(): void {
    console.log("MotorCycle is stoping");
  }
}
const car = new Car();
car.start();
car.stop();

const matorcycle = new MotorCycle();
matorcycle.start();
matorcycle.stop();
