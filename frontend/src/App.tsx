import { Route, Routes } from "react-router-dom"
import Rodape from "./components/Footer/Rodape"
import Header from "./components/Header/Header"
import { Home } from "./pages/Home"
import { Formations } from "./components/formations/Formations"
import About from "./components/about"
import { Level1 } from "./components/levels/level1/Level1"
import { Level2 } from "./components/levels/level2/Level2"
import { Level3 } from "./components/levels/level3/Level3"
import { ContentLevel1 } from "./components/contentLevels/contentLevel1/ContentLevel1"
import { ContentLevel2 } from "./components/contentLevels/contentLevel2/ContentLevel2"
import { ContentLevel3 } from "./components/contentLevels/contentLevel3/ContentLevel3"


const App = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/formacao" element={<Formations />}/>
                    <Route path="/sobre" element={<About />}/>
                    <Route path="/nivel1" element={<Level1 />}/>
                    <Route path="/nivel2" element={<Level2 />}/>
                    <Route path="/nivel3" element={<Level3 />}/>
                    <Route path="/conteudoNivel1" element={<ContentLevel1 />}/>
                    <Route path="/conteudoNivel2" element={<ContentLevel2 />}/>
                    <Route path="/conteudoNivel3" element={<ContentLevel3 />}/>
                </Routes>
            <Rodape />
        </>
    )
}

export default App