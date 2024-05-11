import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";

import 'swiper/css';
import 'swiper/css/free-mode'; // Optional: Free mode navigation
import 'swiper/css/pagination'; // Optional: Pagination
import Category from './Category';

function CategoriesSlider() {

    const categories = useSelector(store => store.categories);

    const breakpoints = {
      
        // Breakpoint for medium-sized screens (adjust as needed)
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },

        // Breakpoint for large-sized screens (adjust as needed)
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    };

    return (
        <>
            <Swiper
                // Import necessary modules for additional features (optional)
                // modules={[FreeMode, Pagination]} // Example

                slidesPerView={2} // Initial configuration for responsiveness
                spaceBetween={10}
                breakpoints={breakpoints}
                className="mySwiper"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Category category={category}></Category>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CategoriesSlider;
