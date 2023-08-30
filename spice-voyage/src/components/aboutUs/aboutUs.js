import "./aboutUs.css";
import footerImg from "../../assets/Hero_crop.png";
const AboutUs = ()=>{
    return(
        <section className="about-sec">
            <p className="footer-heading-1">About Us</p>
            <h2 className="footer-heading-2">Why Choose Us?</h2>
            <div className="footer-container">
                <div className="footer-img">
                    <img src={footerImg} alt="" className="image"/>
                </div>
                <div className="footer-info">
                    <h1 className="description-title">Best Food In The Country</h1>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn-1 footer-btn" >Free Delivery</button><button className="btn-2 footer-btn">Easy Payments</button><button className="btn-3 footer-btn">24/7 Services</button>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;