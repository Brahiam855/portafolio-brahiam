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
    background: linear-gradient(90deg, #10b981, #059669);
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

const Badge = styled.span`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 
    0 4px 12px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 16px rgba(16, 185, 129, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
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

const EducationTitle = styled.h3`
  color: #1e40af;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`

const EducationDescription = styled.p`
  color: #4b5563;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem;
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

const Education = () => {
  return (
    <Section id="education" border={true} style={{ background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)' }}>
      <Container>
        <SectionTitle>EDUCACIÓN</SectionTitle>

        <Item>
          <Row>
            <div>
              <EducationTitle>Educación Secundaria</EducationTitle>
              <Badge>Completada</Badge>
            </div>
          </Row>
          <EducationDescription>
            Formación académica básica completada con excelencia, desarrollando bases sólidas 
            en matemáticas, ciencias y habilidades de pensamiento crítico.
          </EducationDescription>
        </Item>

        <Item>
          <Row>
            <div>
              <EducationTitle>Estudiante de Ingeniería de Software</EducationTitle>
              <Badge>En Progreso</Badge>
            </div>
          </Row>
          <EducationDescription>
            Formación universitaria en desarrollo de software con enfoque en metodologías ágiles, 
            arquitectura de software y mejores prácticas de programación.
          </EducationDescription>
        </Item>

        <Item>
          <Row>
            <div>
              <EducationTitle>Certificación en Bases de Datos</EducationTitle>
              <Badge>Certificado</Badge>
            </div>
          </Row>
          <EducationDescription>
            Curso certificado en Bases de Datos con MySQL y MongoDB, incluyendo diseño de esquemas, 
            optimización de consultas y administración de bases de datos.
          </EducationDescription>
        </Item>

        <Item>
          <Row>
            <div>
              <EducationTitle>Experto en FL Studio y Vocaloid</EducationTitle>
              <Badge>Avanzado</Badge>
            </div>
          </Row>
          <EducationDescription>
            Dominio avanzado en producción musical digital y síntesis vocal, combinando 
            creatividad artística con habilidades técnicas en software especializado.
          </EducationDescription>
        </Item>
      </Container>
    </Section>
  )
}

export default Education