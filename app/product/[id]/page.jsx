'use client';

import React, { useState, useEffect } from 'react';
import ProductPage from '../../../components/ProductPage';

export default function Product(params) {
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        console.log(params.params.id)
        if (params.params.id) {
            fetch(`https://fake-coffee-api.vercel.app/api/${params.params.id}`, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data);
                    console.log(data);
                })
                .catch((error) => console.log(error));
        }
    },[]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        {product.length > 0 ? (
            <div>
                {product.map((coffee) => (
                    <div key={coffee.id}>
                        <ProductPage
                            id={coffee.id}
                            name={coffee.name}
                            description={coffee.description}
                            image={coffee.image_url}
                            pricing={coffee.price}/>
                    </div>
                ))}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
};