import styled from "styled-components"
import Container from "./Container"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 1rem 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 20px rgba(30, 58, 138, 0.3),
    0 2px 10px rgba(30, 58, 138, 0.2);

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Brand = styled.h2`
  background: linear-gradient(135deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    display: block;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    backdrop-filter: blur(5px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 
        0 6px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }
`

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Nav>
      <Container>
        <NavContent>
          <Brand>Portfolio</Brand>
          <NavLinks>
            <NavItem>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Inicio
              </a>
            </NavItem>
            <NavItem>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
                Experiencia
              </a>
            </NavItem>
            <NavItem>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Habilidades
              </a>
            </NavItem>
            <NavItem>
              <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
                Educación
              </a>
            </NavItem>
            <NavItem>
              <a href="#hobbies" onClick={(e) => { e.preventDefault(); scrollToSection('hobbies'); }}>
                Hobbies
              </a>
            </NavItem>
            <NavItem>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contacto
              </a>
            </NavItem>
          </NavLinks>
        </NavContent>
      </Container>
    </Nav>
  )
}

export default Navbar