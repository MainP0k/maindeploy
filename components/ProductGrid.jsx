import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PageLink from "./PageLink";

const ProductGrid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fake-coffee-api.vercel.app/api', { //?page=${currentPage}&limit=${itemsPerPage}
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <div>
            {data.length > 0 ? (
                <Slider {...settings}>
                    {data.map((coffee) => (
                        <div key={coffee.id}>
                            <PageLink href={`/product/${coffee.id}`} className="nav-link" testId="navbar-home">
                                <div>
                                    <ProductCard
                                        name={coffee.name}
                                        image={coffee.image_url}
                                        pricing={coffee.price}
                                    />
                                </div>
                            </PageLink>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductGrid;


