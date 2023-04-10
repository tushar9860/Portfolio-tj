import React from "react";
import styled from "styled-components";


const About = styled.section`
padding: 4rem 0;
background-color: black;
background-image: url(./img/new.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
`;

const AboutContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const AboutText = styled.div`
text-align: center;
max-width: 600px;

`;

const AboutTitle = styled.h2`
font-size: 3rem;
font-weight: bold;
color: white;
margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
font-size: 1.2rem;
font-weight: 400;
color: rgb(167 167 167);
line-height: 1.5;
`;

function AboutSection() {
return (
  <About id="about" >
    <AboutContent>
      <AboutText>
        <AboutTitle>About Me</AboutTitle>
        <AboutDescription>
        To work in an environment where my skills and knowledge are utilized for the
growth of organization and achieve that position which will give me
opportunity to further explore my knowledge through my performance.
        </AboutDescription>
      </AboutText>
    </AboutContent>
  </About>
);
}
export default AboutSection;