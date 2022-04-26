import './Home.css';
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiShip2Fill } from "react-icons/ri";

function Home() {
  return (
    <div class="home">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
      <div class="flex-home-main-container">
        <div class="home-main-container" id="">
          <h1 class="home-main-header">Hello, I'm David!</h1>
          <p class="home-main-intro">
            I am a Software Engineer who likes to solve problems, <RiShip2Fill className="brand-icon-small" /> products and fail fast.
          </p>
          <a href="https://twitter.com/davjdev/"><BsTwitter className="brand-icon" /></a>
          <a href="https://www.linkedin.com/in/davjdev/"><BsLinkedin className="brand-icon" /></a>
        </div>
        <div class="footer">
          © davj.dev
        </div>
      </div>
    </div>
  );
}

export default Home;
