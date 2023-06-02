import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Coursel from "../components/Carousel/Carousel";
import ElevateYourJourney from "../components/ElevateYourJourney/ElevateYourJourney";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <UserJourney />
      <Coursel />
      <ElevateYourJourney />
      <Footer />
    </div>
  );
};
export default Home;
