import Accordion from "./JourneyComponents/Accordion/Accordion";
import Button from "./JourneyComponents/Button/Button";
import FlowCard from "./JourneyComponents/FlowCard/FlowCard";
import styles from "./userJourney.module.css";
import { Link } from "react-router-dom";

const teacherJourney = [
  {
    number: 1,
    journey: "Register.",
    description: "Sign in to your educator account on Geek.",
  },

  {
    number: 2,
    journey: "Set Up Your Courses.",
    description:
      "Set up Courses, organise materials using our intuitive content management tools.",
  },

  {
    number: 3,
    journey: "Share your Knowledge.",
    description: "Engage students with interactive features, provide feedback.",
  },
];

const studentJourney = [
  {
    number: 1,
    journey: "Register.",
    description: "Sign in to your student account on Geek.",
  },
  {
    number: 2,
    journey: "Access Your Courses.",
    description:
      "Access course materials, lectures and resources available to you convieniently from a centralized location.",
  },
  {
    number: 3,
    journey: "Participate and Learn.",
    description:
      "Participate, complete assignments, utilize resources, engage in interactive discussions, collaborate with peers  and contribute to the learning community.",
  },
];

function UserJourney() {
  return (
    <div className={styles["journey-wrapper"]}>
      <h1>How to start your journey with Geek</h1>

      <Accordion title="I am an Educator">
        {teacherJourney.map((item, index) => (
          <FlowCard
            number={item.number}
            journey={item.journey}
            description={item.description}
            key={index}
          />
        ))}
      </Accordion>

      <Accordion title="I am a Student">
        {studentJourney.map((item, index) => (
          <FlowCard
            number={item.number}
            journey={item.journey}
            description={item.description}
            key={index}
          />
        ))}
      </Accordion>

      <Link to='/signup'><Button text="Get Started" /></Link>

      
    </div>
  );
}

export default UserJourney;
