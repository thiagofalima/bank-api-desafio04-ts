export interface IUser {
  name: string;
  email: string;
}

export const db = [
  {
    name: "Pedro",
    email: "pedro@email.com",
  },
];

export class UserService {
  db: IUser[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log("DB atualizado", this.db);
};

getAllUsers = () => {
    return db;
};

deleteUser = (name: string, email: string) => {
    const user = {
        name,
        email,
    };
    const index = this.db.indexOf(user)
    this.db.splice(index, 1);
    console.log("DB atualizado", this.db);
  };
}
