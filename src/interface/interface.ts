export enum Role {
  User = 'User',
  Admin = 'Admin',
  SupperAdmin = 'SupperAdmin',
}

export interface user_payload {
  id: number;
  sub: string;
  role: string;
}

export interface verifytoken {
  email: string;
  otp: string;
}

export interface forgetPass {
  oldPassword: string;
  newPassword: string;
}
