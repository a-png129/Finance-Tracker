DROP TABLE users CASCADE;
DROP TABLE categories CASCADE;
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

-- simplified table until I get user auth working
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(120),
    password VARCHAR(120)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    transType VARCHAR(7) NOT NULL CHECK (transType IN ('Income', 'Expense')), 
    categoryTitle VARCHAR(50) NOT NULL,
    categoryColour VARCHAR(7) NOT NULL, -- hex code 
    UNIQUE(user_id, categoryTitle) -- no dup titles for one user
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    category_id INTEGER NOT NULL REFERENCES categories(id), -- food/rent/tuition... set default to 'unset'
    description TEXT, -- bigway/jan-rent/W1-tuition
    transDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- test user id:1
INSERT INTO users VALUES (1, 'test@example.com', 'password'); 

INSERT INTO categories (user_id, transType, categoryTitle, categoryColour)
VALUES (1, 'Expense', 'Unset', '#D3D3D3');
INSERT INTO categories (user_id, transType, categoryTitle, categoryColour)
VALUES (1, 'Expense', 'Rent', '#ED694E');
INSERT INTO categories (user_id, transType, categoryTitle, categoryColour)
VALUES (1, 'Expense', 'Food', '#EDC04E');
INSERT INTO categories (user_id, transType, categoryTitle, categoryColour)
VALUES (1, 'Expense', 'Transportation', '#6DD15E');
INSERT INTO categories (user_id, transType, categoryTitle, categoryColour)
VALUES (1, 'Income', 'Work', '#8F66CC');

INSERT INTO transactions (user_id, amount, category_id, description, transDate) 
VALUES (1, 10, '3', 'mcDonalds', '2025-08-09 22:30:00');
INSERT INTO transactions (user_id, amount, category_id, description, transDate) 
VALUES (1, 100, '5', 'mar 1 paycheque', '2025-08-09 22:31:00');
INSERT INTO transactions (user_id, amount, category_id, description, transDate) 
VALUES (1, 25, '3', 'bigway', '2025-08-09 22:32:00');
