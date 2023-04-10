import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed'
import './hre.css'
import Navbar from '../commponents/Navbar';
import resume from "../../src/Resumefinal.pdf"


const HeroContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: url(./img/new.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  color: #fff;
  
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const HeroSubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const HeroSubHeadings = styled.h6`
  font-size: 2rem;
  margin-bottom: 2rem;
 
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;








const HeroSection = () => {
  return (
    <HeroContainer id='HeroSection'>
      <Navbar/>
     
      <HeroContent>
      
      <HeroSubHeadings className='hi'>Hi!</HeroSubHeadings>
        <HeroHeading> I'm Tushar Golkande </HeroHeading>
       <HeroSubHeading  >
        <Typed
        strings={[
          "Full Stack Developer"
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
        />
       </HeroSubHeading>
        <HeroButton  ><a href={resume}>Download CV</a> </HeroButton>
       < img src='./img/tjn.png' className='tj' alt='' />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
