import './sleekslider.css';

import samsung from '../../assets/photos/samsung.png';
import cocacola from '../../assets/photos/cocacola.png';
import pepsi from '../../assets/photos/pepsi.png';
import netflix from '../../assets/photos/netflix.png';
import google from '../../assets/photos/google.png';
import instagram from '../../assets/photos/instagram-logo-svgrepo-com.svg';
import nike from '../../assets/photos/nike-4-logo-svgrepo-com.svg';
import yamaha from '../../assets/photos/yamaha-2-1-logo-svgrepo-com.svg';
import microsoft from '../../assets/photos/microsoft.png';
import amazon from '../../assets/photos/amazon.png';
import ibm from '../../assets/photos/ibm.png';

export default function SleekSlider() {
    return (
        <div className="companies" data-aos="fade-down">
            <h2>Trusted by the world’s leading businesses</h2>
            <div className="logos">
                <div className="logos-slider">
                    <img src={samsung} alt="Samsung" />
                    <img src={cocacola} alt="CocaCola" />
                    <img src={pepsi} alt="Pepsi" />
                    <img src={netflix} alt="Netflix" />
                    <img src={google} alt="Google" />
                    <img src={instagram} alt="Instagram" />
                    <img src={nike} alt="Nike" />
                    <img src={yamaha} alt="Yamaha" />
                    <img src={microsoft} alt="Microsoft" />
                    <img src={amazon} alt="Amazon" />
                    <img src={ibm} alt="IBM" />

                    <img src={samsung} alt="Samsung" />
                    <img src={cocacola} alt="CocaCola" />
                    <img src={pepsi} alt="Pepsi" />
                    <img src={netflix} alt="Netflix" />
                    <img src={google} alt="Google" />
                    <img src={instagram} alt="Instagram" />
                    <img src={nike} alt="Nike" />
                    <img src={yamaha} alt="Yamaha" />
                    <img src={microsoft} alt="Microsoft" />
                    <img src={amazon} alt="Amazon" />
                    <img src={ibm} alt="IBM" />
                </div>
            </div>
        </div>
    )
}
