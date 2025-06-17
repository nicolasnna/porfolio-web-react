import NavBar from "@components/Navbar/Navbar"
import Footer from "@components/Footer/Footer"
import useVisible from "@hooks/useVisible"
import Fab from "@mui/material/Fab"
import Stack from "@mui/material/Stack"
import UpIcon from "@mui/icons-material/KeyboardArrowUp"
import ItemProject from "@components/Item/ItemProject"
import * as constants from "@utils/constants"
import { Container } from "@mui/material"
import { Carousel } from "../components/Carousel/Carousel"

const ProjectsPage = () => {
  const visibleState = useVisible("hidden")

  const images = [
    "/webpuma/webpuma-1.webp",
    "/webpuma/webpuma-2.webp",
    "/webpuma/webpuma-3.webp",
    "/webpuma/webpuma-4.webp",
    "/webpuma/webpuma-5.webp",
    "/webpuma/webpuma-6.webp",
  ]

  return (
    <>
      <NavBar />
      <Container>
        <Carousel
          slides={images}
          slidesPerView={1}
          spacing={20}
          renderSlide={(image) => (
            <img style={{ width: "100%" }} src={image} />
          )}
        />
        <section>
          <Stack
            direction={"row"}
            spacing={2}
            display={"flex"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <img style={{ width: "2em", height: "2.3em" }} src="/favicon.svg" />
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
