import styles from './frontpage.module.css';
import ImageSlider from '../../components/slider/slider';
import ServiceTeaser from '../../components/serviceTeaser/serviceTeaser';
import ProductsTeaser from '../../components/productsTeaser/productsTeaser';
import OurTeam from '../../components/ourTeam/ourTeam';
import Subscribe from '../../components/subscribe/subscribe';

const Frontpage = () => {
    return (
        <div>
            <ImageSlider />
            <ServiceTeaser />
            <ProductsTeaser />
            <OurTeam />
            <Subscribe />

        </div>
    );
};

export default Frontpage;