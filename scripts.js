

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    function updateCart() {
        console.log('Cart:', cart);
    }

    // Handle "Add to Cart" button clicks
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            // Add item to cart
            cart.push({ product, price });
            
            // Update cart (console log for demonstration purposes)
            updateCart();
        });
    });
});
