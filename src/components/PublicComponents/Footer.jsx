import './HomeFooter.css';
import companyLogo from '../../assets/companylogo.png';
import facebookSvg from '../../assets/photos/facebook.svg';
import instagramSvg from '../../assets/photos/instagram.svg';
import googleSvg from '../../assets/photos/google.svg';
import twitterSvg from '../../assets/photos/twitter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function HomeFooter() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="home-footer">
            <div className="home-footer-left">
                <div className="home-footer-heading">
                    <img src={companyLogo} alt="" />
                    <h1>CDM Studio</h1>
                </div>
                <div className="home-footer-details">
                    <p>
                        A  digital platform designed to help organizations
                        efficiently organize, store, and manage content, documents, or data.
                    </p>
                </div>
                <ul className="home-footer-socials">
                    <li><a href=""><img src={facebookSvg} alt="Facebook" /></a></li>
                    <li><a href=""><img src={instagramSvg} alt="Instagram" /></a></li>
                    <li><a href=""><img src={googleSvg} alt="Google" /></a></li>
                    <li><a href=""><img src={twitterSvg} alt="Twitter" /></a></li>
                </ul>
                <button className="home-footer-gototop" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            </div>
            <div className="home-footer-links">
                <div className="home-footer-links-section">
                    <h3>About Us</h3>
                    <ul className="home-footer-links-list">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Newsroom</a></li>
                        <li><p>Streamline Your Data, Empower Your Decisions</p></li>
                    </ul>
                </div>
                <div className="home-footer-links-section">
                    <h3>Legal & Privacy</h3>
                    <ul className="home-footer-links-list">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Cookie Policy </a></li>
                        <li><a href="">Copyright & Disclaimer</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
