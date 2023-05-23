import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Care from "./Care/Care";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import GallerySection from "./GallerySection/GallerySection";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    const allToys = useLoaderData();
    useTitle("");
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <CategoryTabs allToys={allToys}></CategoryTabs>
            <Care></Care>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;