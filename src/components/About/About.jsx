import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-lt-info">
          <div className="info-title">
            About <span>Geek</span>
          </div>
          <p>
            At Geek, we understand the power of bringing teaching and learning
            together in one cohesive platform. We know that education is not
            just about imparting knowledge but also about fostering growth and
            inspiring minds. That's why we've built an all-in-one place where
            educators and learners can thrive together.
          </p>

          <div className="cards">
            <div className="card-lt">
              <img src="images/card-iconn.png" />
            </div>
            <div className="card-rt">
              <h3 className="card-rt-title">Make Education Accessible</h3>
              <p>
                Unlock the world of learning with Geek. Our platform breaks
                barriers, making education accessible to all, regardless of
                time, location, or background.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-lt">
              <img src="images/card-icon.png" />
            </div>
            <div className="card-rt">
              <h3 className="card-rt-title">Help educators teach better</h3>
              <p>
                Elevate your teaching game with Geek. Our innovative tools and
                features empower educators to create captivating lessons, engage
                students, and deliver impactful learning experiences.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-lt">
              <img src="images/card-iconnn.png" />
            </div>
            <div className="card-rt">
              <h3 className="card-rt-title">Grow a learning community</h3>
              <p>
                Join a thriving learning community at Geek. Connect with
                like-minded individuals, share knowledge, and collaborate to
                foster growth, inspiration, and lifelong learning.
              </p>
            </div>
          </div>
        </div>

        <div className="about-rt-images">
          <img src="images/image.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
