import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const IntroSection = styled(Section)`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: float 20s linear infinite;
  }

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(-30px, -30px) rotate(360deg); }
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`

const ProfilePhotoContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem auto;
  position: relative;
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.2),
    0 6px 16px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 16px 40px rgba(0, 0, 0, 0.25),
      0 8px 20px rgba(0, 0, 0, 0.15),
      inset 0 2px 4px rgba(255, 255, 255, 0.4);
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: inline-block;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.5rem;
  }
`

const Introduction = styled.p`
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`

const HomeIntro = () => {
  return (
    <IntroSection id="home">
      <Container>
        <ContentWrapper>
          <ProfilePhotoContainer>
            <ProfileImage src="/mi-foto.jpg" alt="Foto de perfil" />
          </ProfilePhotoContainer>
          
          <Title>Portafolio Personal</Title>
          <Subtitle>Ingeniero de Software</Subtitle>
          <Introduction>
            Soy estudiante de Ingeniería de Software, apasionado por el desarrollo de aplicaciones, 
            la creación de soluciones digitales y la innovación tecnológica. Me interesa aprender nuevas tecnologías, 
            lenguajes de programación y metodologías ágiles que me permitan crecer como desarrollador y aportar valor en proyectos reales.
          </Introduction>
        </ContentWrapper>
      </Container>
    </IntroSection>
  )
}

export default HomeIntro
