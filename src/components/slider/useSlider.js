import { useState, useEffect } from 'react';

const useSlider = (images, initialAutoSlide = false) => {
    const totalSlides = images.length;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoSlide, setAutoSlide] = useState(initialAutoSlide);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        let interval = null;
        if (isAutoSlide) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isAutoSlide, nextSlide]);

    return { currentSlide, nextSlide, prevSlide, setAutoSlide, goToSlide };
};

export default useSlider;