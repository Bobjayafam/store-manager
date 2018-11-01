CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  role VARCHAR NOT NULL 
);

INSERT INTO users (username, password, role) VALUES ('admin', '$2b$10$qWt./PGNYIbLBCpFuwLjBOGsNClVN.9YwoxA4Yosh9vnua.OINPQO', 'admin');