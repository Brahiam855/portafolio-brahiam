import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ContactCard = styled.div`
  background: linear-gradient(145deg, #f0f8ff, #e6f3ff);
  border: 2px solid #b3d9ff;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 
    0 8px 24px rgba(54, 130, 216, 0.1),
    0 4px 12px rgba(54, 130, 216, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  position: relative;
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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 16px 32px rgba(54, 130, 216, 0.15),
      0 8px 16px rgba(54, 130, 216, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: #93c5fd;
  }
`

const ContactIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
`

const ContactTitle = styled.h3`
  color: #1e40af;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`

const ContactDetails = styled.p`
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin: 0;
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

const ContactInfo = () => {
  return (
    <Section id="contact" border={true} style={{ background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)' }}>
      <Container>
        <SectionTitle>INFORMACIÓN DE CONTACTO</SectionTitle>

        <ContactGrid>
          <ContactCard>
            <ContactIcon>📧</ContactIcon>
            <ContactTitle>Email</ContactTitle>
            <ContactDetails>brahiamstivenibarramon@gmail.com</ContactDetails>
          </ContactCard>

          <ContactCard>
            <ContactIcon>📱</ContactIcon>
            <ContactTitle>Teléfono</ContactTitle>
            <ContactDetails>+57 3134223024</ContactDetails>
          </ContactCard>

          <ContactCard>
            <ContactIcon>🌐</ContactIcon>
            <ContactTitle>LinkedIn</ContactTitle>
            <ContactDetails>linkedin.com/in/brahiam-stiven</ContactDetails>
          </ContactCard>

          <ContactCard>
            <ContactIcon>💻</ContactIcon>
            <ContactTitle>GitHub</ContactTitle>
            <ContactDetails>github.com/brahiam-dev</ContactDetails>
          </ContactCard>
        </ContactGrid>
      </Container>
    </Section>
  )
}

export default ContactInfo