import Features from "../Components/Features";
import HeroBanner from "../Components/HeroBanner";
import MiddleBanner from "../Components/MiddleBanner";
import MultiBanner from "../Components/MultiBanner";
import NewCollection from "../Components/NewCollection";
import TopSellers from "../Components/TopSellers";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <MultiBanner />
            <NewCollection />
            <MiddleBanner />
            <TopSellers />
            <Features />
        </>
    );
}
export default Home;