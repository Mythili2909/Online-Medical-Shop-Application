// AboutUs.js
import React from 'react';
import '../Assets/Style/about.css';
// import abtimg from '../Assets/Image/about_img_1';

const About = () => {
    return (
                    <div className='abtimg'>
        <div className="about-us-container">
            <header>
                <h1 className='ab'>About Us</h1>
            </header>
            <main>
                <section id="about-section">

                {/* image: 'https://download.logo.wine/logo/Dabur/Dabur-Logo.wine.png', */}
                    {/* <h1 className='our'>Our Story</h1> */}
                    <p className='content'>CureCart is an authentic online medicine shop with a wide selection of prescription, over-the-counter (OTC) and generic medications. It is one of the most popular internet web medical stores, which primarily aims to provide safe, quality, genuine and affordable medications to people throughout the world.</p>
                </section>
                <section id="team-section">
                    {/* <h2>Our Team</h2> */}
                    <div id="team-members">
                        {/* Team members will be dynamically added here */}
                    </div>
                </section>
            </main>
            <footer>
                {/* <p>&copy; 2023 Your Company. All rights reserved.</p> */}
            </footer>
        </div>
                </div>
    );
};

export default About;
