const stripePublicKey = 'your_stripe_public_key';
const stripe = Stripe(stripePublicKey);
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

const form = document.getElementById('payment-form');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const itemsInCart = [
        { id: 'product1', quantity: parseInt(document.getElementById('quantity-product1').value, 10) || 0 },
        { id: 'product2', quantity: parseInt(document.getElementById('quantity-product2').value, 10) || 0 }
        // Add more products as needed
    ];

    const totalItemsInCart = itemsInCart.reduce((total, item) => total + item.quantity, 0);

    if (totalItemsInCart < 2) {
        alert('Error: You must have at least 2 products in your cart for payment.');
        return;
    }

    const clientSecret = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: itemsInCart }),
    }).then((response) => response.json())
        .then((data) => data.clientSecret);

    const { setupIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
            },
        },
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Payment successful!');
    }
});
