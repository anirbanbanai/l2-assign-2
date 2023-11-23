

export type FullName= {
    firstName: string,
    lastName: string
}

export type Adress = {
    street: string,
    city: string,
    country: string
}


export type UsersInterface = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies?: ["swiming", "coding"];
  adress: Adress;
};
