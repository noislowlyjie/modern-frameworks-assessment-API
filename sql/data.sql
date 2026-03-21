USE ecommerce;

INSERT INTO products (name, price, imageUrl, description) VALUES
('Arabica Coffee Beans', 24.99, 'https://picsum.photos/id/425/300/200', 'Arabica coffee beans more atas, taste smooth smooth, got fruity notes, not so bitter, very shiok.'),
('Robusta Coffee Beans', 24.99, 'https://picsum.photos/id/766/300/200', 'Robusta coffee beans more gao and bitter, strong kick, less atas, but wake you up fast fast, confirm shiok for kopi lovers.'),
('Kopi Cup', 19.99, 'https://picsum.photos/id/431/300/200', 'Coffee mug simple simple one—big cup to hold your kopi, keep it warm, drink slowly slowly also shiok lah.'),
('Local Honey', 49.99, 'https://picsum.photos/id/312/300/200', 'Local honey in kopi give natural sweetness, slightly floral, less jelak than sugar, make your kopi more smooth and shiok shiok.');

INSERT INTO marketing_preferences (id, preference) VALUES
(1, 'Email Marketing'),
(2, 'SMS Marketing');    
