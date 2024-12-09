import Navbar from "../../src/components/Navbar/Navbar.jsx";

import Robotics_kids from "./../images/Robotics_kids.jpg";
import { motion } from "motion/react"
import "./AboutPage.css"
function AboutPage() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="about-container"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "40px",
        }}
      >
        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
                <motion.div  initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }} style={{display:"flex", justifyContent:"center"}}>
<span style={{ color: "#516eba", fontWeight: "bold", fontSize:"90px", textAlign:"center", }}>
                  We are redefining <br />
                  STEM education!
                </span>
                </motion.div>
           
              <div className="about-feature ml-36 mr-36"  >
                <p className="highlight-text">
                  Born from a vision to{" "}
                  <strong>inspire a new generation of innovators</strong>, we’re
                  here to transform the way students and teachers experience
                  technology.
                </p>
                <p>
                  Our founder, Dylan Nguyen, a global Aeronautical Engineer with
                  over 20 years of experience, saw a gap during the 2020 COVID
                  homeschooling period. Watching his two young daughters
                  interact with tools that fell short of real-world impact,
                  Dylan realised something had to change to engage more young
                  minds to the rewards of STEM.
                </p>
                <blockquote className="quote">
                  "Australia's success needs curious young minds to experiment
                  and challenge accepted assumptions."
                </blockquote>
                <p>
                  Most robotics programs focused on screens, overlooking the
                  tangible magic of building, creating, and problem-solving.
                  Worse, existing solutions were priced out of reach for
                  schools, leaving students disengaged and underserved.
                </p>
                <p>
                  Frustrated with the lack of affordable, hands-on options,
                  Dylan crafted <strong>Bugbox</strong> - a unique digital
                  technology ecosystem that fuses visible engineering hardware,
                  software, and real-world challenges to unlock students'
                  potential and prepare them for emerging careers.
                </p>
                <div className="about-image" >
                  <img
                    src={Robotics_kids}
                    alt="Kids working with robotics"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
                <p>
                  Bugbox isn’t just about learning to code or build robots. It’s
                  about empowering young minds to dream bigger, innovate
                  smarter, and lead with confidence.
                </p>
                <p>
                  Our 3D-printed learning robots offer more than just a glimpse
                  into the world of STEM, they’re the key to unlocking limitless
                  possibilities.
                </p>
                <p>
                  We provide curriculum-aligned lesson plans and
                  industry-inspired robotics applications, freeing teachers to
                  focus on what matters:{" "}
                  <strong>
                    sparking curiosity and shaping the next generation of
                    trailblazers.
                  </strong>
                </p>
                <div className="about-cta">
                  <button
                    className="cta-button"
                    style={{
                      background: "#516eba",
                      color: "#fff",
                      padding: "12px 24px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                  >
                    Join the Movement
                  </button>
                </div>
                <p className="closing-remark">
                  At Bugbox, we believe the future is built by those who dare to
                  push boundaries. Let’s inspire that future together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
