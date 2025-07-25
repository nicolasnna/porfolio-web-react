import { useNavigate } from "react-router-dom"
import "./Navbar.css"
import Stack from "@mui/material/Stack"

function NavigationToElement() {
  const navigate = useNavigate()
  const isMainPage = document.getElementById("MainPage") != null

  // Navegar segun id element
  const navigateToElement = (idElement) => {
    if (!isMainPage) navigate("/")
    const id = idElement.substring(1)
    const element = document.getElementById(id)

    if (element === null) {
      navigate("/" + idElement, { state: { targetId: id } })
    } else {
      if (id === "root") window.scroll({ top: 0, behavior: "smooth" })
      else element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return navigateToElement
}

const Navbar = () => {
  const navigateElement = NavigationToElement()

  return (
    <Stack className="Navbar" direction="row" margin={0} padding={0}>
      <a
        style={{ fontSize: "normal"}}
        onClick={() => {
          navigateElement("#root")
        }}
      >
        <div>Inicio</div>
      </a>
      <a
        style={{ fontSize: "normal"}}
        onClick={() => {
          navigateElement("#AboutMe")
        }}
      >
        <div>Sobre mí</div>
      </a>
      <a style={{ fontSize: "normal"}} href="/projects">
        <div>Proyectos</div>
      </a>
    </Stack>
  )
}

export default Navbar
