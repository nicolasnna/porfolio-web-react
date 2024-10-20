import Stack from "@mui/material/Stack"
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined"
import "./AboutMe.css"
import * as constants from "../../utils/constants"
import { Box } from "@mui/material"

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
            Hola, soy Nicolás Norambuena, <strong>Ingeniero Mecatrónico</strong>{" "}
            con pasión por desarrollar soluciones robóticas. Desde siempre me ha
            interesado la programación, tanto aplicada a la robótica como al
            desarrollo web.
          </p>
          <p>
            En el desarrollo web, he aprendido de forma autodidacta, enfocándome
            principalmente en el frontend. También he explorado algunas áreas
            del backend según lo que necesito para mis proyectos personales o en
            el trabajo.
          </p>
          <p>
            Puedes echarle un vistazo a mis proyectos de robótica y desarrollo
            web en mi{" "}
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
