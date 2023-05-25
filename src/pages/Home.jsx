import UserJourney from "../components/UserJourney/UserJourney";
import Navbar from "../components/Navbar/Navbar";
import Elevate from "../components/Elevate/Elevate";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Elevate />
      <UserJourney />
    </div>
  );
};
export default Home;
