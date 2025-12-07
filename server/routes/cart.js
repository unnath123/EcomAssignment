const express = require('express');
const router = express.Router();

// In-memory cart storage
let cart = [];

// Get cart items
router.get('/', (req, res) => {
    res.json(cart);
});

// Add item to cart
router.post('/', (req, res) => {
    const { id, title, price, image } = req.body;

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }

    res.json(cart);
});

// Remove item from cart
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== id);
    res.json(cart);
});

// Clear cart (Checkout)
router.post('/checkout', (req, res) => {
    cart = [];
    res.json({ message: 'Checkout successful' });
});

module.exports = router;
