export interface IInitialState {
  users: IUser[];
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  skill: string;
  currentId: number;
}
