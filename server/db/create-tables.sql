CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  role VARCHAR NOT NULL 
);

INSERT INTO users (username, password, role) VALUES ('admin', '$2b$10$qWt./PGNYIbLBCpFuwLjBOGsNClVN.9YwoxA4Yosh9vnua.OINPQO', 'admin');
INSERT INTO users (username, password, role) VALUES ('ronaldo', '$2b$10$IpVpckz6enSTw8/sunTqpOLLsulS/fJiPMrISCwQx3cM92bOeDnD6', 'attendant');

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price FLOAT NOT NULL,
  quantity SMALLINT NOT NULL,
  description TEXT NOT NULL,
  imgUrl TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, quantity, description, imgUrl) VALUES ('Gionee M5 mini', 45000, 10, '2GB RAM, 32GB STORAGE, 13MP', 'https://cdn2.gsmarena.com/vv/bigpic/gionee-marathon-m5-new.jpg');

CREATE TABLE IF NOT EXISTS sales (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  soldItems JSONB NOT NULL,
  price FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(userId) REFERENCES users(id)
);

INSERT INTO sales (userId, soldItems, price) VALUES (2, '[{"productId": 1, "name": "Gionee M5 mini", "price": "45000", "quantity": 2}]', 90000);