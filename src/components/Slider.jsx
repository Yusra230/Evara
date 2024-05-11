import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";
import FeaturedItem from './FeaturedItem';

import 'swiper/css';
import 'swiper/css/free-mode'; // Optional: Free mode navigation
import 'swiper/css/pagination'; // Optional: Pagination

function Slider() {

    const products = useSelector((store) => store.products);

    let newArrivalsProducts = products.slice(0, 8); // Select the first 8 products efficiently

    const breakpoints = {
        // Base configuration for all screen sizes
        slidesPerView: 1,
        spaceBetween: 20,

        // Breakpoint for medium-sized screens (adjust as needed)
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        // Breakpoint for large-sized screens (adjust as needed)
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    };

    return (
        <>
            <Swiper
                // Import necessary modules for additional features (optional)
                // modules={[FreeMode, Pagination]} // Example

                slidesPerView={'auto'} // Initial configuration for responsiveness
                spaceBetween={20}
                breakpoints={breakpoints}
                className="mySwiper"
            >
                {newArrivalsProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <FeaturedItem item={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;
