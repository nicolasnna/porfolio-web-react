import Navbar from "@components/Navbar/Navbar"
import Hero from "@components/Hero/Hero"
import Experience from "@components/Experience/Experience"
import Academic from "@components/Academic/Academic"
import * as constants from "@utils/constants"
import Footer from "@components/Footer/Footer"
import AboutMe from "@components/AboutMe/AboutMe"
import Fab from "@mui/material/Fab"
import UpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useVisible from "@hooks/useVisible"
import { Box, Container, Stack } from "@mui/material"
import { Carousel } from "../components/Carousel/Carousel"
import DataObjectIcon from '@mui/icons-material/DataObject';
import useWindowSize from "../hooks/useWindowSize"

export default function MainPage() {
  const { state } = useLocation()
  let { targetId } = state || {}
  const navigate = useNavigate()
  const windowSize = useWindowSize()

  const slidesToShow = windowSize.width < 600 ? 1 : windowSize.width < 900 ? 2 : 3
  // Navegar hacia un elemento en especifico desde otra pagina
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (el) {
      el?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [targetId])

  const visibleState = useVisible("hidden")

  return (
    <>
      <Navbar />
      <Container>
        <Stack gap={10}>
          <Hero urlAvatar={constants.urlAvatar} urlRef={constants.urlLinkin} />
          <Box>
            <Stack marginY={4} marginX={1} direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={2}>
              <DataObjectIcon sx={{ fontSize: constants.fontIconMain }}/>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "bold"}}>
                Proyectos destacados
              </h2>
            </Stack>
            <Carousel
              slides={constants.featuredList}
              spacing={20}
              slidesPerView={slidesToShow}
              renderSlide={(item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img width="100%" src={item.img} />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.8)",
                      padding: "0.7rem 0.5rem",
                      boxSizing: "border-box",
                      fontSize: "0.9rem"
                    }}
                  >
                    <p>{item.description}</p>
                  </div>
                  <button
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "none",
                      cursor: "pointer",
                      position: "absolute",
                      top: "1%",
                      right: "1%",
                      padding: "0.5rem 0.5rem",
                      color: '#00FFFF',
                      fontSize: "1rem",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                    onClick={() => {
                      navigate(`/projects/#${item.idRouter}`, { state: { targetId: item.idRouter } })
                    }}
                  >
                    Ver más
                  </button>
                  <div
                    style={{
                      position: "absolute",
                      top: "0%",
                      left: "0%",
                      padding: "0.5rem 0.5rem",
                      color: '#00FFFF',
                      background: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "0 0 10px 0",
                    }}
                  >
                    <span>{item.title}</span>
                  </div>
                </div>
              )}
            />
          </Box>
          <Experience experienceList={constants.experienceList} />
          <Academic academicList={constants.academicList} />
          <AboutMe />
        </Stack>
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
