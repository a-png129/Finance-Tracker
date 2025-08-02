DROP TABLE users CASCADE;
DROP TABLE accounts;
DROP TABLE transactions;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(120) UNIQUE NOT NULL,
--     firstName VARCHAR(50) NOT NULL,
--     lastName VARCHAR(50), 
--     password TEXT,
--     country TEXT,
--     currency VARCHAR(5) NOT NULL DEFAULT 'CAD',
--     createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(120),
    password VARCHAR(120)
);

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    accountName VARCHAR(50) NOT NULL,
    accountNumber VARCHAR(50) NOT NULL,
    accountBalance MONEY NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE transactions (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER NOT NULL REFERENCES users(id),
--     amount MONEY NOT NULL,
--     type VARCHAR(10) NOT NULL DEFAULT 'income',
--     category VARCHAR(50) NOT NULL,
--     description TEXT,
--     transactionDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    amount INTEGER,
    type VARCHAR(10),
    category VARCHAR(50),
    description VARCHAR(50),
    transactionDate INTEGER
);

-- test user id:1
INSERT INTO users VALUES (1, 'test@example.com', 'password'); 