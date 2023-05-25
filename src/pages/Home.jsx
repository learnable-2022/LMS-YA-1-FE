import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";
import Footer from "../components/Footer/Footer";
import Coursel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <UserJourney />
      <Coursel />
      <Footer />
    </div>
  );
};
export default Home;
