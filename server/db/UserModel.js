const UserModel = {
  createTable: `
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    role VARCHAR NOT NULL 
  );`,
};

export default UserModel;
