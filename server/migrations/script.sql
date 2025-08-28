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

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    transType VARCHAR(7) NOT NULL,
    -- income/expense
    title VARCHAR(50) UNIQUE NOT NULL,
    colour VARCHAR(7) NOT NULL -- hex code colour
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL,
    transType VARCHAR(7) NOT NULL, 
    -- income/expense
    category_id INT NOT NULL DEFAULT (
        SELECT id FROM categories WHERE name='Unset'
    ),
    -- food/rent/tuition... set default to 'other'
    description TEXT,
    -- bigway/jan-rent/W1-tuition
    transDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    FOREIGN KEY category_id REFERENCES categories(id) ON DELETE SET DEFAULT
);

-- test user id:1
INSERT INTO users VALUES (1, 'test@example.com', 'password'); 

INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Unset', '#D3D3D3');
INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Rent', '#ED694E');
INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Food', '#EDC04E');
INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Transportation', '#6DD15E');
INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Entertainment', '#54B8E3');
INSERT INTO categories (transType, title, colour)
VALUES ('Expense', 'Misc', '#8F66CC');
INSERT INTO categories (transType, title, colour)
VALUES ('Income', 'Work', '#8F66CC');

INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 10, 'expense', '3', 'mcDonalds', '2025-08-09 22:30:00');
INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 100, 'income', '7', 'mar 1 paycheque', '2025-08-09 22:31:00');
INSERT INTO transactions (user_id, amount, transType, category, description, transDate) 
VALUES (1, 25, 'expense', '3', 'bigway', '2025-08-09 22:32:00');
