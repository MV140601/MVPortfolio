import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import { Projects } from "./components/Projects"
import Contactme from "./components/Contactme"
function App() {
  

  return (
    <div>
     <Navbar></Navbar>
     <Home/>
     <About/>
     <Experience/>
     <Projects/>
     <Contactme/>
    </div>
  )
}

export default App
