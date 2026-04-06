const pool = require('../database');

// Fetch cart contents for a user
async function getCartContents(userId) {
  const [rows] = await pool.execute(
    `SELECT c.id, c.product_id, p.imageUrl, p.name, 
     CAST(price AS DOUBLE) AS price, c.quantity FROM cart_items c JOIN products p 
     ON c.product_id = p.id WHERE c.user_id = ?`,
    [userId]
  );
  return rows;
}



// Bulk update the cart contents
async function updateCart(userId, cartItems) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Clear existing cart items for the user
    await connection.execute('DELETE FROM cart_items WHERE user_id = ?', [userId]);

    // Insert each item in the new cart
    for (const item of cartItems) {
      const productId = item.product_id ?? item.productId;
      if (!productId || !item.quantity) {
        throw new Error('Each cart item must have a productId and quantity');
      }
      await connection.execute(
        'INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)',
        [userId, productId, item.quantity]
      );
    }

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  getCartContents,
  updateCart
};