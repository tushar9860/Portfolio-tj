import styled from "styled-components";
import { Link } from "react-scroll";
import "./Nav.css"





const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;


    

  
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  
  text-decoration: none;
  
   
 
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;



function Navbar() {
  return (
    <Nav>
      <Logo href="/" ><i>Tushar</i></Logo>
      <NavLinks>
      <Link className="scrl"
    activeClass="active"
    to="HeroSection"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
>Home</Link>
<Link className="scrl"
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
>About</Link>
<Link className="scrl"
    activeClass="active"
    to="services"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
>Skill</Link>
<Link className="scrl"
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
>Contact</Link>
      </NavLinks>
    </Nav>
  );
}
export default Navbar;