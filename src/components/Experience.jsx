import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const Item = styled.div`
  margin-bottom: 2.5rem;
  background: linear-gradient(145deg, #f0f8ff, #e6f3ff);
  border: 2px solid #b3d9ff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 
    0 8px 24px rgba(54, 130, 216, 0.1),
    0 4px 12px rgba(54, 130, 216, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 12px 28px rgba(54, 130, 216, 0.15),
      0 6px 14px rgba(54, 130, 216, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: #93c5fd;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`

const Badge = styled.span`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 
    0 4px 12px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 16px rgba(59, 130, 246, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`

const ExperienceTitle = styled.h3`
  color: #1e40af;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`

const ExperienceDescription = styled.p`
  color: #4b5563;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;

  &:before {
    content: '💼';
    position: absolute;
    top: -8px;
    left: 1rem;
    background: #f0f8ff;
    padding: 0 0.5rem;
    font-size: 1.2rem;
  }
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

const Experience = () => {
  return (
    <Section id="experience" style={{ background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)' }}>
      <Container>
        <SectionTitle>EXPERIENCIA</SectionTitle>

        <Item>
          <Row>
            <div>
              <ExperienceTitle>Desarrollador Autodidacta</ExperienceTitle>
              <Badge>Actual</Badge>
            </div>
          </Row>
          <ExperienceDescription>
            Prácticas en un proyecto universitario de desarrollo de una aplicación móvil de agenda académica, 
            aplicando metodologías ágiles y trabajando con tecnologías modernas como React y Node.js.
          </ExperienceDescription>
        </Item>

        <Item>
          <Row>
            <div>
              <ExperienceTitle>Técnico en Hardware</ExperienceTitle>
              <Badge>Freelance</Badge>
            </div>
          </Row>
          <ExperienceDescription>
            Reparación y mantenimiento de equipos de cómputo, diagnóstico de fallas y optimización de sistemas. 
            Experiencia en resolución de problemas técnicos y atención al cliente.
          </ExperienceDescription>
        </Item>
      </Container>
    </Section>
  )
}

export default Experience