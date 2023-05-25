
import UserJourney from "../components/UserJourney/UserJourney";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";
import Hero from  '../components/Hero/Hero'


const Home = () => {
  return (
   <div>
      <Navbar />
      <Elevate />
      <Hero/>
      <UserJourney />
      <Footer />

    </div>
  );
};
export default Home;
