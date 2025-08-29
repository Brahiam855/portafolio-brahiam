import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const SkillCard = styled.div`
  background: linear-gradient(145deg, #f0f8ff, #e6f3ff);
  border: 2px solid #b3d9ff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 
    0 8px 24px rgba(54, 130, 216, 0.1),
    0 4px 12px rgba(54, 130, 216, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

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
    transform: translateY(-8px);
    box-shadow: 
      0 16px 32px rgba(54, 130, 216, 0.15),
      0 8px 16px rgba(54, 130, 216, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: #93c5fd;
  }
`

const SkillTitle = styled.h3`
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    padding: 0.8rem 1.2rem;
    padding-left: 2.5rem;
    position: relative;
    background: rgba(59, 130, 246, 0.05);
    border-radius: 8px;
    border-left: 4px solid #3b82f6;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    line-height: 1.5;
    
    &:before {
      content: "⚡";
      color: #3b82f6;
      font-size: 1.2rem;
      position: absolute;
      left: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      background: rgba(59, 130, 246, 0.1);
      transform: translateX(4px);
      border-left-color: #1d4ed8;
    }

    &:last-child {
      margin-bottom: 0;
    }
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
  margin-bottom: 1rem;
  letter-spacing: 1px;
`

const Skills = () => {
  return (
    <Section id="skills" border={true} style={{ background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)' }}>
      <Container>
        <SectionTitle>HABILIDADES</SectionTitle>

        <SkillsGrid>
          <SkillCard>
            <SkillTitle>Habilidades Técnicas</SkillTitle>
            <SkillList>
              <li>Lenguajes: Java, Python, C#, JavaScript (Node.js, React), HTML/CSS</li>
              <li>Bases de datos: MySQL, MongoDB, Firebase</li>
              <li>Control de versiones: Git/GitHub</li>
              <li>Metodologías: Scrum, Kanban</li>
              <li>Diseño UI/UX con Figma</li>
            </SkillList>
          </SkillCard>

          <SkillCard>
            <SkillTitle>Habilidades Blandas</SkillTitle>
            <SkillList>
              <li>Trabajo en equipo con metodologías ágiles</li>
              <li>Pensamiento lógico y analítico</li>
              <li>Comunicación asertiva</li>
              <li>Liderazgo en pequeños proyectos académicos</li>
            </SkillList>
          </SkillCard>
        </SkillsGrid>
      </Container>
    </Section>
  )
}

export default Skills