import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/theme"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
