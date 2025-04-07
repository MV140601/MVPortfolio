import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import { Projects } from "./components/Projects"
function App() {
  

  return (
    <div>
     <Navbar></Navbar>
     <Home/>
     <About/>
     <Experience/>
     <Projects/>
    </div>
  )
}

export default App
