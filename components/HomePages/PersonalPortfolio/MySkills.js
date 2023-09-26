import React from "react";

const mySkillsData = [
  {
    image: "/images/personal-portfolio/skills-img1.png",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/skills-img2.png",
    aosDelay: "300",
  },
  {
    image: "/images/personal-portfolio/skills-img3.png",
    aosDelay: "400",
  },
  {
    image: "/images/personal-portfolio/skills-img4.png",
    aosDelay: "500",
  },
];

const MySkills = () => {
  return (
    <>
      <div className="pp-skills-area pt-100 pb-70">
        <div className="container">
          <div 
            className="section-title style-two"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            {mySkillsData &&
              mySkillsData.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                  <div
                    className="pp-skills-box"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <img src={value.image} alt="image" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
