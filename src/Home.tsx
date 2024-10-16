// HomePage
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="hero d-flex align-items-center justify-content-center py-5"
      >
        <div className="hero-content d-flex align-items-center">
          <img
            src="temp-profile-pic.jpg" // Replace with your profile picture URL
            alt="Owen Reedy"
            className="profile-img me-4"
          />
        </div>
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">Showcasing my skills and personal projects</p>
          <div className="social-links mt-3">
            <a
              href="https://www.linkedin.com/in/owen-reedy-8331081ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/owenreedy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="split-container">
        <div className="left-side">
          <h1>About Me</h1>
          <p>
            I am motivated Software Engineering Student who is seeking to gain
            experience within the field. Excited by the prospect of being
            involved with projects that can improve the lives of many. I aim to
            do so by using the experiences I have gained through leadership
            roles to effectively work with customers others.
          </p>
        </div>
        <div className="right-side">
          <img
            src="temp-profile-pic.jpg" // Replace with your profile picture URL
            alt="Owen Reedy"
            className="profile-img me-4"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
