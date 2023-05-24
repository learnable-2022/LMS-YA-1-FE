import UserJourney from "../components/UserJourney/UserJourney";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Elevate />
      <UserJourney />
      <Footer />
    </div>
  );
};
export default Home;
