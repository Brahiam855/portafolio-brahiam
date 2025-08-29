import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled.div`
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #e9ecef;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #6c757d;
`

const ProjectTitle = styled.h3`
  color: #007bff;
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
`

const Projects = () => {
  return (
    <Section border={true}>
      <Container>
        <h2 style={{ textAlign: "center" }}>PROYECTOS</h2>

        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage>💻</ProjectImage>
            <ProjectTitle>Sistema DB</ProjectTitle>
            <ProjectDescription>
              Sistema de gestión escolar (Java + MySQL): aplicación que maneja estudiantes, profesores, materias y tareas.
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage>📱 </ProjectImage>
            <ProjectTitle>App</ProjectTitle>
            <ProjectDescription>
             App móvil de agenda académica: recordatorios de clases y entregas, desarrollada en Flutter.
            </ProjectDescription>
          </ProjectCard>
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

export default Projects
