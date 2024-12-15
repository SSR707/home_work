export interface user_login {
  email: string;
  password: string;
}

export interface user_payload {
  id: string;
  sub: string;
}

export enum Role {
  USER ='User',
  ADMIN = 'Admin',
  SuperAdmin = 'superAdmin'
}