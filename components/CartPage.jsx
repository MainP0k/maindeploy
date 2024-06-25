import React, { useState, useEffect } from 'react';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cart.reduce((acc, item) => acc + item.pricing * item.quantity, 0);
    };

    const calculateDiscounts = () => {
        // Replace with actual discount calculation logic if applicable
        return 0;
    };

    const calculateTaxes = (subtotal) => {
        const taxRate = 0.20; // Example tax rate of 20%
        return subtotal * taxRate;
    };

    const calculateTotal = (subtotal, discounts, taxes) => {
        return subtotal - discounts + taxes;
    };

    const subtotal = calculateSubtotal();
    const discounts = calculateDiscounts();
    const taxes = calculateTaxes(subtotal);
    const total = calculateTotal(subtotal, discounts, taxes);

    return (
        <div className="flex flex-row">
            {cart.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
            <div class="basis-3/4">
                <div class="mr-4">
                    <div class="text-xl font-bold mb-4">Panier</div>
                    <div className="flex flex-row border-b border-slate-400">
                        <div class="basis-3/6">Produit</div>
                        <div class="basis-1/6">Quantité</div>
                        <div class="basis-1/6">Prix</div>
                        <div class="basis-1/6">Total</div>
                    </div>
                    {cart.map((item) => (
                        <div className="flex flex-row py-2 border-b border-slate-300 items-center">
                            <div class="basis-3/6 flex flex-row items-center">
                                <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px" }} className="border rounded-lg border-black" />
                                <div class="ms-2 text-sm">{item.name}</div>
                            </div>
                            <div class="basis-1/6 flex flex-row items-center">
                                <button onClick={() => removeFromCart(item.id)} class="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.283 7.5-.288 7.5m-3.99 0-.288-7.5m8.306-2.675c.285.043.569.09.852.138m-.852-.137-.89 11.568a1.875 1.875 0 0 1-1.87 1.73H6.737a1.875 1.875 0 0 1-1.87-1.73l-.89-11.569m12.046 0a40.08 40.08 0 0 0-2.898-.33m-10 .467c.283-.049.567-.095.852-.137m0 0a40.091 40.091 0 0 1 2.898-.33m6.25 0V3.73c0-.984-.758-1.804-1.742-1.834a43.3 43.3 0 0 0-2.766 0c-.984.03-1.742.851-1.742 1.834v.763m6.25 0c-2.08-.16-4.17-.16-6.25 0"></path></svg><span></span></button>
                                <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} min="1" size="3" class="w-10"/>
                            </div>
                            <div class="basis-1/6">€{item.pricing}</div>
                            <div class="basis-1/6">€{(item.pricing * item.quantity).toFixed(2)}</div>
                        </div>
                    ))}
                </div>
            </div>
            )}
            {cart.length === 0 ? (
                <p></p>
            ) : (
            <div class="basis-1/4 ml-4">
                    <div class="flex flex-column gap-2">
                        <div class="text-xl font-bold mb-4">Commande</div>
                        <div class="flex flex-row justify-between">
                            <div class="text-sm">Sous-total</div>
                            <div class="text-sm">€{subtotal.toFixed(2)}</div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-sm">Réductions</div>
                            <div class="text-sm">€{discounts.toFixed(2)}</div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-sm">Taxes</div>
                            <div class="text-sm">€{taxes.toFixed(2)}</div>
                        </div>
                        <div class="flex flex-row justify-between border-y border-slate-400 items-center">
                            <div class="my-2">Total</div>
                            <div className="my-2 font-bold text-black text-xl">€{total.toFixed(2)}</div>
                        </div>
                        <div class="flex justify-center">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={console.log(cart)}>
                            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                            </svg>
                            Valider la commande
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CartPage;