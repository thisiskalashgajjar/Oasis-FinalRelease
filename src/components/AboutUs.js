import React from "react";
import './aboutus.css';

const AboutUs = () => {
    const handleCardClick = (memberName) => {
        // Handle card click logic here, you can show more details, navigate, or perform other actions
        console.log(`Clicked on ${memberName}'s card`);
    };
    return (
        <div className="about-us-container">
            <center><h1 style={{fontFamily: 'cursive'}}><b>About Oasis - A Luxury Resort </b></h1></center>
            <br/>

            <p>Welcome to Oasis, a sanctuary of luxury and tranquility. Nestled amidst breathtaking landscapes, Oasis offers an unparalleled experience of comfort and indulgence. Whether you're seeking a romantic getaway, a family retreat, or a destination for special events, Oasis is your haven of opulence.</p>

            <h2>DevDynamos - The Team Behind the Website</h2>

            <p>DevDynamos is a dynamic team of skilled professionals who envisioned and brought to life the Oasis website. With a passion for cutting-edge technology and design, our team is dedicated to creating seamless and captivating online experiences for our users.</p>


            <h2>Mission of Oasis</h2>
            <p>At Oasis, our mission is to redefine luxury hospitality by providing an exquisite blend of world-class amenities, personalized service, and stunning surroundings. We aim to create memories that last a lifetime for our guests, ensuring every moment spent at Oasis is extraordinary.</p>

            <h2>Key Features of Oasis</h2>
            <ul>
                <li>Unmatched Luxury: Immerse yourself in the lap of luxury with our premium accommodations and world-class facilities.</li>
                <li>Breathtaking Scenery: Oasis is strategically located to offer breathtaking views, providing a serene and picturesque backdrop for your stay.</li>
                <li>Culinary Excellence: Indulge your palate with our diverse culinary offerings, curated by renowned chefs to tantalize your taste buds.</li>
                <li>Personalized Service: Our dedicated staff is committed to ensuring your every need is met, providing personalized and attentive service throughout your stay.</li>
            </ul>

            <h2>Meet the Team</h2>

            <div className="team-members row">
                <div className="col-md-3">
                    <div className="card" onClick={() => handleCardClick('Camilo')}>
                        <div className="card-front">
                            <img src="camilo.jpg" alt="Lead Developer (Front-End)" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Camilo Aguilar</h3>
                                <p className="card-text">Lead Developer (Front-End)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card" onClick={() => handleCardClick('Kalash')}>
                        <div className="card-front">
                            <img src="kalash.jpg" alt="Project Manager" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Kalash Gajjar</h3>
                                <p className="card-text">Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="col-md-3">
                    <div className="card" onClick={() => handleCardClick('Dhanvi')}>
                        <div className="card-front">
                            <img src="dhanvi.jpg" alt="Back-End Developer" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Dhanvi Raulji</h3>
                                <p className="card-text">Back-End Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card" onClick={() => handleCardClick('Anisha')}>
                        <div className="card-front">
                            <img src="anisha.jpg" alt="UI Designer" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Anisha Baweja</h3>
                                <p className="card-text">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default AboutUs;