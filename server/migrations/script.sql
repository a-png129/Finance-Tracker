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

-- CREATE TABLE transactions (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER NOT NULL REFERENCES users(id),
--     amount DECIMAL(19, 4) NOT NULL,
--     transType VARCHAR(7) NOT NULL, 
--     -- income/expense
--     category VARCHAR(50) NOT NULL,
--     -- food/rent/tuition...
--     description TEXT,
--     -- bigway/jan-rent/W1-tuition
--     transDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
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

INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 10, 'expense', 'food', 'mcDonalds', '2025-08-09 22:30:00');
INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 100, 'income', 'pne', 'mar 1 paycheque', '2025-08-09 22:31:00');
INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 25, 'expense', 'food', 'bigway', '2025-08-09 22:32:00');
