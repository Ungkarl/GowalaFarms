import React from 'react';
import useSlider from './useSlider';
import styles from './slider.module.css';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const ImageSlider = () => {
    const images = [
        '/banner/01.jpg',
        '/banner/02.jpg',
        '/banner/03.jpg',
        '/banner/04.jpg',
    ];

    const { currentSlide, nextSlide, prevSlide, setAutoSlide, goToSlide } = useSlider(images, true);

    const handleMouseEnter = () => {
        setAutoSlide(false); // Stop auto slide
    };

    const handleMouseLeave = () => {
        setAutoSlide(true); // Start auto slide
    };

    return (
        <div 
            className={styles.slider}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.overlay}>
                <div className={styles.title}>
                    <h1 className={styles.sliderTitle}>Gowala Farms</h1>
                    <h2 className={styles.sliderUnderTitle}>The Complete Milk</h2>
                </div>
                <button className={styles.readBtn}>Read More</button>
            </div>
            <div 
                className={styles.sliderInner} 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className={styles.prev} onClick={prevSlide}><MdOutlineNavigateBefore /></button>
            <button className={styles.next} onClick={nextSlide}><MdOutlineNavigateNext /></button>
            <div className={styles.dots}>
                {images.map((image, index) => (
                    <span 
                        key={index} 
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`} 
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;