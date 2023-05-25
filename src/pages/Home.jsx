import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <UserJourney />
      <Carousel />
    </div>
  );
};
export default Home;
