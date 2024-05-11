import Deals from "../components/Deals";
import FeaturedItems from "../components/FeaturedItems";
import HeroSection from "../components/HeroSection";
import NewArrivals from "../components/NewArrivals";
import PopularCategories from "../components/PopularCategories";
import TrendyItems from "../components/TrendyItems";

const Home = () => {
    return <>
        <HeroSection></HeroSection>
        <PopularCategories></PopularCategories>
        <FeaturedItems></FeaturedItems>
        <Deals></Deals>
        <NewArrivals></NewArrivals>
        <TrendyItems></TrendyItems>
    </>
}

export default Home;