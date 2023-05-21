import Banner from "./Banner/Banner";
import Care from "./Care/Care";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import GallerySection from "./GallerySection/GallerySection";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <CategoryTabs></CategoryTabs>
            <Care></Care>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;