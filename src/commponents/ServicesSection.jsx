import React from 'react';
import styled from 'styled-components';
import "./style.css"

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  background-image: url(./img/new.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;

  color: #fff;

 
`;



const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <div className="skills">
        <h1>My-Skill</h1>
  <div className="skill">
    <div className="skill-name"> HTML</div>
    <div className="skill-bar">
      <div className="skill-per" per="90%" style={{width:"90%"}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">CSS</div>
    <div className="skill-bar">
      <div className="skill-per" per="70%" style={{width:"70%"}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">Javascript</div>
    <div className="skill-bar">
      <div className="skill-per" per="60%" style={{width:"60%"}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">React.Js</div>
    <div className="skill-bar">
      <div className="skill-per" per="75%" style={{width:"75%"}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">Photoshop</div>
    <div className="skill-bar">
      <div className="skill-per" per="70%" style={{width:"70%"}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">MS-Office</div>
    <div className="skill-bar">
      <div className="skill-per" per="60%" style={{width:"60%"}}></div>
    </div>
  </div>



</div>
      
    </ServicesContainer>
  );
};

export default ServicesSection;
