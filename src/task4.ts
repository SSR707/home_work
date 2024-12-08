abstract class Database<T> {
  abstract connect(): void;
  abstract disconnect(): void;
  abstract create(user: T): void;
  abstract read(): Array<T>;
  abstract update(id: number, newData: T): void;
  abstract delete(id: number): void;
}
class MongoDB<T extends { id?: number }> extends Database<T> {
  private items: T[] = [];
  connect() {
    console.log("MongoDB: Connected databased");
  }
  disconnect() {
    console.log("MongoDB: disconnected database");
  }
  create(user: T): void {
    this.items.push({ id: this.items.length + 1, ...user });
  }
  read(): T[] {
    return this.items;
  }
  update(id: number, newData: T): void {
    let user_index: number = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      console.log("MongoDB: Bunday Id li user topilmadi");
      return;
    }
    this.items[user_index] = { ...this.items[user_index], ...newData };
    console.log("MongoDB: Malumot ozgartirildi");
    return;
  }
  delete(id: number): void {
    let user_index: number = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      console.log("MongoDB: Bunday Id li user topilmadi");
      return;
    }
    this.items.splice(user_index, 1);
    console.log("MongoDB: Ochirildi");
    return;
  }
}

class SQLDB<T extends { id?: number }> extends Database<T> {
  private items: T[] = [];
  connect() {
    console.log("SQLDB: Connected databased");
  }
  disconnect() {
    console.log("SQLDB: disconnected database");
  }
  create(user: T): void {
    this.items.push({ id: this.items.length + 1, ...user });
  }
  read(): T[] {
    return this.items;
  }
  update(id: number, newData: T): void {
    let user_index: number = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      console.log("SQLDB: Bunday Id li user topilmadi");
      return;
    }
    this.items[user_index] = { ...this.items[user_index], ...newData };
    console.log("SQLDB: Malumot ozgartirildi");
    return;
  }
  delete(id: number): void {
    let user_index: number = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      console.log("SQLDB: Bunday Id li user topilmadi");
      return;
    }
    this.items.splice(user_index, 1);
    console.log("SQLDB: Ochirildi");
    return;
  }
}
const mongoDb = new MongoDB<any>();
mongoDb.connect();
mongoDb.create({
  fullname: "Ali",
  age: 30,
  email: "ali@gmail.com",
  password: "123",
});
console.log(mongoDb.read());
mongoDb.update(1, { fullname: "Vali", age: 25 });
console.log(mongoDb.read());
mongoDb.delete(1);
console.log(mongoDb.read());
mongoDb.disconnect();

const sqlDb = new SQLDB<any>();
sqlDb.connect();
sqlDb.create({ name: "Hasan", age: 40 });
console.log(sqlDb.read());
sqlDb.update(1, { name: "Husan", age: 35 });
console.log(sqlDb.read());
sqlDb.delete(1);
console.log(sqlDb.read());
sqlDb.disconnect();
