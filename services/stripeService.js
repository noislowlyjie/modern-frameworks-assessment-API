// Include stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function createLineItems(orderItems) {
    const lineItems = orderItems.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name,
                images: [item.imageUrl|| 'https://via.placeholder.com/150'],
                metadata: {
                    product_id: item.product_id
                }
            },
            // Convert price to integer cents
            unit_amount: Math.round(item.price * 100)
        },
        quantity: item.quantity
    }));

    return lineItems;
}

async function createCheckoutSession(userId, orderItems, orderId) {
    const lineItems = createLineItems(orderItems);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `https://didactic-waffle-pj664g547r5r2rr94-5173.app.github.dev/`,
        cancel_url: `https://didactic-waffle-pj664g547r5r2rr94-5173.app.github.dev/cart`,
        metadata: {            
            userId: userId,
            orderId: orderId
        }
    });
    return session;
}

module.exports = {
    createCheckoutSession
};