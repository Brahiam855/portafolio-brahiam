import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  padding: 4rem 0;
  border-bottom: ${(props) => (props.border ? "1px solid #ddd" : "none")}
`

export default Section
