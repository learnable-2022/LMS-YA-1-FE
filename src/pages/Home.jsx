import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <Hero/>
      <UserJourney />
      <Footer />
    </div>
  );
};
export default Home;
