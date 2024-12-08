interface usr {
  id?: number;
  name: string;
  age: number;
  email: string;
  password: string;
}
interface userr {
  id?: number;
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

class Users {
  private user_list: usr[] = [];

  create(user: usr): void {
    this.user_list.push({ id: this.user_list.length + 1, ...user });
  }
  read(): void {
    console.log(this.user_list);
  }
  update(id: number, newData: userr): string {
    let user_index: number = -1;
    for (let i = 0; i < this.user_list.length; i++) {
      if (this.user_list[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      return "Malumot topilmadi";
    }
    this.user_list[user_index] = { ...this.user_list[user_index], ...newData };
    return "Ok";
  }
  delete(id: number): string {
    let user_index: number = -1;
    for (let i = 0; i < this.user_list.length; i++) {
      if (this.user_list[i].id === id) {
        user_index = i;
      }
    }
    if (user_index === -1) {
      return "Malumot topilmadi";
    }
    this.user_list.splice(user_index, 1);
    return "Ok";
  }
}

const users = new Users();
users.create({
  name: "John Doe",
  age: 21,
  email: "john@example.com",
  password: "123",
});

console.log(users.read());

users.delete(1);
users.read();
