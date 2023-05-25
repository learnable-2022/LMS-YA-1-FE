import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { Carousel } from  "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <Hero/>
      <UserJourney />
      <Carousel />
      <Footer />
    </div>
  );
};
export default Home;
