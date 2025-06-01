import './AboutMe.css';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../assets/profilepic.svg'

function Aboutme({ onContactClick }) {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const homeDescription = "A UI/UX designer dedicated to creating intuitive, user-centered experiences. I merge creativity with strategy to develop seamless digital solutions, focusing on making everyday tasks more efficient by balancing aesthetics with functionality.";
    const aboutmeDescription = "I'm a junior at Northeastern University majoring in Marketing and Design, with a strong interest in building intuitive, user-focused experiences. Whether it's refining everyday tools or designing from scratch, I love creating projects that blend creativity with purpose and making things not just easier to use, but more enjoyable too.";

    return (
        <div className="Aboutme">
            <figure>
                <div className="leftside">
                    <img src={profile} alt="" className="image" />
                </div>
                <div className="rightside">
                    <figcaption>
                        <h1 className="title">HI! I’m Sirong</h1>
                        <p className="description">
                            {isHomePage ? homeDescription : aboutmeDescription}
                        </p>
                    </figcaption>
                    <div className={`buttons ${isHomePage ? 'home-buttons' : 'aboutme-buttons'}`}>
                        {isHomePage && (
                            <button className="aboutme_btn">
                            <Link to="/aboutme" className="link">About Me</Link>
                            </button>
                        )}
                        <button className="contactme" onClick={onContactClick}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default Aboutme;