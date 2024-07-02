import React from 'react'
import vg from "../assets/2.webp";
// vg - vector graphics
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>

    {/* 1st div */}
    <div className='home' id = "home">
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    {/* 2nd div */}
    <div className="home2" id = "">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>

    {/* 3rd div */}
    <div className="home3" id = "about">
        <div>
            <h1>Who we are?</h1>
            <p>At TechStar, we are a team of dedicated technology enthusiasts and problem-solvers committed to delivering top-notch tech solutions. 
                With years of experience, we specialize in software development, IT consulting, cloud services, cybersecurity, and managed IT services. 
                Our mission is to provide efficient and scalable solutions tailored to your unique business needs. 
                We believe in a personalized approach, ensuring our services align with your goals. 
                Our experts are passionate about technology's potential to transform businesses. 
                From startups to large enterprises, we have the skills and resources to help you navigate the digital landscape. 
                We value long-term partnerships built on trust, transparency, and mutual success. 
                Our commitment is to offer exceptional service and support, making sure your technology infrastructure is robust, secure, and capable of meeting the demands of a rapidly changing market. 
                Join us in building a smarter, connected future.</p>
        </div>
    </div>

    {/* 4th div */}
    <div className="home4" id = "brands">
        <div>
            <h1>Brands</h1>
            <article>
                
                <div style={{
                    // adding (style) delay in animation in each
                    animationDelay : "0.3s",
                }}>
                <AiFillGoogleCircle />
                <p>Google</p>
                </div>

                
                <div style={{
                    animationDelay : "0.5s",
                }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
                </div>

                
                <div style={{
                    animationDelay : "0.7s",
                }}>
                <AiFillYoutube />
                <p>Youtube</p>
                </div>

                
                <div style={{
                    animationDelay : "1s",
                }}>
                <AiFillInstagram />
                <p>Instagram</p>
                </div>

            </article>
        </div>
    </div>
    </>
  )
}

export default Home