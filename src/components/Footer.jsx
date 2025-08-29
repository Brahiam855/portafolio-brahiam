import styled from "styled-components"
import Container from "./Container"

const Foot = styled.footer`
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: white;
  padding: 2rem 0 1rem 0;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
  }
`

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    font-size: 1.5rem;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

const Footer = () => {
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
    <Foot>
      <Container>
        <FooterContent>
          <Links>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Sobre mí
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contáctame
            </a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
              Experiencia
            </a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Habilidades
            </a>
          </Links>
          
          <Social>
            <a href="https://www.facebook.com/brahiam.stiven" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              ⓕ
            </a>
            <a href="https://www.instagram.com/brahiam_stiven" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              🅾
            </a>
            <a href="https://twitter.com/brahiam_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://www.linkedin.com/in/brahiam-stiven" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              ★
            </a>
            <a href="https://github.com/brahiam-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              𑄝
            </a>
            <a href="https://wa.me/573134223024" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              ✆
            </a>
          </Social>

          <Copyright>
            © 2025 Brahiam Stiven. Todos los derechos reservados.
          </Copyright>
        </FooterContent>
      </Container>
    </Foot>
  )
}

export default Footer