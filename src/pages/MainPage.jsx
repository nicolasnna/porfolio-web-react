import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Experience from "../components/Experience/Experience"
import Academic from "../components/Academic/Academic"
import * as constants from "../utils/constants"
import Footer from "../components/Footer/Footer"
import AboutMe from "../components/AboutMe/AboutMe"
import Fab from "@mui/material/Fab"
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useEffect } from "react"
import Skills from "../components/Skills/Skills"
import { useLocation } from "react-router-dom"
import useVisible from "../hooks/useVisible"


export default function MainPage() {
  const { state } = useLocation()
  let { targetId } = state || {}

  // Navegar hacia un elemento en especifico desde otra pagina
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [targetId]);

  const visibleState = useVisible('hidden')

  return (
    <div id="MainPage">
      <Navbar/>
      <Hero urlAvatar={constants.urlAvatar} urlRef={constants.urlLinkin}/>
      <Skills/>
      <Experience experienceList={constants.experienceList}/>
      <Academic academicList={constants.academicList}/> 
      <AboutMe />
      <Footer />
      <Fab size='big' 
        sx={{ background:'#6633ee', 
          position:'fixed', 
          bottom: 50, 
          right: 80, 
          visibility: visibleState,
          ":hover": {
            background:'#6633ee',
            opacity: 0.9,
          }}}
          onClick={()=> {
            window.scroll({
              top: 0,
              behavior: 'smooth'
            })
          }}
           >
        <UpIcon sx={{color: '#E0FFFF'}}/>
      </Fab>
    </div>
  )
}
