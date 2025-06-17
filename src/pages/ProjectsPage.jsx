import NavBar from "@components/Navbar/Navbar"
import Footer from "@components/Footer/Footer"
import useVisible from "@hooks/useVisible"
import Fab from "@mui/material/Fab"
import Stack from "@mui/material/Stack"
import UpIcon from "@mui/icons-material/KeyboardArrowUp"
import ItemProject from "@components/Item/ItemProject"
import * as constants from "@utils/constants"
import { Container } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import DataObjectIcon from '@mui/icons-material/DataObject';

const ProjectsPage = () => {
  const visibleState = useVisible("hidden")
  const { state } = useLocation()
  let { targetId } = state || {}
  
  // Navegar hacia un elemento en especifico desde otra pagina
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (el) {
      el?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [targetId])

  console.log("ProjectsPage", constants.projectList)

  return (
    <>
      <NavBar />
      <Container>
        <section>
          <Stack
            direction={"row"}
            spacing={2}
            display={"flex"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <DataObjectIcon sx={{ fontSize: constants.fontIconMain }}/>
            <h1 style={{ fontSize: "2em" }}>Proyectos</h1>
          </Stack>
          {constants.projectList.map((project) => (
            <ItemProject key={project.id} project={project} />
          ))}
        </section>
        <Fab
          size="big"
          sx={{
            background: "#6633ee",
            position: "fixed",
            bottom: 50,
            right: 80,
            visibility: visibleState,
            ":hover": {
              background: "#6633ee",
              opacity: 0.9,
            },
          }}
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }}
        >
          <UpIcon sx={{ color: "#E0FFFF" }} />
        </Fab>
      </Container>
      <Footer />
    </>
  )
}
export default ProjectsPage
