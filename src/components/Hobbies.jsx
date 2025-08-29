import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const HobbyCard = styled.div`
  background: linear-gradient(145deg, #f0f8ff, #e6f3ff);
  border: 2px solid #b3d9ff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 
    0 8px 24px rgba(54, 130, 216, 0.1),
    0 4px 12px rgba(54, 130, 216, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #7c3aed);
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 
      0 20px 40px rgba(54, 130, 216, 0.2),
      0 10px 20px rgba(54, 130, 216, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: #93c5fd;
  }
`

const HobbyIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;

  ${HobbyCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`

const HobbyTitle = styled.h3`
  color: #1e40af;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  background: rgba(255, 255, 255, 0.6);
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.1);
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`

const Hobbies = () => {
  return (
    <Section id="hobbies" border={true} style={{ background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)' }}>
      <Container>
        <SectionTitle>HOBBIES</SectionTitle>

        <HobbiesGrid>
          <HobbyCard>
            <HobbyIcon>🚀</HobbyIcon>
            <HobbyTitle>Aprender sobre inteligencia artificial y nuevas tecnologías</HobbyTitle>
          </HobbyCard>

          <HobbyCard>
            <HobbyIcon>🎮</HobbyIcon>
            <HobbyTitle>Videojuegos de estrategia y rol</HobbyTitle>
          </HobbyCard>

          <HobbyCard>
            <HobbyIcon>📖</HobbyIcon>
            <HobbyTitle>Lectura sobre ciencia ficción y biografías de innovadores</HobbyTitle>
          </HobbyCard>

          <HobbyCard>
            <HobbyIcon>🎵</HobbyIcon>
            <HobbyTitle>Escuchar música para concentrarme en la programación</HobbyTitle>
          </HobbyCard>

          <HobbyCard>
            <HobbyIcon>🏃‍♂️</HobbyIcon>
            <HobbyTitle>Hacer deporte y actividades al aire libre</HobbyTitle>
          </HobbyCard>
        </HobbiesGrid>
      </Container>
    </Section>
  )
}

export default Hobbies