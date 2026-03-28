# mysql-codespace-devcontainer

## Using codespace
To login into the database, use `mysql -u root -pmariadb -h 127.0.0.1`

Before making changes to DB, good to follow the below steps to check:

To confirm we got the correct product to update
SELECT * FROM products WHERE id = 3;

To confirm we want to make changes to the description
SELECT description FROM products WHERE id = 3;

To update after confirming
UPDATE products 
SET description = 'Coffee mug simple, no need complicate - big cup to hold your kopi, keep it warm, drink slowly slowly confirm shiok.' 
WHERE id = 3;