import React from 'react';

const ProductCard = ({ name, image, pricing }) => {
    return (
        <div className="mb-4 hover:cursor-pointer mx-2">
            <img
                src={image}
                alt={name}
                className="w-64 h-80 object-cover border rounded-lg border-black hover:shadow-lg transition ease-in duration-200"
            />
            <div className="flex mt-4 justify-between">
                <p className="text-dark font-normal font-sans txt-medium text-ui-fg-subtle">{name}</p>
                <div className="flex items-center gap-x-2">
                    <p className="text-slate-400">€{pricing}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
