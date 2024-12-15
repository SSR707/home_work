import { Role } from "src/interface/interface";

export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role:Role
}
