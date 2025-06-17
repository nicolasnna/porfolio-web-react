import Stack from "@mui/material/Stack"
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined"
import "./AboutMe.css"
import * as constants from "../../utils/constants"

export default function AboutMe() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Stack
        id="AboutMe"
        direction={"row"}
        display={"flex"}
        alignSelf={"start"}
        justifyItems={"center"}
        spacing={2}
      >
        <PersonSearchOutlinedIcon sx={{ fontSize: constants.fontIconMain }} />
        <h1>Sobre mí</h1>
      </Stack>
      <div className="cardAbout">
        <div className="textAbout">
          <p>
            Hola, soy Nicolás Norambuena, desarrollador de software con formación como <strong>Ingeniero Civil en Mecatrónica</strong> y una fuerte pasión por crear soluciones tecnológicas en el área de la robótica y el desarrollo web.
          </p>
          <p>
            Desde siempre me ha interesado la programación, y he aplicado ese interés tanto en proyectos robóticos —trabajando con sistemas embebidos, ROS y microcontroladores— como en el desarrollo de aplicaciones web full-stack.
          </p>
          <p>
            En el área web, me he formado de manera autodidacta, con un enfoque especial en el frontend, utilizando tecnologías como React, TypeScript y CSS. También he explorado el backend cuando los proyectos lo han requerido, implementando APIs y bases de datos con herramientas como FastAPI y MySQL.
          </p>
          <p>
            Te invito a revisar algunos de mis proyectos en desarrollo web y robótica en mi{" "}
            <a href={constants.urlGithub} target="_blank">
              Github
            </a>
            .
          </p>
        </div>
        <div className="cardPhoto">
          <img
            alt="Photo Nicolas Norambuena"
            width={"250em"}
            height={"100%"}
            src="/photo-me.webp"
          ></img>
        </div>
      </div>
    </Stack>
  )
}
