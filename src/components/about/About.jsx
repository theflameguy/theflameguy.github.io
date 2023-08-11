import "./about.css";
import profile from "../../img/profile.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={profile}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a skilled individual with a strong foundation in C++, Data Structures, 
        and Algorithms, complemented by proficiency in web technologies like HTML, CSS, and JavaScript. 
        I possess intermediate knowledge in Python, Github, React, Node, SQL, and more, 
        enabling effective collaboration and web development. I'm also exploring PHP,
         Machine Learning, Artificial Intelligence, Cloud, and Java, reflecting my commitment to continuous learning 
         and embracing new technologies. My adaptable skill set makes me an asset for diverse projects and collaborations.
         
        </p>
        <p className="a-desc">
          {/* logos for skill here */}
        </p>
        
      </div>
    </div>
  );
};

export default About;
