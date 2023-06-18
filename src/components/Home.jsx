import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
        AiFillAmazonCircle, 
        AiFillYoutube, 
        AiFillInstagram
    } from 'react-icons/ai';

const Home = () => {
  return (
    <>
        <div className="home" id='home'>

            <main>
                <h1>TechSolv.</h1>
                <p>Solution to all your problems</p>
            </main>

        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                We are your one and only solution to the tech problems you face
                every day. We are leading tech company whose aim is to increase the
                problem solving ability in children.
                </p>
            </div>
        </div>


        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>The company itself is a very successful company. Who should be favored by flattering offices here and there, or to be chosen with great hatred? All who run away from the duties of our sorrows are bound by mere hatred. It is a pain to be repelled by the services of these pains. Let him seek the pain of those who forsake any of those who praise because of the time. There is never one who is most worthy to follow, the pleasure or the refusal of this one who, as it were, benefits, and the pains themselves are harsher in time? Let the pains be relieved, let me open to the trouble, let him avoid any office with a corrupt hatred, and receive him when or no one. Let him seek the reason at which time he flees! The easy happiness hinders and the like are most present whence the pleasures themselves are necessary, and will never happen by rejecting them? Something that no one knows pleases those who are driven away by flight, not born, by right from duties the thing itself with the pleasure of the body, which some of us often</p>
            </div>
        </div>

        <div className='home4' id='brands'>
            <div>
            <h1>Brands</h1>

            <article>
                <div
                    style={{
                        animationDelay: "0.3s"
                    }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div
                    style={{
                        animationDelay: "0.5s"
                    }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div
                    style={{
                        animationDelay: "0.7s"
                    }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div
                    style={{
                        animationDelay: "1s"
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