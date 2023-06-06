import UserJourney from "../../components/UserJourney/UserJourney";
import Navbar from "../../components/Navbar/Navbar";
import Elevate from "../../components/Elevate/Elevate";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Coursel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Elevate />
      <UserJourney />
      <Coursel />
      <Footer />
    </div>
  );
};
export default Home;
