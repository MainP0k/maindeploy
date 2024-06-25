import React, { useState} from 'react';


const ProductPage = ({ id, name, description, image, pricing }) => {
    const [currentNumber, setCurrentNumber] = useState(1);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === id);
        
        if (existingProduct) {
            existingProduct.quantity += currentNumber;
        } else {
            cart.push({ id, name, description, image, pricing, quantity: currentNumber });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };


    const handleMore = () => {
        setCurrentNumber(currentNumber + 1);
    };
    
    const handleLess = () => {
        if (currentNumber >1) {
            setCurrentNumber(currentNumber - 1);
        }
    };

    return (
        <div class="grid grid-cols-3 grid-flow-col gap-4">
            <div class="flex flex-column">
                <div class="basis-1/6 justify-start text-2xl font-bold mb-4 ">
                    {name}
                </div>
                <div class="basis-5/6 ">
                    {description}
                </div>
            </div>
            <div class="justify-center">
                <div><img src={image} alt={name} width="400" max-height="600" className="border rounded-lg border-black hover:shadow-lg transition ease-in duration-200" /></div>
            </div>
            <div class="flex flex-column justify-end">
                <div class="grid grid-cols-6">
                    <button onClick={handleLess} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="col-start-2 col-span-1 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="col-start-3 col-span-2 bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={currentNumber} required />
                    <button onClick={handleMore} type="button" id="increment-button" data-input-counter-increment="quantity-input" class="col-start-5 col-span-1 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <hr></hr>
                <div className="mb-2">
                {currentNumber == 1 ? (
                        <div class="flex flex-rows justify-center">
                            <div class="font-bold">€{pricing}</div>
                        </div>
                    ) : (
                        <div class="flex flex-rows justify-center">
                            <div class="font-bold">€{pricing*currentNumber}</div><div class="ml-2"> soit €{pricing} l'unité</div>
                        </div>
                    )}
                </div>
                <div class="basis-1/12 flex justify-center">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddToCart}>
                        <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                        </svg>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;